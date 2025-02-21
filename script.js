document.getElementById("random").onmouseover = function () {
    this.style.left = Math.random() * (window.innerWidth - this.clientWidth) + "px";
    this.style.top = Math.random() * (window.innerHeight - this.clientHeight) + "px";
};
