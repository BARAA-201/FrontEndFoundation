var name1 = document.getElementById('firstName')
var name2 = document.getElementById('lastName')
var check2 = document.getElementById('check')
var regularex = /([A-Z][a-z]+$)/

function regexChecker() {

    if (!name1.value.match(regularex) || !name2.value.match(regularex)) {
        alert("Oh no! Thats an invalid format!")
    } else {
        alert("Yay! Your inputs were all correct!")
    }
}