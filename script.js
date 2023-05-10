const favicon = document.getElementById("favicon");
console.log(favicon)

function toRed() {
  favicon.setAttribute("href", "https://raw.githubusercontent.com/WebSidan/js-project-20/main/img/favicon.png" );
}

function toGreen() {
  favicon.setAttribute("href", "https://raw.githubusercontent.com/WebSidan/js-project-20/main/img/faviconTwo.png")
}