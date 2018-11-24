function service() {
    let p =  document.createElement("p");
    let node = document.createTextNode("This is the service page.");
    p.appendChild(node);

    let container = document.getElementsByClassName("contain");
    container.appendChild(p);
}

export default service;