// console.log(document)
// console.log(document.getElementById("total").innerHTML)
// console.log(document.getElementsByClassName("like"))
// console.log(document.getElementsByTagName("p"))
// console.log(document.querySelectorAll(".like"))
// console.log(document.querySelector(".like"))
const btnsAddTag = document.getElementsByClassName("plus");

for (var i = 0; i < btnsAddTag.length; i++) {
  btnsAddTag[i].addEventListener("click", increment);
}
function increment(event) {
  var btnPlus = event.target;
  var divElt = btnPlus.parentElement;
  var quantityTag = divElt.querySelector("p");
  var quantity = Number(quantityTag.innerHTML);
  quantity++;
  quantityTag.innerHTML = quantity;
  var priceTag = divElt.parentElement.parentElement.querySelector(".price");
  var unitPriceTag = divElt.parentElement.parentElement.querySelector(".unitPrice");
  var unitPrice = Number(unitPriceTag.innerHTML);
  var price = unitPrice * quantity;
  priceTag.innerHTML = price;
}

var checkTags = document.querySelectorAll(".check");
for (var j = 0; j < checkTags.length; j++) {
  checkTags[j].onclick = totalPrice;
}

function totalPrice(event) {
  var checkTag = event.target;
  var priceTag = checkTag.parentElement.parentElement.querySelector(".price");  
  var price = Number(priceTag.innerHTML);
  var totalTag = document.getElementById("total");
  var total = Number(totalTag.innerHTML);
  var btnPlus = checkTag.parentElement.parentElement.querySelector(".plus")
  var btnMinus = checkTag.parentElement.parentElement.querySelector(".minus")

  if (checkTag.checked === true) {
    //  total = total + priceF

    total += price;
    btnPlus.setAttribute("disabled",true);
    btnMinus.setAttribute("disabled",true);
    
  } else {
    total =total- price;
    btnPlus.removeAttribute("disabled")
    btnMinus.removeAttribute("disabled")
  }
  totalTag.innerHTML = total;
}
  //btn delete 

const btnsDelete = document.getElementsByClassName("delete");
for (var z=0 ; z < btnsDelete.length ; z++){
  btnsDelete[z].addEventListener("click",deleteRow)
}
  //delete Row
function deleteRow (event){
  var btnDel = event.target
  var tdElt = btnDel.parentElement.parentElement.parentElement.parentElement
  tdElt.remove()
}
  //btn Minus
const btnsMinus = document.getElementsByClassName("minus");
for (var d=0 ; d < btnsMinus.length ; d++){
  btnsMinus[d].addEventListener("click",decrement)
}
  //decrement 
function decrement (event){
  var btnMinus = event.target;
  var divElt = btnMinus.parentElement;
  var quantityTag = divElt.querySelector("p");
  var quantity = Number(quantityTag.innerHTML);
  if(quantity > 0)
  quantity--;
  quantityTag.innerHTML = quantity;
  var priceTag = divElt.parentElement.parentElement.querySelector(".price");
  var unitPriceTag = divElt.parentElement.parentElement.querySelector(".unitPrice");
  var unitPrice = Number(unitPriceTag.innerHTML);
  var price = unitPrice * quantity;
  priceTag.innerHTML = price;

}

  //like btn color event 
function setColor(e) {
  var target = e.target,
      status = e.target.classList.contains('active');
  
  e.target.classList.add(status ? 'inactive' : 'active');
  e.target.classList.remove(status ? 'active' : 'inactive');
}

//don't forget 10/10 
//have a nice day :)
