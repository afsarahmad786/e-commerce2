var cn = 1;

product.addEventListener("click", (event) => {
  const id = event.target.id;
  const msg = document.getElementById("message");
  console.log(id);
  msg.innerHTML = "Product added to the Cart " + id;

  msg.style.visibility = "visible";
  let c = countt();
  console.log(c);

  function countt() {
    return cn++;
  }
  setTimeout(function myGreeting() {
    document.getElementById("message").style.visibility = "hidden";
  }, 5000);
  document.getElementById("cart1").innerHTML = c;

  let cart = document.getElementById("cart");
  let name = event.target.parentNode.childNodes[1].outerText;
  let price = event.target.parentNode.childNodes[3].outerText;
  let img =
    event.target.parentNode.parentNode.childNodes[1].getAttribute("src");
  console.log(img);
  var itemss = document.getElementById("it");
  const div = document.createElement("div");
  div.className = "row";

  div.setAttribute("style", `background-color:white`);
  const div2 = document.createElement("div");
  div2.className = "col";
  div.appendChild(div2);

  const div3 = document.createElement("div");
  div3.className = "col";
  div.appendChild(div3);

  const div4 = document.createElement("div");
  div4.className = "col";
  div.appendChild(div4);

  const images = document.createElement("img");
  images.className = "img";
  images.setAttribute("height", `30px`);
  images.setAttribute("width", `30px`);
  images.src = img;
  console.log(images);
  const side = document.getElementById("cartside");

  const pr = document.createElement("p");
  pr.innerText = price;

  const quantity = document.createElement("p");
  quantity.innerText = 1;

  // pr.src = "img";
  // console.log();
  // var clone = paren.cloneNode(true);
  side.appendChild(div);
  div2.append(images);

  // div2.appendChild(images);
  div3.appendChild(pr);
  div4.appendChild(quantity);
});
function openNav() {
  document.getElementById("mySidebar").style.width = "500px";
  document.getElementById("main").style.marginLeft = "250px";
}
function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}
