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
var headerExtentionBox= document.querySelector(".header__navbar-extentions")
const headerExtentions = headerExtentionBox.querySelectorAll(".header-icon")
var navbarList = document.querySelector(".header__navbar-list")
var barSelect = document.querySelector(".bar-selector")
const barlinks = barSelect.querySelectorAll(".header__navbar-items")
const navbarItems = navbarList.querySelectorAll(".header__navbar-items")
const modal = document.querySelectorAll(".modal")
const itemLinks = [];
const baritemlinks = [];
modal.forEach(function(value) {
  value.onclick = function() {
    value.style.display = "none"
  }
})
navbarItems.forEach(function(value) {
  itemLinks.push(value.querySelector(".items-link.btn"))
})
barlinks.forEach(function(value) {
  baritemlinks.push(value.querySelector(".items-link.btn"))
})
      //active element
function activeElement(Element,active,isAgain){
  for ( let i = 0 ; i < Element.length ; i ++ ) {
    Element[i].onclick = function(e) {
     if( !e.target.classList.contains(active) ){     
      Element.forEach(function(value){
          if(value.classList.contains(active)) {
            if(isAgain) close(value.children.item(1))
              value.classList.remove(active)
          }
      })
      if(isAgain) openFlex(e.target.children.item(1))
      e.target.classList.add(active)
      
     }else {if(isAgain){
      close(e.target.children.item(1))
       e.target.classList.remove(active)
       
     }
    }
  }
}
}

function prevenPropagation(Element) {
  Element.forEach(function(value) {
    value.children.item(1).addEventListener('click',function(event){
      event.stopPropagation();
    })
  })
}
const modalBody = document.querySelectorAll(".modal-body")
modalBody.forEach(function(value) {
  value.addEventListener('click',function(e){
    e.stopPropagation();
  })
})

activeElement(headerExtentions,"icon-active",true)
activeElement(itemLinks,"btn-active",false)
activeElement(baritemlinks,"btn-active",false)
              //AUTHENFORM
const authenform = document.querySelectorAll(".authen-form")
const authenheader = []
authenform.forEach(function(value){
  authenheader.push(value.querySelector(".authen-form-header"))
})
authenheader.forEach(function(value) {
  value.children.item(1).onclick = function(){
    authenform.forEach(function(authen){
      authen.classList.toggle("hide")
    })
  }
})

function User (name,email,password,cart,favourite) {
  this.name = name
  this.email = email
  this.password = password
  this.cart = cart
  this.favourite = favourite
}
const Users = [new User('nguyentiensy',"tiensy002@gmail.com",'123456',[],[])] 
          // Check Users
const favouriteIcon = document.querySelectorAll(".product-favorite")
const viewIcon = document.querySelectorAll(".product-view")
const addButton = document.querySelectorAll(".add-cart")
function afterCheckLogin(element,nameExtention) {
 
  element.forEach(function(icon){
    icon.onclick = function(e) {
      if(!checkUser.checked) {
        open(modalAuthen)
      }else{

        if(nameExtention == 'cart'){
          acountCurrent.cart.push(e.target.parentElement.parentElement.parentElement)
          close(document.querySelector(".cart-list-wrap"))
        }else{
          acountCurrent.favourite.push(e.target.parentElement)
          close(document.querySelector(".favourite-wrap"))
        }
      }
    }
  })
}
viewIcon.forEach(function(value) {
  value.onclick = function(e) {
    e.target.parentElement.querySelector(".product-descri").classList.toggle("appear")
    e.target.parentElement.querySelector(".product-view").classList.toggle("view-active")
  }
})
afterCheckLogin(favouriteIcon,'favourite')
 afterCheckLogin(addButton,'cart')
prevenPropagation(headerExtentions)





