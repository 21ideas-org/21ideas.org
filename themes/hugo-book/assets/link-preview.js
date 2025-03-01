document.addEventListener('DOMContentLoaded', function() {
    console.log('Link preview script loaded');
    
    // Create a single floating preview element
    const floatingPreview = document.createElement('div');
    floatingPreview.className = 'link-preview floating';
    floatingPreview.style.display = 'none';
    document.body.appendChild(floatingPreview);
    
    // Cache for storing fetched content
    const contentCache = new Map();
    
    // Function to get first two sentences
    function getFirstTwoSentences(text) {
        const sentences = text.match(/[^.!?]+[.!?]+/g) || [];
        const firstTwo = sentences.slice(0, 2).join(' ');
        return sentences.length > 2 ? firstTwo + '...' : firstTwo;
    }
    
    // Function to fetch and parse content
    async function fetchContent(href) {
        // Check cache first
        if (contentCache.has(href)) {
            return contentCache.get(href);
        }

        try {
            // Convert relative URLs to absolute
            const fullUrl = new URL(href, window.location.origin);
            const response = await fetch(fullUrl.pathname); // Use only pathname to avoid hash issues
            if (!response.ok) throw new Error('Network response was not ok');
            
            const text = await response.text();
            const parser = new DOMParser();
            const doc = parser.parseFromString(text, 'text/html');
            
            // Handle glossary terms
            if (href.includes('/glossary/') && href.includes('#')) {
                const termId = decodeURIComponent(href.split('#')[1]); // Decode the ID in case it's URL-encoded
                console.log('Looking for glossary term:', termId);
                
                // First try with the raw ID
                let termHeading = doc.querySelector(`h3#${termId}`);
                if (!termHeading) {
                    // If not found, try finding the h3 by its text content
                    const h3s = doc.getElementsByTagName('h3');
                    for (const h3 of h3s) {
                        if (h3.textContent.trim() === decodeURIComponent(termId)) {
                            termHeading = h3;
                            break;
                        }
                    }
                }
                
                if (termHeading) {
                    console.log('Found term heading:', termHeading.textContent);
                    let description = '';
                    
                    // Collect all text content between this h3 and the next one
                    let currentElement = termHeading.nextElementSibling;
                    while (currentElement && currentElement.tagName !== 'H3') {
                        description += ' ' + currentElement.textContent;
                        currentElement = currentElement.nextElementSibling;
                    }
                    
                    // Remove the anchor hash from the title
                    const title = termHeading.textContent.trim().replace(/ #$/, '');
                    description = getFirstTwoSentences(description.trim());
                    console.log('Term preview data:', { title, description });
                    
                    const data = { title, description };
                    contentCache.set(href, data);
                    return data;
                } else {
                    console.log('Term heading not found for ID:', termId);
                }
            }
            
            // Handle regular pages
            const data = extractFrontmatter(doc);
            contentCache.set(href, data);
            return data;
        } catch (error) {
            console.error('Error fetching content:', error);
            return null;
        }
    }
    
    // Function to extract frontmatter from HTML content
    function extractFrontmatter(doc) {
        const title = doc.querySelector('h1')?.textContent || '';
        const description = doc.querySelector('meta[name="description"]')?.content || '';
        
        // Try multiple ways to get the cover image
        let coverImg = '';
        
        // First try meta image tag
        coverImg = doc.querySelector('meta[property="og:image"]')?.content || '';
        
        // If no meta image, try page cover
        if (!coverImg) {
            // Try both pageCover and book-post_cover
            const pageCoverImg = doc.querySelector('.pageCover img, .book-post_cover img');
            if (pageCoverImg) {
                coverImg = pageCoverImg.src || pageCoverImg.getAttribute('data-src') || '';
            }
        }
        
        // Clean up the image URL if it's a relative path
        if (coverImg && !coverImg.startsWith('http')) {
            coverImg = new URL(coverImg, window.location.origin).href;
        }
        
        return { title, description, coverImg };
    }
    
    // Function to create preview HTML
    function createPreviewHTML(data, href) {
        const isGlossary = href && href.includes('/glossary/') && href.includes('#');
        
        if (isGlossary) {
            return `
                <div class="preview-content glossary">
                    <h4>${data.title || ''}</h4>
                    <p>${data.description || ''}</p>
                </div>
            `;
        }

        const hasImage = !!data.coverImg;
        return `
            <div class="preview-content page${!hasImage ? ' no-image' : ''}">
                ${hasImage ? `<img class="preview-image" src="${data.coverImg}" alt="${data.title}" loading="lazy">` : ''}
                <div class="preview-text">
                    <h4>${data.title || ''}</h4>
                    <p>${data.description || ''}</p>
                </div>
            </div>
        `;
    }
    
    // Function to position the preview box
    function positionPreview(previewBox, event) {
        const margin = 15;
        const rect = event.target.getBoundingClientRect();
        const previewRect = previewBox.getBoundingClientRect();
        
        let left = event.clientX - (previewRect.width / 2);
        let top = rect.bottom + margin;

        // Keep preview within viewport bounds
        left = Math.max(margin, Math.min(left, window.innerWidth - previewRect.width - margin));
        if (top + previewRect.height > window.innerHeight - margin) {
            top = rect.top - previewRect.height - margin;
        }

        previewBox.style.left = `${left}px`;
        previewBox.style.top = `${top}px`;
    }
    
    // Function to check if link should show preview
    function shouldShowPreview(link) {
        if (!link) return false;
        
        const href = link.getAttribute('href');
        if (!href) return false;
        
        // Allow glossary hash links, but block other hash-only and external links
        if (href.startsWith('#')) return false; // Pure hash links
        if (href.startsWith('http')) return false; // External links
        if (link.closest('.book-menu')) return false; // Side menu links
        
        // Special handling for glossary links with hashes
        const isGlossaryLink = href.includes('/glossary/') && href.includes('#');
        if (isGlossaryLink) return true;
        
        return link.host === window.location.host;
    }
    
    // Main function to handle link previews
    async function handleLinkPreview(event) {
        const link = event.target.closest('a');
        if (!shouldShowPreview(link)) return;

        const href = link.getAttribute('href');
        
        // Determine if we're on a touch device
        const isTouchDevice = window.matchMedia('(hover: none) and (pointer: coarse)').matches;
        
        // For touch devices, we'll show on tap and hide on tap outside
        if (isTouchDevice) {
            event.preventDefault(); // Prevent navigation on first tap
            
            const existingPreview = document.querySelector('.link-preview.floating');
            if (existingPreview) {
                existingPreview.remove();
                
                // If tapping the same link that's already showing a preview, allow navigation
                if (existingPreview.dataset.href === href) {
                    window.location.href = href;
                    return;
                }
            }
        }

        // Create and position preview
        const preview = document.createElement('div');
        preview.className = 'link-preview floating';
        preview.dataset.href = href;

        // Position the preview
        if (!isTouchDevice) {
            const rect = link.getBoundingClientRect();
            const previewHeight = 250; // Approximate height
            
            // Position above or below the link depending on available space
            const spaceBelow = window.innerHeight - rect.bottom;
            const spaceAbove = rect.top;
            
            if (spaceBelow >= previewHeight || spaceBelow >= spaceAbove) {
                preview.style.top = `${rect.bottom + 10}px`;
            } else {
                preview.style.bottom = `${window.innerHeight - rect.top + 10}px`;
            }
            
            // Center horizontally relative to the link
            preview.style.left = `${rect.left + (rect.width / 2)}px`;
            preview.style.transform = 'translateX(-50%)';
        }

        // Add loading state with Russian text
        preview.innerHTML = '<div class="preview-content"><div style="text-align: center">Загрузка...</div></div>';
        document.body.appendChild(preview);

        // Add active class for touch animation
        if (isTouchDevice) {
            preview.classList.add('active');
        }

        // Fetch and display content
        fetchContent(href).then(content => {
            if (!content) {
                preview.remove();
                return;
            }
            
            const previewContent = createPreviewHTML(content, href);
            preview.innerHTML = previewContent;
        });
    }
    
    // Handle touch events outside the preview to close it
    if (window.matchMedia('(hover: none) and (pointer: coarse)').matches) {
        document.addEventListener('touchstart', (event) => {
            const preview = document.querySelector('.link-preview.floating');
            if (!preview) return;
            
            // Check if the touch is outside both the preview and the triggering link
            const isOutsidePreview = !preview.contains(event.target);
            const isOutsideLink = !event.target.closest(`a[href="${preview.dataset.href}"]`);
            
            if (isOutsidePreview && isOutsideLink) {
                preview.remove();
            }
        });
    }

    // Event listeners
    document.addEventListener('mouseover', (event) => {
        const link = event.target.closest('a');
        if (shouldShowPreview(link)) {
            handleLinkPreview(event);
        }
    });

    document.addEventListener('mouseout', (event) => {
        const link = event.target.closest('a');
        const previewBox = document.querySelector('.link-preview.floating');
        if (link && previewBox) {
            previewBox.remove();
        }
    });
}); 