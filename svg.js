var svg = d3.select('body')
  .append('svg')
  .attr("height", 200)
  .attr("widht", 200)
  .style("border", "solid 8px red")
  .style("margin", 5);

var svg1 = d3.select('body')
  .append('svg')
  .attr("height", 200)
  .attr("widht", 200)
  .style("border", "solid 8px red")
  .style("margin", 5);

  //drawing a line
svg.append("line")
  .attr("x1", 50)
  .attr("y1", 100)
  .attr("x2", 250)
  .attr("y2", 100)
  .attr("stroke", "black")
  .attr("stroke-width","2px");

//drawing a rectangle
svg1.append('rect')
  .attr('x', 100)
  .attr('y', 50)
  .attr('height', 100)
  .attr('width', 100)
  .attr("rx", 20)
  .attr("fill", "#00A5E3")

var svg2 = d3.select("body") //create Svg element
  .append("svg")
  .attr("height",300 )
  .attr("width", 300)
  .style("border", "solid 8px red");

svg2.append("circle") //Drawing circle
  .text('circle')
  .attr("cx", 150)
  .attr("cy", 150)
  .attr("r", 20)
  .attr("fill", "#FF96C5") // #FF96C5 is Spring green color

  //tranformation
var svg3 = d3.select("body") //create Svg element
  .append("svg")
  .attr("height",300 )
  .attr("width", 300)
  .style("margin", 5)
  .style("border", "solid 8px red")

svg3.append('rect')
  .attr("x", 0)
  .attr("y", 0)
  .attr("height", 100)
  .attr("width", 100)
  .attr("fill", "blue")
  .style("margin", 5)
  .transition()
  .duration(3000)
  .attr("transform", "translate(200, 200)")

  //scale
  var svg4 = d3.select("body") //create Svg element
  .append("svg")
  .attr("height",400 )
  .attr("width", 400)
  .style("border", "solid 8px red");

svg4.append("circle") //Drawing circle
  .attr("cx", 100)
  .attr("cy", 100)
  .attr("r", 50)
  .attr("fill", "#FF96C5")
  .transition() // line 13 and 14 will be explain in detail in next lesson
  .duration(3000)
  .attr("transform","scale(2)")


//Rotate
var svg5 = d3.select("body") //create Svg element
  .append("svg")
  .attr("height",370 )
  .attr("width", 370)
  .style("border", "solid 8px red");

svg5.append("rect") //Draw rectangle
  .attr("x", 200)
  .attr("y", 50)
  .attr("height", 100)
  .attr("width", 150)
  .attr("fill", "#00A5E3")
  .transition() // line 13 and 14 will be explain in detail in next lesson
  .duration(3000)
  .attr("transform","rotate(50)")

//SkewX
   var svg6 = d3.select("body") //create Svg element
  .append("svg")
  .attr("height",300 )
  .attr("width", 400)
  .style("border", "solid 8px red");

svg6.append("rect") //Draw rectangle
  .attr("x", 50)
  .attr("y", 50)
  .attr("height", 150)
  .attr("width", 170)
  .attr("fill", "#00A5E3")
  .transition() // line 13 and 14 will be explain in detail in next lesson
  .duration(3000)
  .attr("transform","skewY(30)")

   //Transition
  var svg7 = d3.select("body") //create Svg element
  .append("svg")
  .attr("height",200 )
  .attr("width", 250)
  .style("border", "solid 8px red")
  // .attr("transform","translate(320,0)"); // to center align svg in the output tab

svg7.append("rect") //Draw rectangle
  .attr("x", 50)
  .attr("y", 50)
  .attr("height", 100)
  .attr("width", 150)
  .attr("fill", "#00A5E3") //Irish blue color
  .transition()
  .duration(1000)
  .attr("fill","#00CDAC") //Neon carrot color

  //challenge falling circle
const svg8 = d3.select('body')
  .append('svg')
  .attr('height', 300)
  .attr('width', 300)
  .style('border', 'solid 8px red');

svg8.append('circle')
  .attr('cx', 150)
  .attr('cy', 30)
  .attr('r', 30)
  .attr('height', 30)
  .attr('width', 30)
  .attr('fill', 'black')
  .transition()
  .duration(3000)
  .attr("transform", "translate(0, 240)")
  .transition()
  .duration(2000)
  .attr('fill', 'green')
