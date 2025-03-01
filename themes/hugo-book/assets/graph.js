'use strict';

{{ $graphDataFile := printf "%s.graph-data.json" .Language.Lang }}
{{ $graphData := resources.Get "graph-data.json" | resources.ExecuteAsTemplate $graphDataFile . | resources.Minify | resources.Fingerprint }}

(function() {
  const container = document.getElementById('graph-container');
  if (!container) return;

  // Load D3.js
  const script = document.createElement('script');
  script.src = 'https://d3js.org/d3.v7.min.js';
  script.onload = initGraph;
  document.head.appendChild(script);

  function initGraph() {
    const width = container.clientWidth;
    const height = container.clientHeight || 500;

    const svg = d3.select('#graph-container')
      .append('svg')
      .attr('width', width)
      .attr('height', height);

    // Add zoom behavior
    const zoom = d3.zoom()
      .scaleExtent([0.1, 4])
      .on('zoom', (event) => {
        g.attr('transform', event.transform);
      });

    svg.call(zoom);

    const g = svg.append('g');

    // Create forces
    const simulation = d3.forceSimulation()
      .force('link', d3.forceLink().id(d => d.id).distance(100))
      .force('charge', d3.forceManyBody().strength(-100))
      .force('center', d3.forceCenter(width / 2, height / 2));

    // Load graph data
    fetch('{{ $graphData.RelPermalink }}')
      .then(response => response.json())
      .then(data => {
        // Create links
        const links = g.selectAll('.link')
          .data(data.links)
          .enter()
          .append('line')
          .attr('class', 'link')
          .attr('stroke', '#999')
          .attr('stroke-opacity', 0.6);

        // Create nodes
        const nodes = g.selectAll('.node')
          .data(data.nodes)
          .enter()
          .append('g')
          .attr('class', 'node')
          .call(d3.drag()
            .on('start', dragstarted)
            .on('drag', dragged)
            .on('end', dragended));

        // Add circles to nodes
        nodes.append('circle')
          .attr('r', 5)
          .attr('fill', '#69b3a2');

        // Add titles to nodes
        nodes.append('title')
          .text(d => d.title);

        // Add labels to nodes
        nodes.append('text')
          .text(d => d.title)
          .attr('x', 8)
          .attr('y', 3)
          .style('font-size', '8px');

        // Update simulation
        simulation
          .nodes(data.nodes)
          .on('tick', ticked);

        simulation.force('link')
          .links(data.links);

        // Tick function to update positions
        function ticked() {
          links
            .attr('x1', d => d.source.x)
            .attr('y1', d => d.source.y)
            .attr('x2', d => d.target.x)
            .attr('y2', d => d.target.y);

          nodes
            .attr('transform', d => `translate(${d.x},${d.y})`);
        }

        // Drag functions
        function dragstarted(event, d) {
          if (!event.active) simulation.alphaTarget(0.3).restart();
          d.fx = d.x;
          d.fy = d.y;
        }

        function dragged(event, d) {
          d.fx = event.x;
          d.fy = event.y;
        }

        function dragended(event, d) {
          if (!event.active) simulation.alphaTarget(0);
          d.fx = null;
          d.fy = null;
        }
      });
  }
})(); 