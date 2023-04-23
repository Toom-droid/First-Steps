document.addEventListener("DOMContentLoaded", function(){

  smoothScroll();
});



function smoothScroll(){
  const enlaces = document.querySelectorAll(".navegacion a");
  enlaces.forEach(enlace =>{
      enlace.addEventListener("click", function(e){
          e.preventDefault();

          const seccion = document.querySelector(e.target.attributes.href.value);
          seccion.scrollIntoView({ behavior: "smooth" });
      });
  });
}



var botones = document.querySelectorAll('button');
var botonActivo = null;

botones.forEach(function(boton) {
  boton.addEventListener('click', function() {
    if (botonActivo) {
      botonActivo.classList.remove('activo');
    }
    botonActivo = boton;
    botonActivo.classList.add('activo');
  });
});


const v1 = document.getElementById("v1");
const v2 = document.getElementById("v2");
const v3 = document.getElementById("v3");
const v4 = document.getElementById("v4");
const v5 = document.getElementById("v5");
const v6 = document.getElementById("v6");

const img = document.querySelector(".img");

const marca = document.getElementById("marca");
const modelo = document.getElementById("modelo");
const año = document.getElementById("año");



v1.addEventListener("click", function(){
    img.src = "/build/img/Coche1.png";
    marca.textContent = "Mercedes";
    modelo.textContent = "300se"
    año.textContent = "1964";
});
v2.addEventListener("click", function(){
    img.src = "/build/img/Coche2.png";
    marca.textContent = "BMW";
    modelo.textContent = "321i"
    año.textContent = "1978";
    v1.classList.remove("activo");
});
v3.addEventListener("click", function(){
    img.src = "/build/img/Coche3.png";
    marca.textContent = "Audi";
    modelo.textContent = "100"
    año.textContent = "1968";
    v1.classList.remove("activo");
});
v4.addEventListener("click", function(){
    img.src = "/build/img/Coche4.png";
    marca.textContent = "NSU";
    modelo.textContent = "Ro80"
    año.textContent = "1967";
    v1.classList.remove("activo");
});
v5.addEventListener("click", function(){
    img.src = "/build/img/Coche5.png";
    marca.textContent = "Mercedes";
    modelo.textContent = "280s"
    año.textContent = "1967";
    v1.classList.remove("activo");
});
v6.addEventListener("click", function(){
    img.src = "/build/img/Coche6.png";
    marca.textContent = "Borgward";
    modelo.textContent = "P100"
    año.textContent = "1960";
    v1.classList.remove("activo");
});


const b1 = document.getElementById("b1");
const b2 = document.getElementById("b2");
const b3 = document.getElementById("b3");

const p1 = document.getElementById("p1");
const p2 = document.getElementById("p2");
const p3 = document.getElementById("p3");

b1.addEventListener("click", function(){
  if(p1.classList.contains("mostrar")){
    p1.classList.remove("mostrar");
  } else {
    p1.classList.add("mostrar");
    p2.classList.remove("mostrar");
    p3.classList.remove("mostrar");
  }
})
b2.addEventListener("click", function(){
  if(p2.classList.contains("mostrar")){
    p2.classList.remove("mostrar");
  } else {
    p2.classList.add("mostrar");
    p1.classList.remove("mostrar");
    p3.classList.remove("mostrar");
  }
})
b3.addEventListener("click", function(){
  if(p3.classList.contains("mostrar")){
    p3.classList.remove("mostrar");
  } else {
    p3.classList.add("mostrar");
    p1.classList.remove("mostrar");
    p2.classList.remove("mostrar");
  }
})