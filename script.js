

function toggleNav() {
  var navbar = document.getElementById("navbar");
  var value = navbar.style.width;
  if (value === "250px") {
    closeNav();
  } else {
    openNav();
  }
}
function openNav() {
  document.getElementById("navbar").style.width = "400px";
}

function closeNav() {
  document.getElementById("navbar").style.width = "0px";
  document.getElementById("main").style.marginLeft= "0";
  
}

window.onclick = function(event) {
  var menuButton = document.querySelector('.menu-button');
  if (event.target !== menuButton && !navbar.contains(event.target) && navbar.style.width === "400px") {
    closeNav();
  }
}

ace.require("ace/ext/language_tools");
var editor = ace.edit("editor");

editor.setOptions({
  theme: "ace/theme/cobalt",
  mode: "ace/mode/html",
  fontSize: "15px",
  enableBasicAutocompletion: true,
  enableSnippets: true,
  enableLiveAutocompletion: true,
  showGutter: false,

});

function runCode() {  
  var preview = document.querySelector(".preview");
  preview.style.width = "100%";
  var output = document.querySelector(".output");
  output.innerHTML = editor.getValue();
};
function closePreview(){
  var preview = document.querySelector(".preview");
  preview.style.width="0"
}

