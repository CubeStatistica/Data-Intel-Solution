

  	//======= Start Digital Countdown =======

	

    
// Set the date we're counting down to
var countDownDate = new Date("Jan 14, 2023 15:37:25").getTime();
		
// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("demo").innerHTML = days + "<time>Date </time>" + hours + "<time>Hrs </time>"
  + minutes + "<time>Min </time>" + seconds + "<time>Sec </time>";
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);


            // ======= End Digital Countdown =======


	//#region - start of - number counter animation
    const counterAnim = (qSelector, start = 0, end, duration = 1000) => {
        const target = document.querySelector(qSelector);
        let startTimestamp = null;
        const step = (timestamp) => {
         if (!startTimestamp) startTimestamp = timestamp;
         const progress = Math.min((timestamp - startTimestamp) / duration, 1);
         target.innerText = Math.floor(progress * (end - start) + start);
         if (progress < 1) {
          window.requestAnimationFrame(step);
         }
        };
        window.requestAnimationFrame(step);
       };
       //#endregion - end of - number counter animation
       
       document.addEventListener("DOMContentLoaded", () => {
        counterAnim("#count1", 1, 30, 1000);
        counterAnim("#count2", 5, 25, 1500 );
        counterAnim("#count3", 1, 15, 2000);
       });


      
       // ======= start Filter DIV Elements  =======



filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
