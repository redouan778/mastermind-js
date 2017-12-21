var gameveld = document.getElementById("gameveld");
var dotveld = document.getElementById("dotveld");
var button_1 = document.getElementById("button_1");
var colors = ["red", "green", "blue", "orange", "hotpink", "purple"];
var count = 0;
var row = 1;
var column = 1;




  for(j=1; j<=12; j++){
//MAke row
    for(i= 1; i<= 4; i++){
      var div = document.createElement("button");
      div.id= "row_" + j + "column_" + i ;
      div.classList.add("btnmargin");
      gameveld.appendChild(div); //Append to row
  }
  // gameveld.appendChild(row);//voeg row toe aan gameveld
}


function addcolor(usecolor){
  console.log(usecolor);
  console.log("row_"+ row + "column_" + column)
  var knop = document.getElementById( "row_"+ row + "column_" + column );
  knop.style.backgroundColor = colors[usecolor];
  column++;

}

function check(){
  row++;
  column= 1;

}
