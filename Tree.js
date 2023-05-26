var margin = {top: 20, right: 150, bottom: 60, left: 80},
     width =400 - margin.left - margin.right,
     height =400 - margin.top - margin.bottom
var data={
    name:"world",
    children:
    [   
        {   
            name:"Asia",
            children:
            [
                {   name:"China",
                    population:250 //in millions
                },
                {    name:"India",
                    population:150 //in million
                }
            ]
        },
        {
            name:"Europe",
            children:
            [
                {   name:"UK",
                    population:68 //in millions
                },
                {   name:"France",
                    population:65 //in million
                }
            ]
        },
        {   name:"North america",
            children:
            [
                {   name:"USA",
                    population:120 //in millions
                },
                {   name:"Canada",
                    population:50 //in million
                }
            ]
        }
    ]
}
var scale=d3.scaleOrdinal([
          "#00A5E3",
          "#FF96C5",
          "#00CDAC",])
var svg = d3.select("body") //create Svg element
   .append("svg")
   .attr('width', width + margin.right + margin.left)
   .attr('height', height + margin.top + margin.bottom)
   .style("border", "solid 1px red")
   .attr("transform","translate(250,0)"); // To align svg at the center in the output tab.
var treemap = d3.treemap()
              .size([400,400])
              .paddingInner(2)
var c_data = d3.hierarchy(data)//We have d3.hierarchy which will add the positional information rectangles within the treemap.
c_data.sum(d => d.population)//The .sum() function will help to determine the size of each rectangle on the basis of the population.
let cell = svg.selectAll('tree')
             .data(treemap(c_data).leaves())
             .enter()
             .append('g')
             .attr("transform",d => 'translate('+[d.x0, d.y0]+')')
cell.append('rect')
    .attr("width",d=> d.x1 - d.x0)
    .attr("height",d=> d.y1 - d.y0)
    .attr("fill",d => scale(d.parent.data.name))
cell.append('text')
    .text(d => d.data.name)
    .attr("alignment-baseline", "hanging")

    var margin = {top: 20, right: 150, bottom: 60, left: 80},
     width = 700 - margin.left - margin.right,
     height = 600 - margin.top - margin.bottom;

var svg = d3.select("body") //create Svg element
   .append("svg")
   .attr('width', width + margin.right + margin.left)
   .attr('height', height + margin.top + margin.bottom)
   .style("border", "solid 1px red")
   .attr("transform","translate(100,0)"); // To align svg at the center in the output tab.
var data = [
   { grade: "A", num_students: 8},
   { grade: "A-", num_students: 12},
   { grade: "B+", num_students: 20},
   { grade: "B", num_students: 25},
   { grade: "B-", num_students: 20},
   { grade: "C+", num_students: 10},
   { grade: "F", num_students: 5 },
        ]                  
var x = d3.scaleBand()
    .domain(data.map(d => d.grade))
    .range([0, width])
    .padding(0.2);
var y = d3.scaleLinear()
    .domain([0,d3.max(data,d=> d.num_students)])
    .range([height, 0]);                      
var chart=svg.append('g')
   .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')
   .attr('width', width)
   .attr('height', height)  
chart.append('g')
   .call(d3.axisLeft(y))
chart.append('g')
     .call(d3.axisBottom(x))
     .attr('transform', 'translate(0,' + height + ')')
chart.selectAll('rect')
    .data(data)
    .enter()
    .append('rect')
    .attr('width', x.bandwidth)
    .attr('height', d => height - y(d.num_students))
    .attr('x', d => x(d.grade))
    .attr('y', d => y(d.num_students))
    .attr('fill','#00A5E3')
    .on("mouseover", function(){
        this.style.fill="#FF96C5"
    })
    .on("mouseout", function(){
        this.style.fill="#00A5E3"
    });
svg.append("text")                                  // labelling x-axis
    .text("Grades")          
    .attr("transform","translate(250,570)");
svg.append("text")                                 // labelling y-axis
    .text("Num_students")
    .attr('transform', "translate(50,270) rotate(-90)");   

  var margin2 = {top: 20, right: 150, bottom: 60, left: 80},
  width = 350 - margin2.left - margin2.right,
  height = 350 - margin2.top - margin2.bottom;

var svg2 = d3.select("body") //create Svg element
  .append("svg")
  .attr('width', width + margin2.right + margin2.left)
  .attr('height', height + margin2.top + margin2.bottom)
  .style("border", "solid 1px red")
  .call(d3.zoom()
          .on("zoom", function () {
          svg2.attr("transform", d3.event.transform)
   }))
 .append("g")

svg2.append("circle")
  .attr("r", 40)
  .attr("cx", 180)
  .attr("cy", 180)
  .style("fill", "#74737A")

  var data={
    "nodes": [
      {id: "Alex"},
      {id: "Brandon"},
      {id: "Camilieo"},
      {id: "Grace"},
      {id: "Sarah"},
    ],
    "links": [
      {"source": "Alex", "target": "Camilieo"},
      {"source": "Grace", "target": "Camilieo"},
      {"source": "Sarah", "target": "Alex"},
      {"source": "Alex", "target": "Grace"},
      {"source": "Camilieo", "target": "Brandon"} 
    ]
  }
  
  var tooltip = d3.select("body")
  .append("div")
  .style("visibility", "hidden")
  .style("color", "Black")
  .text("tooltip");
  
  var simulation = d3.forceSimulation(data.nodes)
                       .force("link",d3.forceLink(data.links).id(function(d) {return d.id;}))
                       .force("charge", d3.forceManyBody().strength(-300))
                       .force("center", d3.forceCenter(width + 100 , height ))
                       .on("tick", ticked)                 
  var svg = d3.select("body") //create Svg element
              .append("svg")
              .attr('width', width + margin.right + margin.left)
              .attr('height', height + margin.top + margin.bottom)
              .style("border", "solid 1px red");    
  var link = svg.append("g")
                .selectAll("line")
                .data(data.links)
                .enter()
                .append("line")
                .attr("stroke-width",7)
                .style('stroke','#FF96C5');
  var node = svg.append("g")
                .selectAll("circle")
                .data(data.nodes)
                .enter()
                .append("circle")
                .attr("r", 10)
                .attr("fill","#00A5E3")
                .on("mouseover", function(d) {
                     tooltip.text(d.id);
                     tooltip.style("visibility", "visible");
                       })
                .on("mouseout", function(){
                  return tooltip.style("visibility", "hidden");});       
  function ticked() {
      link.attr("x1", function(d) {return d.source.x;})
          .attr("y1", function(d) {return d.source.y;})
          .attr("x2", function(d) {return d.target.x;})
          .attr("y2", function(d) {return d.target.y;});
      node.attr("cx", function(d) {return d.x;})
          .attr("cy", function(d) {return d.y;});
       } 
  