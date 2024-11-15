// Event Listener that runs when DOM content is loaded (This is from materializecss)
document.addEventListener("DOMContentLoaded", function () {
    var elems = document.querySelectorAll(".sidenav");
    const languageEl = document.getElementById("language-button");
    // Scans for document with any element with .sidenav, render it on the right side.
    // Create an array of instances, this is created by the .init method from materializecss
    var instances = M.Sidenav.init(elems, { edge: "right" }); 
});
