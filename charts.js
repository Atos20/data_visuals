// data visualizations rules 
/*
- 5 second rule: the chart should answer the important question about data ata  glance in five seconds
  Line charts display trends and can be used to display continuous data over time.
  Bar charts are used to compare data between different groups over time.
  Pie charts are used to show proportions of the whole data and is more intuitive when used for percentages.
  Scatter charts are used to show the relationship between data.
  Treemaps are used to display hierarchical data.

- Color selection:
color is very important tool in data visualizzation and should be  used wisely
  - no to use no more that 7 colors 
  - use red colors for positive values and green for positive values
  - the should be enoigh contrast between two coloes 
*/

//basic chart structure
// var svg = d3.select("body") //create Svg element
//    .append("svg")
//    .attr("height",500)
//    .attr("width", 700)
//    .style("border", "solid 1px red")
//    .attr("transform","translate(100,0)"); // To align svg at the center in the output tab.
// var data = [
//     { day:0, stock_value: 0 },
//     { day:5, stock_value: 100 },
//     { day:10, stock_value: 200 },
//     { day:15, stock_value: 400 },
//     { day:20, stock_value:150 }];
// var xscale = d3.scaleLinear()                         // drawing  x scale
//                   .domain(d3.extent(data, d=>d.day))
//                   .range([0,500]);
// var yscale= d3.scaleLinear()                         // drawing  y scale
//            .domain(d3.extent(data,d=>d.stock_value))
//            .range([400,0])                   
// svg.append('g')                                      // drawing  x-axis
//    .call(d3.axisBottom(xscale))
//    .attr("transform","translate(150,420)")
// svg.append('g')                                     // drawing y-axis
//    .call(d3.axisLeft(yscale))
//    .attr("transform","translate(150,20)")     
// svg.append("text")                                  // labelling x-axis
//     .text("day")          
//     .attr("transform","translate(390,470)");
// svg.append("text")                                 // labelling y-axis
//     .text("stock_value")
//     .attr('transform', "translate(100,270) rotate(-90)");                       


var margin = {top: 20, right: 20, bottom: 60, left: 60}, // defining object with a property for each side
     width = 400 - margin.left - margin.right,  // width of the chart
     height = 400 - margin.top - margin.bottom; // height of the chart

var svg = d3.select("body") //create Svg element
   .append("svg")
   .attr('width', width + margin.right + margin.left)   //width of the SVG canvas
   .attr('height', height + margin.top + margin.bottom) //height of the SVG canvas
   .style("border", "solid 1px red")
   .attr("transform","translate(280,0)"); // To align svg at the center in the output tab.
   
var data = [
  { X:0, Y: 0 },
  { X: 10, Y: 100 },
  { X: 250, Y: 200 },
  { X: 300, Y: 400 },
  { X:350, Y:150}
];
var xscale = d3.scaleLinear()                        //drawing xscale
            .domain(d3.extent(data, d=>d.X))
            .range([0,width]);
var yscale = d3.scaleLinear()                         // drawing  y scale
            .domain(d3.extent(data,d=>d.Y))
            .range([height,0])

var chart = svg.append('g')                           //defining chart
    .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')
    .attr('width', width)
    .attr('height', height)
chart.append('g')
    .call(d3.axisBottom(xscale))
    .attr('transform', 'translate(0,' + height + ')')
chart.append('g')
    .call(d3.axisLeft(yscale))

    