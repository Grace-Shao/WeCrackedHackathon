// components/D3Chart.js
import { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const D3Chart = ({ data, visibleKeys }) => {
  const svgRef = useRef();

  useEffect(() => {
    if (!Array.isArray(data)) return;

    // Set up chart dimensions
    const margin = { top: 20, right: 30, bottom: 40, left: 40 };
    const width = 800 - margin.left - margin.right;
    const height = 400 - margin.top - margin.bottom;

    // Create the SVG element
    const svg = d3
      .select(svgRef.current)
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);

    const parseTime = d3.timeParse("%Y-%m-%d");
    data.forEach(d => {
      d.date = parseTime(d.period);
    });

    // Set up scales
    const x = d3.scaleTime()
      .domain(d3.extent(data, d => d.date))
      .range([0, width]);

    const y = d3.scaleLinear()
      .domain([0, d3.max(data, d => d3.max(visibleKeys, key => d[key]))])
      .nice()
      .range([height, 0]);

    // Add axes
    svg.append('g')
      .attr('class', 'x-axis')
      .attr('transform', `translate(0,${height})`)
      .call(d3.axisBottom(x));

    svg.append('g')
      .attr('class', 'y-axis')
      .call(d3.axisLeft(y));

    // Define line generator
    const line = d3.line()
      .x(d => x(d.date))
      .y(d => y(d.value));

    // Add lines for each key
    visibleKeys.forEach((key, index) => {
      const color = d3.schemeCategory10[index % 10];

      svg.append('path')
        .datum(data.map(d => ({ date: d.date, value: d[key] })))
        .attr('fill', 'none')
        .attr('stroke', color)
        .attr('stroke-width', 1.5)
        .attr('d', line);

      // Add circles for hover interaction
      svg.selectAll(`.dot-${key}`)
        .data(data)
        .enter()
        .append('circle')
        .attr('class', `dot-${key}`)
        .attr('cx', d => x(d.date))
        .attr('cy', d => y(d[key]))
        .attr('r', 4)
        .attr('fill', color)
        .on('mouseover', function(event, d) {
          d3.select(this)
            .transition()
            .duration(100)
            .attr('r', 6);

          const tooltip = d3.select('#tooltip');
          tooltip.style('opacity', 1)
            .html(`${key}: ${d[key]}<br>Date: ${d3.timeFormat('%Y-%m-%d')(d.date)}`)
            .style('left', `${event.pageX + 5}px`)
            .style('top', `${event.pageY - 28}px`);
        })
        .on('mouseout', function() {
          d3.select(this)
            .transition()
            .duration(100)
            .attr('r', 4);

          d3.select('#tooltip').style('opacity', 0);
        });
    });

    // Clean up
    return () => {
      d3.select(svgRef.current).selectAll('*').remove();
    };
  }, [data, visibleKeys]);

  return (
    <div>
      <svg ref={svgRef}></svg>
      <div id="tooltip" style={{ position: 'absolute', textAlign: 'center', width: '120px', height: 'auto', padding: '8px', font: '12px sans-serif', background: 'lightsteelblue', border: '0px', borderRadius: '8px', pointerEvents: 'none', opacity: 0 }}></div>
    </div>
  );
};

export default D3Chart;
