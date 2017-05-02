/*  HTML Manipulation Methods*/
function setHTML(id, html){
  document.getElementById(id).innerHTML = html;
}

function appendHTML(id, html){
  document.getElementById(id).innerHTML += html;
}
