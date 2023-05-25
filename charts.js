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

//comuted margins
/*
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
*/
    //linear Chart
/*
var svg = d3.select("body") //create Svg element
        .append("svg")
        .attr("height",500)
        .attr("width", 500)
        .style("border", "solid 8px red")
      .attr("transform","translate(220,0)"); // To align svg at the center in the output tab.
var data = [
    { X:10,Y:100},
    { X:250,Y:200},
    { X:300,Y:400},
    { X:400,Y:150}
    ];

var generator = d3.line()
    .x(function (d) { return d.X; })
    .y(function (d) { return d.Y; });
svg.append('path')
    .datum(data)
    //We are using datum() instead of the data() function because we are only binding one path to all data elements 
    //instead of multiple paths for every single data element. In line 106, we have initialized the d attribute of the path,
    // which will draw the path with the help of the line generator
    .attr("d", generator)
    .attr("fill","none")
    .attr("stroke","blue")
    .attr("stroke-width","2px");

    */
   /*
//LineChart

//we define the margins
var margin = {top: 20, right: 20, bottom: 60, left: 80},
    width = 700 - margin.left - margin.right,
    height = 700 - margin.top - margin.bottom;

var svg = d3.select("body") //create Svg element
  .append("svg")
  .attr('width', width + margin.right + margin.left)
  .attr('height', height + margin.top + margin.bottom)
  .style("border", "solid 1px red")
  .attr("transform","translate(100,0)"); // To align svg at the center in the output tab.

var data = [
  {  date:"2020/01/01 00:00:00", patients: 600 },
  {  date:"2020/02/01 00:00:00", patients: 500 },
  {  date:"2020/03/01 00:00:00", patients: 400 },
  {  date:"2020/04/01 00:00:00", patients: 500 },
  {  date:"2020/05/01 00:00:00", patients: 300 },
  {  date:"2020/06/01 00:00:00", patients: 100 },
  {  date:"2020/07/01 00:00:00", patients: 50  },
  {  date:"2020/08/01 00:00:00", patients: 500 },
  {  date:"2020/09/01 00:00:00", patients: 550 },
  {  date:"2020/10/01 00:00:00", patients: 550 },
  {  date:"2020/11/01 00:00:00", patients: 550 },
  {  date:"2020/12/01 00:00:00", patients: 50 },
];

data=data.map(d => ({
  date: new Date(d.date),//this just displays the monts as a Date object 
  patients: d.patients
}))

var xscale = d3.scaleTime()
                .domain(d3.extent(data, d=>d.date))
                .range([0,width]);

var yscale = d3.scaleLinear()                         // drawing  y scale
          .domain([0,600])
          .range([height,0]);

var chart = svg.append('g')
  .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')
  .attr('width', width)
  .attr('height', height);

chart.append('g')
  .call(d3.axisBottom(xscale).tickFormat(d3.timeFormat("%b")))
  .attr('transform', 'translate(0,' + height + ')');

chart.append('g')
  .call(d3.axisLeft(yscale));

svg.append("text")                                  // labelling x-axis
  .text("Month")          
  .attr("transform","translate(350,680)");

svg.append("text")                                 // labelling y-axis
  .text("Number of patients")
  .attr('transform', "translate(40,400) rotate(-90)");

var generator = d3.line()
  .x(function (d) { return xscale(d.date); })
  .y(function (d) { return yscale(d.patients); });

chart.append('path')
  .datum(data)
  .attr("d", generator)
  .attr("fill","none")
  .attr("stroke","blue");

*/
/*
var margin = {top: 20, right: 20, bottom: 60, left: 80},
    width = 600 - margin.left - margin.right,
    height = 600 - margin.top - margin.bottom;

var svg = d3.select("body") //create Svg element
    .append("svg")
    .attr('width', width + margin.right + margin.left)
    .attr('height', height + margin.top + margin.bottom)
    .style("border", "solid 1px red")
   .attr("transform","translate(150,0)"); // To align svg at the center in the output tab.                
var chart=svg.append('g')
    .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')
    .attr('width', width)
    .attr('height', height)
var arc = d3.arc()                  // simple arc
    .innerRadius(0)
    .outerRadius(70)
    .startAngle(45 * (Math.PI/180)) //converting from degs to radians
    .endAngle(3) //angle in radians
var d_arc=d3.arc()                  // donut arc
    .innerRadius(40)               
    .outerRadius(70)
    .startAngle(0) 
    .endAngle(4) //angle in radians
chart.append("path")
    .attr("d", arc)
    .attr("transform", "translate(200,200)")  
    .attr("fill","#00A5E3")  // setting the color                 
chart.append("path")
    .attr("d", d_arc)
    .attr("transform", "translate(200,400)")  
    .attr("fill","#FF96C5")   // setting the color
chart.append("text")
    .text("Simple arc")
    .attr("transform", "translate(200,300)") 
chart.append("text")
    .text("Donut arc")
    .attr("transform", "translate(200,500)")                        

  */

    //PieChart
/*
var margin = {top: 20, right: 20, bottom: 60, left: 80},
  width = 500 - margin.left - margin.right,
  height = 500 - margin.top - margin.bottom;

var data = [
  {language:  "Python", value: 30},
  {language:  "Java", value: 20},
  {language:  "C/C++", value: 15},
  {language:  "Javascript", value: 35},
  {language:  "PHP", value: 15},];

colors=["#00A5E3","#FF96C5","#00CDAC","#FFA23A","#74737A"] 

var svg = d3.select("body") //create Svg element
  .append("svg")
  .attr('width', width + margin.right + margin.left)
  .attr('height', height + margin.top + margin.bottom)
  .style("border", "solid 1px red")
    .attr("transform","translate(200,0)");

var chart=svg.append('g')
  .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')
  .attr('width', width)
  .attr('height', height);

var pie= d3.pie() 
        .value(d => d.value);

var color_scale = d3.scaleOrdinal()
              .domain(data.map(d=>d.language))
              .range(colors);

let arc = d3.arc()
      .outerRadius(150)
      .innerRadius(0);

var p_chart = chart.selectAll("pie")
    .data(pie(data))
    .enter()
    .append("g")
    .attr('transform', 'translate(170,230)');

p_chart.append("path")
    .attr("d",arc) 
    .attr("fill",d=>{
      return color_scale(d.data.language);
    })     
p_chart.append("text")
      .text(function(d){ return d.data.language})
      .attr("transform", function(d) { 
        return "translate(" + arc.centroid(d) + ")";
        }) 
      .style("text-anchor", "middle")  
*/

//Area Chart
/*
var margin = {top: 20, right: 20, bottom: 60, left: 80},
    width = 700 - margin.left - margin.right,
    height = 700 - margin.top - margin.bottom;

var svg = d3.select("body") //create Svg element
  .append("svg")
  .attr('width', width + margin.right + margin.left)
  .attr('height', height + margin.top + margin.bottom)
  .style("border", "solid 1px red")
  .attr("transform","translate(100,0)"); 

var data = [
  {  date:"2020/01/01 00:00:00", patients: 600 },
  {  date:"2020/02/01 00:00:00", patients: 500 },
  {  date:"2020/03/01 00:00:00", patients: 400 },
  {  date:"2020/04/01 00:00:00", patients: 500 },
  {  date:"2020/05/01 00:00:00", patients: 300 },
  {  date:"2020/06/01 00:00:00", patients: 100 },
  {  date:"2020/07/01 00:00:00", patients: 50  },
  {  date:"2020/08/01 00:00:00", patients: 500 },
  {  date:"2020/09/01 00:00:00", patients: 550 },
  {  date:"2020/10/01 00:00:00", patients: 550 },
];

data = data.map(d => ({
  date: new Date(d.date),
  patients: d.patients
  }));

var xscale = d3.scaleTime()
                .domain(d3.extent(data, d=>d.date))
                .range([0,width]);

var yscale = d3.scaleLinear()                         // drawing  y scale
          .domain([0,600])
          .range([height,0])

var chart = svg.append('g')
  .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')
  .attr('width', width)
  .attr('height', height);

chart.append('g')
  .call(d3.axisBottom(xscale).tickFormat(d3.timeFormat("%b")))
  .attr('transform', 'translate(0,' + height + ')');

chart.append('g')
  .call(d3.axisLeft(yscale));

svg.append("text")                                  // labelling x-axis
  .text("Month")          
  .attr("transform","translate(350,680)");

svg.append("text")                                 // labelling y-axis
  .text("Number of patients")
  .attr('transform', "translate(40,400) rotate(-90)");

var area_generator = d3.area()
  .x(function (d) { return xscale(d.date); })
  .y0(height)
  .y1(function (d) { return yscale(d.patients); });

chart.append('path')
  .datum(data)
  .attr("d", area_generator)
  .attr('fill','#00A5E3')
*/
//StackedArea Chart
/*
var margin = {top: 20, right: 150, bottom: 60, left: 80},
     width = 950 - margin.left - margin.right,
     height = 700 - margin.top - margin.bottom;

var svg = d3.select("body") //create Svg element
   .append("svg")
   .attr('width', width + margin.right + margin.left)
   .attr('height', height + margin.top + margin.bottom)
   .style("border", "solid 1px red");;

var data = [
    {  date:"2020/01/01 00:00:00", flu_patients: 100, malaria_patients:100, dengue_patients: 10 },
    {  date:"2020/02/01 00:00:00", flu_patients: 200, malaria_patients:200,  dengue_patients: 30},
    {  date:"2020/03/01 00:00:00", flu_patients: 50, malaria_patients:150,  dengue_patients: 80},
    {  date:"2020/05/01 00:00:00", flu_patients: 70, malaria_patients:250,  dengue_patients: 90},
    {  date:"2020/06/01 00:00:00", flu_patients: 100, malaria_patients:300,  dengue_patients: 100},
    {  date:"2020/07/01 00:00:00", flu_patients: 150,  malaria_patients:150,   dengue_patients: 120},
    {  date:"2020/08/01 00:00:00", flu_patients: 200,malaria_patients:140,  dengue_patients: 70},
    {  date:"2020/09/01 00:00:00", flu_patients: 300,malaria_patients:80, dengue_patients: 60},
    {  date:"2020/10/01 00:00:00", flu_patients: 250, malaria_patients:70, dengue_patients: 50},
        ];    

data=data.map(d => ({
   date: new Date(d.date),
   flu_patients: d.flu_patients,
   malaria_patients: d.malaria_patients,
   dengue_patients: d.dengue_patients
   }))  
  
var stack=d3.stack().keys(["flu_patients", "malaria_patients", "dengue_patients"]);

var colors=["#00A5E3",
          "#FF96C5",
          "#00CDAC"];

var s_data=stack(data);

var xscale = d3.scaleTime()
            .domain(d3.extent(data, d=>d.date))
            .range([0,width]);

var yscale = d3.scaleLinear()
           .domain([0,d3.max(s_data[s_data.length-1],function(d){ return d[1]})])                         // drawing  y scale
           .range([height,0]);

var chart = svg.append('g')
   .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')
   .attr('width', width)
   .attr('height', height)  
var area_generator = d3.area()
    .x(function (d) { return xscale(d.data.date); })
    .y0(function (d) { return yscale(d[0]);})
    .y1(function (d) { return yscale(d[1]); });      
var p_chart=chart.selectAll("area")
     .data(s_data)
     .enter()
     .append("g")
p_chart.append("path")
     .attr("fill",function(d,i){ return colors[i]})
     .attr("d",area_generator) 
chart.append('g')
   .call(d3.axisBottom(xscale).tickFormat(d3.timeFormat("%b")))
   .attr('transform', 'translate(0,' + height + ')')
chart.append('g')
   .call(d3.axisLeft(yscale))
svg.append("text")                                  // labelling x-axis
    .text("Month")          
    .attr("transform","translate(350,680)");
svg.append("text")                                 // labelling y-axis
    .text("Number of patients")
    .attr('transform', "translate(40,400) rotate(-90)"); 
chart.append("rect") //Draw rectangle
   .attr("x", 740)
   .attr("y", 50)
   .attr("height", 10)
   .attr("width", 15)
   .attr("fill", "#00A5E3")
chart.append("text")                                  // labelling x-axis
    .text("Flu_patients")          
    .attr("transform","translate(760,60)");
chart.append("rect") //Draw rectangle
   .attr("x", 740)
   .attr("y", 70)
   .attr("height", 10)
   .attr("width", 15)
   .attr("fill", "#FF96C5")
chart.append("text")                                  // labelling x-axis
    .text("Malaria_patients")          
    .attr("transform","translate(760,80)");
chart.append("rect") //Draw rectangle
   .attr("x", 740)
   .attr("y", 90)
   .attr("height", 10)
   .attr("width", 15)
   .attr("fill", "#00CDAC")
chart.append("text")                                  // labelling x-axis
    .text("Dengue_patients")          
    .attr("transform","translate(760,100)");
*/

//BARCHART
/*
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
    .attr('fill','#00A5E3');
svg.append("text")                                  // labelling x-axis
    .text("Grades")          
    .attr("transform","translate(250,570)");
svg.append("text")                                 // labelling y-axis
    .text("Num_students")
    .attr('transform', "translate(50,270) rotate(-90)");     

*/

