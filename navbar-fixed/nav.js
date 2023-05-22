

function myFunction() {
    var x = document.getElementById("navbarID");
    if (x.className === "navbar" ) {
      x.className += " responsive";
    } 
    else {
      x.className = "navbar";
    }
  }


  
var prevScrollPos = window.pageYOffset; // Sayfanın başlangıcında geçerli scroll pozisyonunu alır.
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;// Scroll olayının gerçekleştiği anki scroll pozisyonunu alır.
  var x = document.getElementById("navbarID");

 if (prevScrollPos > currentScrollPos) { // Scroll yönü yukarı doğru olduğunda (mevcut scroll pozisyonu önceki scroll pozisyonundan küçük olduğunda) çalışır.
    x.className += " fixed";
  }
  else {
    x.className = "navbar";
  }
  prevScrollPos = currentScrollPos; // Önceki scroll pozisyonunu günceller.
};





// function myFunction() {
//     var x = document.getElementById("navbarID");
//     if (x.className === "navbar" ) {
//       x.className += " responsive";
//     } 
//     else if (x.classList.contains("navbar") && x.classList.contains("fixed")){
//       x.className += " responsive";
//     }
//     else {
//       x.className = "navbar";
//     }
//   }


// MAUSE HAREKET EDERSE 

// var timer;
// var navbar = document.getElementById("navbarID");

// document.onmousemove = function() {
//   clearTimeout(timer);
//   navbar.style.top = "0";
  
//   timer = setTimeout(function() {
//     navbar.style.top = "-100px";
//   }, 1000); // Navbar'ın gizlenmesi için beklenen süre (ms)
// };



// SADECE YUKARI ÇEKİLİRSE  
//Scroll yukarı doğru gerçekleştiğinde, 
//yani mevcut scroll pozisyonu önceki scroll pozisyonundan küçük olduğunda,
//navbar'ı görünür yapar (top: 0)


// var prevScrollPos = window.pageYOffset;
// window.onscroll = function() {
//   var currentScrollPos = window.pageYOffset;
//   if (prevScrollPos > currentScrollPos) {
//     document.getElementById("navbarID").style.top = "0";  
//   } else {
//     document.getElementById("navbarID").style.top = "-100px";
//   }
//   prevScrollPos = currentScrollPos;
// };



