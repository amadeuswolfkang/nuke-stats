import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

import jsonData from "./nuclear-warhead-inventories.json";

import "./style.css";

export default function BarChart() {
  const svgRef = useRef();

  const width = 740;
  const height = 400;
  const marginTop = 20;
  const marginRight = 120;
  const marginBottom = 30;
  let marginLeft = 140;

  // Executes D3 after component is mounted.
  useEffect(() => {
    // Extracting data from imported JSON
    let data = jsonData.map((d) => ({
      country: d.Entity,
      numTotalWarheads:
        parseFloat(d["Number of deployed strategic nuclear warheads"]) +
        parseFloat(d["Number of deployed nonstrategic nuclear warheads"]) +
        parseFloat(d["Number of nondeployed nuclear warheads in reserve"]) +
        parseFloat(d["Number of retired nuclear warheads"]),
    }));

    console.log(data);

    const flags = {
      "United States": "https://flagicons.lipis.dev/flags/4x3/us.svg",
      China: "https://flagicons.lipis.dev/flags/4x3/cn.svg",
      Russia: "https://flagicons.lipis.dev/flags/4x3/ru.svg",
      France: "https://flagicons.lipis.dev/flags/4x3/fr.svg",
      "United Kingdom": "https://flagicons.lipis.dev/flags/4x3/gb.svg",
      India: "https://flagicons.lipis.dev/flags/4x3/in.svg",
      Pakistan: "https://flagicons.lipis.dev/flags/4x3/pk.svg",
      "North Korea": "https://flagicons.lipis.dev/flags/4x3/kp.svg",
      Israel: "https://flagicons.lipis.dev/flags/4x3/il.svg",
    };

    // Sort data descending by nuclearWeaponsByCountry_totalWeapons.
    data.sort((a, b) =>
      d3.descending(
        a.numTotalWarheads,
        b.numTotalWarheads
      )
    );

    // Y scale.
    const y = d3
      .scaleBand()
      .domain(data.map((d) => d.country))
      .range([marginTop, height - marginBottom])
      .padding(0.1);

    // X scale.
    const x = d3
      .scaleLinear()
      .domain([0, d3.max(data, (d) => d.numTotalWarheads)])
      .range([marginLeft, width - marginRight]);

    // Select SVG element and set attributes.
    const svg = d3
      .select(svgRef.current)
      .attr("width", width)
      .attr("height", height)
      .attr("viewBox", [0, 0, width, height])
      .attr("style", "max-width: 100%; height: auto;");

    // Render bars.
    svg
      .selectAll("rect") // Select all rectangles.
      .data(data) // Binds data to the selection. When you call a function, it will apply to each data point.
      .enter() // Creates new rect elements for each data point.
      .append("rect") // Appends a rect for each item in the data array.

      // Set x and y position of bars.
      .attr("x", marginLeft)
      .attr("y", function (d) {
        return y(d.country);
      })

      // Set width and height of bars.
      .attr("width", function (d) {
        return x(d.numTotalWarheads) - marginLeft;
      })
      .attr("height", function (d) {
        return y.bandwidth();
      })

      // Bar color.
      .style("fill", "var(--color-main)");

    // Add flags next to the country names on the y-axis.
    svg
      .selectAll("image")
      .data(data)
      .enter()
      .append("image")
      .attr("xlink:href", (d) => flags[d.country])
      .attr("x", marginLeft - 35) // Adjust the position as needed
      .attr("y", (d) => y(d.country) + y.bandwidth() / 3 - 10) // Adjust the position as needed
      .attr("width", 28) // Adjust the size as needed
      .attr("height", 28); // Adjust the size as needed

    // Add numbers on the right side of the bars.
    svg
      .selectAll("text")
      .data(data)
      .enter()
      .append("text")
      .attr("x", (d) => x(d.numTotalWarheads) + 10) // Adjust the position as needed
      .attr("y", (d) => y(d.country) + y.bandwidth() / 2)
      .attr("dy", "0.35em")
      .style("font-family", "Roboto")
      .style("font-size", "16px")
      .style("font-weight", "300")
      .style("fill", "var(--color-main") // Change the color here
      .text((d) => d.numTotalWarheads);

    // Add the y-axis.
    svg
      .append("g")
      .attr("transform", `translate(${marginLeft},0)`)
      .call(d3.axisLeft(y).tickSize(0)) // Adjust the tick size as needed
      .selectAll("text")
      .style("font-family", "Roboto")
      .style("font-size", "14px")
      .style("font-weight", "300")
      .style("fill", "var(--color-main") // Change the color here
      .attr("dx", "-40"); // Adjust the spacing between country name and tick

    // Add the x-axis with specified number of ticks.
    // The effect will rerun when the dependency array changes.
    svg
      .append("g")
      .attr("transform", `translate(0,${height - marginBottom})`)
      .call(d3.axisBottom(x).ticks(6)) // Change the number of ticks here.
      .selectAll("text")
      .style("font-size", "12px")
      .style("font-family", "Roboto");
  }, [marginLeft, marginBottom, marginTop, marginRight, width, height]);

  return (
    <div>
      <div className="chartHeader">Global Nuclear Inventory</div>
      <div className="chartSubheader">
        Estimated nuclear weapon count by nation (2023)
      </div>
      <svg ref={svgRef}></svg>
      <div className="chartFooter">
        Source: Federation of American Scientists (2023) – with minor processing
        by Our World in Data
      </div>

    </div>
  );
}
