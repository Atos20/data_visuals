// select first elements text
// var s = d3.select('div').text();

// select all divs and change font color
// var s = d3.selectAll('div').style("color", "orange")

// grab the first element in the dom and chage its text
// var s = d3.select('div').text('I have changed,');

//append ()
// d3.select('div').append('body').text(':)')

//remove()
//this body element inside the first div is creater the we grab the body element and remove it
// var divElement = d3.select('div');

// var bodyChildElement = divElement.append('body').text('to remove');
// setTimeout(() => {

//   bodyChildElement.remove();
// }, 2000)

// using two style methods we change the first div's style 
// d3.select('div').style("color", "purple").style("background-color", "pink")

//add a new attribute to the second element 
// d3.select('body')
//   .select("div:nth-child(2)")
//   .style("background-color", "purple")
//   .attr("class", "some random class");

// datum() appends the whole data set to every node element in the dom, we duplicate the data for each node entry
// d3.select('body')
//   .selectAll('p')
//   .datum(['1', '2'])
//   .text(d => d);
//data() associates each data point for each node element
// if we have more data than node element the data just doesnt show in this case
// d3.select('body')
//   .selectAll('p')
//   .data([1,2,3])
//   .text(d => `- ${d}`)

// d3.select('body')
//   .selectAll('p')
//   .data([1,2,3,4,5])
//   .text(d => d)// we have to assing the text for the existing node elements
//   .enter() //bind the data
//   .append('p')// we are appending p tag for the missing node elements, we currently only have
//   .text(d => d) //add text to the newly created p tags

// var myData=["London","New york","Paris"]

// d3.select('body')
//   .selectAll('h1')
//   .data(myData)
//   .enter()
//   .append('h1')
//   .text(d => d)

  /* here is another variation for the same problem 
  var mydata=["London","New york","Paris"]
d3.select("body") // Creating three h1 tags using append function.
  .append("h1")
d3.select("body")
  .append("h1")
d3.select("body")
  .append("h1")    
d3.select("body") // Binding data mydata elements with h1 tags
  .selectAll("h1")
  .data(mydata)
  .text(function(d) { return d;}) 
  */ 


  //linear scale
  var cgpaconv = d3.scaleLinear()
  .domain([0,10])
  .range([0, 4]);
  
  console.log(cgpaconv(5))
//logarithmic search
var b_step = d3.scaleLog()
  .domain([1, 1048576])
  .range([0, 20])
  .base(2); 

  console.log(Math.ceil(b_step(100000)))// output: 17, it takes 17 steps to find 100000 in the range

var cgpaconv =  d3.scaleLinear()
  .domain([0, 10])
  .range([0, 4])
  .clamp(true);// with clamp true the output ofthis function will fall within the  given range

  console.log(cgpaconv(20));