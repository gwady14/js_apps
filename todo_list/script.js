var theList = document.getElementById('theList'),
    form = document.querySelector('form'),
    input = form.querySelector('input'),
    cache = {};

//on submit
form.addEventListener('submit', function(ev){
    ev.preventDefault();

    //adds item to the list
	var value = input.value;
	if (!cache[value] && !(value == "")) {
	    cache[value] = true; //cache the users input
	    theList.innerHTML += '<li>' + value + '</li>';
	}
});


theList.addEventListener('click', function(ev){
    "use strict";
    var t = ev.target;
    
    if (!t.classList.contains('done')) {
        t.classList.add('done');
    } else {
        t.parentNode.removeChild(t);
    }
    localStorage.myToDo = theList.innerHTML;
});

//load local storage on first load
if (localStorage.myToDo !== undefined) {
    theList.innerHTML = localStorage.myToDo;
}