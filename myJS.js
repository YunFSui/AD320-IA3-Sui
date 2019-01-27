window.onload = function() {
    var element1st = document.getElementById("first");
    var element2nd = document.getElementById("second");
    var element3rd = document.getElementById("third").firstChild;
    var element4th = document.getElementById("fourth");
    var element5th = document.getElementById("fifth");

    if (element1st){
        element1st.addEventListener('click', oC);
    }

    function oC(){
        alert("You Clicked Me!");
    }

    if (element2nd){
        element2nd.addEventListener('mouseover', oMO);
    }

    function oMO() {
        element2nd.innerHTML = '(^_^)P`';
    }

    if (element3rd){
        element3rd.addEventListener('blur', oB);
    }

    function oB() {
        element3rd.value = element3rd.value.toUpperCase();
    }

    if (element4th){
        element4th.addEventListener('wheel', oR);
    }

    function oR() {
        element4th.style.backgroundColor = "blue";
    }

    if (element5th){
        element5th.addEventListener('mouseover', oMOver);
    } 
    
    if (element5th){
        element5th.addEventListener('mouseout', oMOut);
    }

    function oMOver() {
        element5th.firstElementChild.src = "images/alt_pic.jpg";
    }

    function oMOut(){
        element5th.firstElementChild.src = "images/index_pic.jpg";
    }
}


function dT(){
    var d = new Date();
    alert('Today is ' + d);
    console.log('CLick on' + d);
}

function validateForm() {
    var name = document.forms["welcomeForm"]["name"].value;
    var email = document.forms["welcomeForm"]["email"].value;
    if (name == "" || email == "") {
        alert("Required input cannot be empty");
        return false;
    }
}