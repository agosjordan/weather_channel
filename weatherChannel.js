var inputCiudad = document.querySelector("input")
var enviarBtn = document.querySelector("button")
var ciudad = document.querySelector("#ciudad")
var temperatura = document.querySelector("#temperatura")
var descripcion = document.querySelector("#descripcion")
var icon = document.querySelector("#wicon")


enviarBtn.addEventListener("click", cargarCiudad)
inputCiudad.addEventListener("keydown", function(e){
    if(e.code == "Enter"){
        cargarCiudad();
    }
})

function cargarCiudad(){
    if(inputCiudad.value){
        $.getJSON(`https://api.openweathermap.org/data/2.5/weather?q=${inputCiudad.value}&appid=95176c8edea30e33338e0eaddd53a916&units=metric&lang=es`, function(data){
            document.querySelector(".container").style.visibility = "visible"
            ciudad.textContent = data.name
            temperatura.textContent = data.main.temp + "°C";
            icon.src = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;
            descripcion.textContent = data.weather[0].description; 
        }).fail(function(){
                alert("Ciudad no encontrada");
        }) 
        inputCiudad.value = "";   
    }else{
        alert("Por favor ingrese el nombre de una ciuadad.")
    }
}
