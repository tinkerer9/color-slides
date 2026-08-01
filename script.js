const html = document.getElementsByTagName("html")[0];
const body = document.getElementsByTagName("body")[0];
const colorpicker = document.getElementsByClassName("colorpicker")[0];
const gobutton = document.getElementsByClassName("gobutton")[0];

function go() {
    colorpicker.style.display = "none";
    gobutton.style.display = "none";

    body.style.backgroundColor = colorpicker.value;

    if (html.requestFullscreen) {
        html.requestFullscreen();
    } else if (html.webkitRequestFullscreen) {
        html.webkitRequestFullscreen();
    }

    html.style.cursor = "none";
}