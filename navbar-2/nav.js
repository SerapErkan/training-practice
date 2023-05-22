

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



