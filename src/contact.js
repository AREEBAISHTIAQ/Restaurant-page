function contact() {
    let p =  document.createElement("p");
    let node = document.createTextNode("This is the contact page.");
    p.appendChild(node);

    let container = document.getElementsByClassName("container");
    container.appendChild(p);
}

export default contact;