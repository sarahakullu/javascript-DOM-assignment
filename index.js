// *****How to select a single Element***

// 1. getElementById
var heading = document.getElementById("main-heading");
heading.style.color = "black";
heading.style.background="pink";



// 2. getElementById
var topic1= document.getElementById("topic-one");
topic1.style.color = "purple";
topic1.style.background="pink";
topic1.style.display="inline-block";


// 3. getElement using query selector
// var description = document.QuerySelector("description");
// description.style.backgroundColor = "blue";

//*****How to select a multiple Element***
var description = document.getElementsByClassName("description");
console.log(description.length);

for(var i = 0; i<description.length; i=i+1){
   description[i].style.color = "blue";
description[i].style.backgroundColor = "cream";
}


// 4. getElementById
var topic2 = document.getElementById("topic-two");
topic2.style.color = "purple";
topic2.style.background="pink";
topic2.style.display="inline-block";


// 5. getElement using query selector
// var description1 = document.QuerySelector("description1");
// description1.style.backgroundColor = "blue";

//*****How to select a multiple Element***
var description1 = document.getElementsByClassName("description1");
console.log(description1.length);

for(var i = 0; i<description1.length; i=i+1){
   description1[i].style.color = "blue";
description1[i].style.backgroundColor = "creaam";
}

// 6. getElementById
var topic3 = document.getElementById("topic-three");
topic3.style.color = "purple";
topic3.style.backgroundColor="pink";
topic3.style.display="inline-block";

// 7. getElement using query selector
// var description2 = document.QuerySelector("description2");
// description2.style.backgroundColor = "blue";

//*****How to select a multiple Element***
var description2 = document.getElementsByClassName("description2");
console.log(description2.length);

for(var i = 0; i<description2.length; i=i+1){
   description2[i].style.color = "blue";
description2[i].style.backgroundColor = "cream";
}

// 8. getElementById
var topic4 = document.getElementById("topic-four");
topic4.style.color = "purple";
topic4.style.backgroundColor="pink";
topic4.style.display="inline-block";

// 9. getElement using query selector
// var description3 = document.QuerySelector("description3");
// description3.style.backgroundColor = "blue";

//*****How to select a multiple Element***
var description3 = document.getElementsByClassName("description3");
console.log(description3.length);

for(var i = 0; i<description3.length; i=i+1){
   description3[i].style.color = "blue";
description3[i].style.backgroundColor = "cream";
}

// 10. getElementById
var footer = document.getElementById("footer");
footer.style.color = "black";
footer.style.background="cream";
