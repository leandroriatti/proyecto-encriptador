//Declaracion de Variables//
const btnCifrar = document.querySelector(".btn-cifrar");
const btnDesifrar = document.querySelector(".btn-desifrar");
const mensaje = document.querySelector(".texto-mensaje");
const txtCifrar = document.querySelector(".cifrar");
const respuesta = document.querySelector(".evaluar");
const contenido = document.querySelector(".contenedor");
const btnCopiar = document.querySelector(".btn-copiar");


//Encriptar//
btnCifrar.addEventListener("click", evento=>{
    evento.preventDefault();
    let texto = txtCifrar.value;
    let txt = texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, "");
    
    if(texto == ""){
        mensaje.textContent = "El campo esta vacio";
        //style.property//
        mensaje.style.fontWeight = "800";
        mensaje.style.background = "#0A3871";
        mensaje.style.color = "#FFFF";
        
        setTimeout(()=>{
            mensaje.removeAttribute("style");
        },1500);
    }

    else if(texto !== txt){
        mensaje.textContent = "No permite caracteres especiales o acentos ";
        //style.property//
        mensaje.style.background = "#0A3871";
        mensaje.style.color = "#FFFF";
        
        setTimeout(()=>{
            mensaje.removeAttribute("style");
        },1500);
    }

    else if(texto !== texto.toLowerCase()){
        mensaje.textContent = "El texto debe estar en minúscula";
        //style.property//
        mensaje.style.background = "#0A3871";
        mensaje.style.color = "#FFFF";
    
        setTimeout(()=>{
            aviso.removeAttribute("style");
        },1500);
    }

    else{
        texto = texto.replace(/e/mg, "enter");
        texto = texto.replace(/i/mg, "imes");
        texto = texto.replace(/a/mg, "ai");
        texto = texto.replace(/o/mg, "ober");
        texto = texto.replace(/u/mg, "ufat");

        respuesta.innerHTML = texto;
        btnCopiar.style.visibility = "inherit";
        contenido.remove(); 
    }
});

//Desencriptar//
btnDesifrar.addEventListener("click", evento=>{
    evento.preventDefault();
    let texto = txtCifrar.value;
    let txt = texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, "");
    
    if(texto == ""){
        mensaje.textContent = "El campo de texto no debe estar vacio";
        //style.property//
        mensaje.style.background = "#0A3871";
        mensaje.style.color = "#FFFF";
        
        setTimeout(()=>{
            mensaje.removeAttribute("style");
        },1500);
    }

    else if(texto !== txt){
        mensaje.textContent = "No debe tener acentos ni caracteres especiales";
        //style.property//
        mensaje.style.background = "#0A3871";
        mensaje.style.color = "#FFFF";
        
        setTimeout(()=>{
            mensaje.removeAttribute("style");
        },1500);
    }

    else if(texto !== texto.toLowerCase()){
        mensaje.textContent = "El texto debe ser todo en minúscula";
        //style.property//
        mensaje.style.background = "#0A3871";
        mensaje.style.color = "#FFFF";
    
        setTimeout(()=>{
            mensaje.removeAttribute("style");
        },1500);
    }

    else{
        texto = texto.replace(/enter/mg, "e");
        texto = texto.replace(/imes/mg, "i");
        texto = texto.replace(/ai/mg, "a");
        texto = texto.replace(/ober/mg, "o");
        texto = texto.replace(/ufat/mg, "u");

        respuesta.innerHTML = texto;
        btnCopiar.style.visibility = "inherit";
        contenido.remove(); 
    }
});

//Boton de Copiar//
btnCopiar.addEventListener("click", evento=>{
    evento.preventDefault();
    let copiar = respuesta;
    copiar.select();
    document.execCommand("copy"); 
});

