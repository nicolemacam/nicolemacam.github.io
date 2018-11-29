$(document).ready(function() {

var modal = document.getElementById('workModal-1');
var btn = document.getElementById("work1");
var span = document.getElementsByClassName("close")[0];

var modal2 = document.getElementById('workModal-2');
var btn2 = document.getElementById("work2");
var span2 = document.getElementsByClassName("close2")[0];

var modal3 = document.getElementById('workModal-3');
var btn3 = document.getElementById("work3");
var span3 = document.getElementsByClassName("close3")[0];

var modal4 = document.getElementById('workModal-4');
var btn4 = document.getElementById("work4");
var span4 = document.getElementsByClassName("close4")[0];

var modal5 = document.getElementById('workModal-5');
var btn5 = document.getElementById("work5");
var span5 = document.getElementsByClassName("close5")[0];

var modal6 = document.getElementById('workModal-6');
var btn6 = document.getElementById("work6");
var span6 = document.getElementsByClassName("close6")[0];

btn.onclick = function() {
    modal.style.display = "block";
} 
span.onclick = function() {
    modal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }


btn2.onclick = function() {
    modal2.style.display = "block";
} 
span2.onclick = function() {
    modal2.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal2.style.display = "none";
    }
}


btn3.onclick = function() {
    modal3.style.display = "block";
} 
span3.onclick = function() {
    modal3.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal3.style.display = "none";
    }
}


btn4.onclick = function() {
    modal4.style.display = "block";
} 
span4.onclick = function() {
    modal4.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal4.style.display = "none";
    }
}


btn5.onclick = function() {
    modal5.style.display = "block";
} 
span5.onclick = function() {
    modal5.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal5.style.display = "none";
    }
}


btn6.onclick = function() {
    modal6.style.display = "block";
} 
span6.onclick = function() {
    modal6.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal6.style.display = "none";
    }
}

}
});

