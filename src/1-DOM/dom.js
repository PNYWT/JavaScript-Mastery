console.log("Hello JS.");

document.getElementById("name").innerText = "Hello";

document.getElementById("changeTextButton").onclick = function() {
    document.getElementById("name").innerText = "Hello action";
};