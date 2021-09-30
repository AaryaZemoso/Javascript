var sessionStorage = window.sessionStorage;
var localStorage = window.localStorage;

if(!localStorage.getItem('value'))
    localStorage.setItem('value', 0);

if(!sessionStorage.getItem('value'))
    sessionStorage.setItem('value', 0);

function incrementSessionValue(){
    sessionStorage.setItem('value', parseInt(sessionStorage.getItem('value'), 10) + 1);
    document.getElementById("sess_val").innerHTML = sessionStorage.getItem('value');
}

function incrementLocalValue(){
    localStorage.setItem('value', parseInt(localStorage.getItem('value'), 10) + 1);
    document.getElementById("local_val").innerHTML = localStorage.getItem('value');
}