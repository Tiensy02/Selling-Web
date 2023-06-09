//BAR EXTENTIONS
function close(selector) {
  selector.style.display = "none"
}
function openFlex(selector) {
  selector.style.display = "flex"
}
function openBlock(selector) {
  selector.style.display = "block"
}
// HEADER-EXTENTION
var headerExtentionBox = document.querySelector(".header__navbar-extentions")
const headerExtentions = headerExtentionBox.querySelectorAll(".header-icon")
const foodItems = document.querySelectorAll(".food-items")
var navbarList = document.querySelector(".header__navbar-list")
var barSelect = document.querySelector(".bar-selector")
const barlinks = barSelect.querySelectorAll(".header__navbar-items")
const navbarItems = navbarList.querySelectorAll(".header__navbar-items")
const modal = document.querySelectorAll(".modal")
const itemLinks = [];
const baritemlinks = [];
modal.forEach(function (value) {
  value.onclick = function () {
    value.style.display = "none"
  }
})
navbarItems.forEach(function (value) {
  itemLinks.push(value.querySelector(".items-link.btn"))
})
barlinks.forEach(function (value) {
  baritemlinks.push(value.querySelector(".items-link.btn"))
})
//active element
function activeElement(Element, active, isAgain) {
  for (let i = 0; i < Element.length; i++) {
    Element[i].onclick = function (e) {
      if (!e.target.classList.contains(active)) {
        Element.forEach(function (value) {
          if (value.classList.contains(active)) {
            if (isAgain) close(value.children.item(1))
            value.classList.remove(active)
          }
        })
        if (isAgain) openFlex(e.target.children.item(1))
        e.target.classList.add(active)

      } else {
        if (isAgain) {
          close(e.target.children.item(1))
          e.target.classList.remove(active)

        }
      }
    }
  }
}

function prevenPropagation(Element) {
  Element.forEach(function (value) {
    value.children.item(1).addEventListener('click', function (event) {
      event.stopPropagation();
    })
  })
}
const modalBody = document.querySelectorAll(".modal-body")
modalBody.forEach(function (value) {
  value.addEventListener('click', function (e) {
    e.stopPropagation();
  })
})

activeElement(headerExtentions, "icon-active", true)
activeElement(itemLinks, "btn-active", false)
activeElement(baritemlinks, "btn-active", false)
//AUTHENFORM
const authenform = document.querySelectorAll(".authen-form")
const authenheader = []
authenform.forEach(function (value) {
  authenheader.push(value.querySelector(".authen-form-header"))
})
authenheader.forEach(function (value) {
  value.children.item(1).onclick = function () {
    authenform.forEach(function (authen) {
      authen.classList.toggle("hide")
    })
  }
})

function User(name, email, password, cart, favourite) {
  this.name = name
  this.email = email
  this.password = password
  this.cart = cart
  this.favourite = favourite
}
const Users = [new User('nguyentiensy', "tiensy002@gmail.com", '123456', [], [])]
// Check Users
const favouriteIcon = document.querySelectorAll(".product-favorite")
const viewIcon = document.querySelectorAll(".product-view")
const addButton = document.querySelectorAll(".add-cart")
var countIconCart = 0
var countIconFavou = 0
var quantityCart = 0
var listcart = []
var listNameCart =[]
// Rise or reduce products
const clickActiveNode = function (element) {
  element.querySelectorAll(".btnQuantity").forEach(function(item) {
   item.onclick = function(e) {
    if(e.target.classList.contains("riseQuantity")) {
      element.querySelector(".quantity").innerHTML = parseInt(element.querySelector(".quantity").innerHTML)+1
    } else element.querySelector(".quantity").innerHTML = parseInt(element.querySelector(".quantity").innerHTML)-1
   }
  })
}
function afterCheckLogin(element, nameExtention) {
  element.forEach(function (icon) {
    icon.onclick = function (e) {
      if (!checkUser.checked) {
        open(modalAuthen)
      } else {
        if (nameExtention == 'cart') {
          let productCurrent = e.target.parentElement.parentElement.parentElement;
          if (!acountCurrent.cart.includes(productCurrent) && !listNameCart.includes(productCurrent.querySelector(".headding").innerHTML) ) {
            let para = document.createElement("li");
            acountCurrent.cart.push(productCurrent);
            para.classList.add("favourite-list-items");
            document.querySelector(".cart-list").appendChild(para)
            para.innerHTML = `<div class="favourite-list-items__background" style="${productCurrent.querySelector(".dishes-product").attributes.style.value}"></div>
          <div class="favourite-list-items__value">
          <div class="cart-name-wrap"><span class="headding">${productCurrent.querySelector(".headding").innerHTML}</span>
          <div class="product-quantity">
          <button class="btnQuantity reduceQuantity">-</button>
          <span class="quantity">1</span>
          <button class="btnQuantity riseQuantity">+</button>
          </div> 
          </div><div class="buy-wrap"><span class="price">${productCurrent.querySelector(".price").innerHTML}</span><a href="#" class="buy btn btn-active">Buy Now</a></div>
          </div>`
            var buttonQuantity = para.querySelector(".product-quantity")
            clickActiveNode(buttonQuantity)
            const elementCarts = {
              cartElement: para,
              number: 1 
            }
            listcart.push(elementCarts)
            listNameCart.push(elementCarts.cartElement.querySelector(".headding").innerHTML)
            countIconCart++
            quantityCart++
            quantityCartElement.innerHTML = quantityCart;
            close(document.querySelector(".cart-list-wrap"))
          } else {
            let indexOfProduct = listNameCart.indexOf(productCurrent.querySelector(".headding").innerHTML)
            quantityCart++;
            listcart[indexOfProduct].number++;
            listcart[indexOfProduct].cartElement.querySelector(".quantity").innerHTML = listcart[indexOfProduct].number;
            quantityCartElement.innerHTML = quantityCart;
          }
        } else {
          if (!acountCurrent.favourite.includes(e.target.parentElement)) {
            acountCurrent.favourite.push(e.target.parentElement)
            const para = document.createElement("li");
            para.classList.add("favourite-list-items");
            document.querySelector(".favourite-list").appendChild(para)
            para.innerHTML = `<div class="favourite-list-items__background" style="${acountCurrent.favourite[countIconFavou].querySelector(".dishes-product").attributes.style.value}"></div><div class="favourite-list-items__value"><div class="cart-name-wrap"><span class="headding">${acountCurrent.favourite[countIconFavou].querySelector(".headding").innerHTML}</span></div><span class="price">${acountCurrent.favourite[countIconFavou].querySelector(".price").innerHTML}</span> </div>`
            countIconFavou++
            close(document.querySelector(".favourite-wrap"))
          } else alert("san pham da duoc them")
        }
      }
    }
  })
}
viewIcon.forEach(function (value) {
  value.onclick = function (e) {
    e.target.parentElement.querySelector(".product-descri").classList.toggle("appear")
    e.target.parentElement.querySelector(".product-view").classList.toggle("view-active")
  }
})

// Menu
const foodOfMenus = document.querySelectorAll(".food-wrapper")
const changeMenu = function() {
  var foodAcitve = document.querySelector(".food-items.active")
  foodOfMenus.forEach((element) => {
    if(!element.querySelector(".dishes-product").classList.contains(foodAcitve.innerHTML) && foodAcitve.innerHTML != "All" ) {
      close(element.parentElement)
    } else {
      openBlock(element.parentElement)
    }
  })
}
for (let i = 0 ; i < foodItems.length ; i ++ ) {
  foodItems[i].onclick = function(e) {
    if(!e.target.classList.contains("active")) {
      foodItems.forEach(function(items) {
        if(items.classList.contains("active")) {
          items.classList.remove("active");
        }
       })
       e.target.classList.add("active");
       changeMenu();
    } 
  }
}

var quantityCartElement = document.querySelector(".cart-quantity")
afterCheckLogin(favouriteIcon, 'favourite')
afterCheckLogin(addButton, 'cart')



prevenPropagation(headerExtentions)





