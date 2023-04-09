    var email=document.querySelector('#isemail');
   var ten=document.querySelector("#ten");
   var note=document.querySelector("#ghichu")
    function check(){

          let fxg =/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if(!fxg.test(email.value)){
            alert("email khong dung dinh dang")
        } else{
            alert("thong tin da duoc goi di")
        }
        if(ten.value==""){
            alert('khong duoc de trong ten');
        }
    }
    ten.addEventListener('mouseover',function(e){
        ten.classList.add("boderxanh")
    })
    ten.addEventListener('mouseout',function(e){
        ten.classList.remove("boderxanh")
    })
    email.addEventListener('mouseover',function(e){
        email.classList.add("boderxanh")
    })
    email.addEventListener('mouseout',function(e){
        email.classList.remove("boderxanh")
    })
    note.addEventListener('mouseover',function(e){
        note.classList.add("boderxanh")
    })
    note.addEventListener('mouseout',function(e){
        note.classList.remove("boderxanh")
    })

    // thanhcuon
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}