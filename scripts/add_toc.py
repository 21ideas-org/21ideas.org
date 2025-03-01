#!/usr/bin/env python3
import os
import re
import sys

def process_file(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Check if file starts with frontmatter
    if not content.startswith('---\n'):
        return

    # Split the content into frontmatter and rest
    parts = content.split('---\n', 2)
    if len(parts) < 3:
        return

    frontmatter = parts[1]
    rest_content = parts[2]

    # Check if bookToc is already set
    if 'bookToc:' in frontmatter:
        return

    # Add bookToc: true to frontmatter
    new_frontmatter = frontmatter.rstrip() + '\nbookToc: true\n'
    
    # Write the file back
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write('---\n')
        f.write(new_frontmatter)
        f.write('---\n')
        f.write(rest_content)

def main():
    content_dir = 'content.ru'
    
    for root, dirs, files in os.walk(content_dir):
        for file in files:
            if file.endswith('.md') and file != '_index.md':
                file_path = os.path.join(root, file)
                print(f"Processing {file_path}")
                process_file(file_path)

if __name__ == '__main__':
    main()
    print("Done! Added bookToc: true to all content files except _index.md") 