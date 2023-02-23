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
const itemLinks = [];
const baritemlinks = []
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
activeElement(headerExtentions,"icon-active",true)
activeElement(itemLinks,"btn-active",false)
activeElement(baritemlinks,"btn-active",false)
prevenPropagation(headerExtentions)

      //display sub-element



