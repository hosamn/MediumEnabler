// alert("window.location.href : " + window.location.href);
// console.log("Script ran once!")


varr = document.body.contains(document.getElementById("myFlag"))

if (!varr) {
    window.location.href = window.location.href.replace('medium.com','medium.com.');
    var node = document.createElement("DIV");
    node.id = "myFlag";
    node.style.display = "none";
    node.innerHTML = "<p>Hello World</p>"
    document.body.appendChild(node);
}