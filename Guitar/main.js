console.log("Test");
var guitarSVG = document.getElementById("test");
var upper = document.getElementById("upper");
//guitarSVG.add(  <line x1="0" y1="30" x2="600" y2="30" stroke="black" />)

const boxWidth =600;
const boxHeight= 150;
const boxOffsetX=30;
const boxOffSetY=30;

//Make the horizon lines
for(i=1; i < 5; i++){
var newLine = document.createElementNS('http://www.w3.org/2000/svg','line');
    newLine.setAttribute('id','line2');
    newLine.setAttribute('x1','0');
    newLine.setAttribute('y1',i*(boxHeight/5));
    newLine.setAttribute('x2',boxWidth);
    newLine.setAttribute('y2',i*(boxHeight/5));
    newLine.setAttribute('stroke',"black")

guitarSVG.appendChild(newLine);
}

//make veritcal lines
for(i=1; i < 15; i++){
var newLine = document.createElementNS('http://www.w3.org/2000/svg','line');
    newLine.setAttribute('id','line2');
    newLine.setAttribute('x1',i*(boxWidth/15));
    newLine.setAttribute('y1',0);
    newLine.setAttribute('x2',i*(boxWidth/15));
    newLine.setAttribute('y2',boxHeight);
    newLine.setAttribute('stroke',"black")

guitarSVG.appendChild(newLine);
}

//Draw frets cirlces


guitarSVG.appendChild(createFretCircles(2.5*(boxWidth/15),boxHeight/2))
guitarSVG.appendChild(createFretCircles(4.5*(boxWidth/15),boxHeight/2))
guitarSVG.appendChild(createFretCircles(6.5*(boxWidth/15),boxHeight/2))
guitarSVG.appendChild(createFretCircles(8.5*(boxWidth/15),boxHeight/2))
guitarSVG.appendChild(createFretCircles(11.5*(boxWidth/15),boxHeight/3.33))
guitarSVG.appendChild(createFretCircles(11.5*(boxWidth/15),2.4*(boxHeight/3.33)))
guitarSVG.appendChild(createFretCircles(14.5*(boxWidth/15),boxHeight/2))
function createFretCircles(x,y){
  var newCircle = document.createElementNS('http://www.w3.org/2000/svg','circle');
    newCircle.setAttribute('id','circle')
    newCircle.setAttribute('cx',x)
    newCircle.setAttribute('cy',y)
    newCircle.setAttribute('r',8)
    newCircle.setAttribute('stroke',"black")
    newCircle.setAttribute("stroke-width",1)
    newCircle.setAttribute("fill","black")
    return newCircle
}

//Create the buttons on the guitarSVG




class guitButton {
  x;
  y;
  toggle;
  constructor(x,y) {
    this.x = x;
    this.y = y;
    this.toggle=false;
  //  this.button=this.createCircles();
  }
   createCircle(){
     //console.log("Wtf is going on");

    var newCircle = document.createElementNS('http://www.w3.org/2000/svg','circle');
      newCircle.setAttribute('id',this.x.toString()+","+this.y.toString())
      newCircle.setAttribute('cx',boxOffsetX-20+(this.x)*(boxWidth/15))
      newCircle.setAttribute('cy',boxOffSetY+2+this.y*(boxHeight/5))
      newCircle.setAttribute('r',12)
      //newCircle.setAttribute('stroke',"black")
      newCircle.setAttribute("stroke-width",1)
      newCircle.setAttribute("fill","red")
      newCircle.setAttribute("fill-opacity","0")
    //  console.log(newCircle);
      newCircle.addEventListener('click',function(e){


        toggleGuitButton(e.target)
      //  isThisAChord();
      //  var temp = document.getElementById(e.getAttribute("fill-opacity"));
      //  console.log(e.target.getAttrbute("data-fill-opacity"))

       }
   );
      return newCircle
  }
  toggleStatus(){this.toggle=!this.toggle}
    get button(){return this.createCircle();}
    get toggle(){return this.toggle}
    get x(){return this.x}
    get y(){return this.y}
}

let testB = new guitButton(23,23);
var temp = testB.button;


upper.appendChild(temp)

//things get weird from here
var buttonArray=generateArray();

function generateArray(){

  var  arr= new Array(6*16);
  for(i = 0; i<6; i++){
    for(j = 0; j<16;j++){
      var temp = new guitButton(j,i)
    upper.appendChild(temp.button)
    arr.push(temp)
    }
  }
return arr;
}



//this is totaly a bs hack to connect an object to a SVG event
//target is just e.target
function toggleGuitButton(target){
  let fret = target.id;
  var res = fret.split(",");

  console.log(target.id+"Toggle is running");
  var test = target;
  const opac = test.getAttribute("fill-opacity");
//  console.log(opac);
  if(opac=="50%"){
    test.setAttribute("fill-opacity",0)
  }
  if(opac=="0"){
    test.setAttribute("fill-opacity",'50%')
  }

//this checks if anything is already toggled on the same "string"
  buttonArray.forEach((item, i) => {
    if(item.y==res[1]&&item.toggle==true&&item.x!=res[0]){
      var temp = document.getElementById(item.x+","+item.y);
      toggleGuitButton(temp);
      console.log("this ran")
    }
  });

  buttonArray.forEach((item, i) => {
    if(item.x==res[0]&&item.y==res[1]){
    console.log(res[0]+","+res[1]+"Toggled")
    item.toggleStatus();
  }
}
)
isThisAChord();
;}

function clearSelections(){
  buttonArray.forEach((item, i) => {
    if(item.toggle){
      var temp = document.getElementById(item.x+","+item.y);
      toggleGuitButton(temp);
    }
  });

}
//this will parse into the search string
function isThisAChord(){
  var chordString =""
  for(j=0;j<6;j++){
    var contains = false;
  buttonArray.forEach((item, i) => {
    //console.log("item.y = "+item.y+" and i = "+j)
    if(item.y==j&&item.toggle==true){
      chordString+=item.x.toString();
      contains=true;
    }
  });
  if(contains == false){
    chordString+="x"
  }
  chordString+=","

}
document.getElementById('chordName').innerText=chordLookUp(chordString);
console.log("This is the chord: "+chordString)
}


//this is the part that needs replaced with database?
function chordLookUp(theString){
  var fret = "G-3,0,0,0,2,3,<>G7-1,0,0,0,2,3,<>Gm-3,3,3,5,5,3,<>C-0,1,0,2,3,x,<>C7-0,1,3,2,3,x,<>Cm-0,0,0,2,3,x,<>E-0,0,1,2,2,x,<>Em-0,0,0,2,2,0,<>E7-0,0,1,0,2,0,<>A-0,2,2,2,0,x,<>A7-0,2,0,2,0,x,<>Am-0,1,2,2,0,x,<>D-2,3,2,0,x,x,<>D7-2,1,2,0,x,x,<>Dm7-1,3,2,0,x,x,<>F-1,1,2,3,3,1,<>Fm-1,1,1,3,3,1,<>F7-1,1,2,1,3,1,<>B-2,4,4,4,2,2,<>Bm-2,3,4,4,2,2,<>B7-2,0,2,1,2,x,<>"
  var list = fret.split("<>");
  for(i = 0; i<list.length;i++){
    var moreSplit = list[i].split("-")
    if(moreSplit[1]==theString){
      return moreSplit[0];
    }
  }
  return "Chord not in database"
}


 document.getElementById('chordForm').onsubmit = function() {
  //   console.log(document.getElementById('Cname').value);
     makeSearchForChord(document.getElementById('Cname').value)
     document.getElementById("chordForm").reset();
     return false;
 };
function makeSearchForChord(theSearch){
  var fret = "G-3,0,0,0,2,3,<>G7-1,0,0,0,2,3,<>Gm-3,3,3,5,5,3,<>C-0,1,0,2,3,x,<>C7-0,1,3,2,3,x,<>Cm-0,0,0,2,3,x,<>E-0,0,1,2,2,x,<>Em-0,0,0,2,2,0,<>E7-0,0,1,0,2,0,<>A-0,2,2,2,0,x,<>A7-0,2,0,2,0,x,<>Am-0,1,2,2,0,x,<>D-2,3,2,0,x,x,<>D7-2,1,2,0,x,x,<>Dm7-1,3,2,0,x,x,<>F-1,1,2,3,3,1,<>Fm-1,1,1,3,3,1,<>F7-1,1,2,1,3,1,<>B-2,4,4,4,2,2,<>Bm-2,3,4,4,2,2,<>B7-2,0,2,1,2,x,<>"
  var list = fret.split("<>");
  for(var i = 0; i<list.length;i++){
    var moreSplit = list[i].split("-")
    if(moreSplit[0]==theSearch){
      makeChordFromString( moreSplit[1]);
    }
  }
}
function makeChordFromString(chordString){
  console.log("Make chord from string received: "+chordString)
  clearSelections();
  var noteList= chordString.split(",")
  for(var i = 0;i<6;i++){
    if(noteList[i]!="x"){
    temp = document.getElementById(noteList[i]+","+i)
    toggleGuitButton(temp);
  }}
}
