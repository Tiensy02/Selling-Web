                        //BAR EXTENTIONS
// var barImplement = document.querySelector(".header__search.btn.header-extention-bar")
// barImplement.onclick = function() {
//   var barSelector = barImplement.querySelector(".bar-selector")
//   if(barSelector.style.display == "none") {
//     openFlex(barSelector);
//   }else close(barSelector);
// }
function close(selector) {
  selector.style.display = "none"
}
function openFlex(selector) {
  selector.style.display = "flex"
}
var headerExtentionBox= document.querySelector(".header__navbar-extentions")
const headerExtentions = headerExtentionBox.querySelectorAll(".header-icon")
for ( let i = 0 ; i < headerExtentions.length ; i ++ ) {
  headerExtentions[i].onclick = function(e) {
   if( !e.target.classList.contains("icon-active") ){     
    headerExtentions.forEach(function(value){
        if(value.classList.contains("icon-active")) {
            value.classList.remove("icon-active")
        }
    })
    e.target.classList.add("icon-active")
   }else {
    e.target.classList.remove("icon-active")
   }
  }
}

