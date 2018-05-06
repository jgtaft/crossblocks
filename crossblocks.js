var svg = d3.select("#blox").append("svg")
  .attr("height", 700)
  .attr("width", 700);



function showBlox(w, h){
  svg.selectAll("rect").remove();
  svg.selectAll("line").remove();

  var bloxArr = [];
  for (i=0; i<w; i++){
    for (j=0; j<h; j++){
      var obj = {x: i * 20, y: j*20, c:Math.round(Math.random())};
      bloxArr.push(obj);
    }
  }

  var blox = svg.selectAll("rect").data(bloxArr);
  blox.enter().append("rect")
    .merge(blox)
    .attr("x", function(d){return d.x; })
    .attr("y", function(d){return d.y; })
    .attr("width", 20)
    .attr("height", 20)
    .attr("fill", function(d){
      if(d.c==0){return "#000000";}
      if(d.c==1){return "#FFFFFF";}
    })
    .attr("stroke", "grey")
    .on("click", function(){
      console.log("click");
      d3.select(this).attr("fill", "red");
    });
}
showBlox(10,10);
