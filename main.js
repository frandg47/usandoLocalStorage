
const form = document.querySelector("form");
const inputNombre = document.getElementById("name");
const inputApellido = document.getElementById("surname");
const botonGuardar = document.getElementById("btnSave");
const botonObtener = document.getElementById("btnGet");
const botonEliminar = document.getElementById("btnDelete");
const resultadoLS = document.getElementById("resultadoLS");

let arrayUsuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    let valorName = inputNombre.value;
    let valorSurName = inputApellido.value;
    const usuario={
        nombre: valorName.toLowerCase(),
        apellido: valorSurName.toLowerCase(),
    }
    if(valorName.trim().length > 2 && valorName.trim().length < 17 && valorSurName.trim().length > 2 && valorSurName.trim().length < 21){
        arrayUsuarios.push(usuario); 
        localStorage.setItem("usuarios",JSON.stringify(arrayUsuarios));
        inputNombre.value = "";
        inputApellido.value = "";
        alert("se guardó correctamente");       
    }
    console.log(usuario);
});

botonObtener.addEventListener("click",()=>{
    let arrayUsuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
    resultadoLS.innerHTML = '';
    if(arrayUsuarios.length > 0){
        for(let i = 0 ; i < arrayUsuarios.length ; i++){
            resultadoLS.innerHTML += `<tr><td>${arrayUsuarios[i].nombre.toUpperCase()}</td><td>${arrayUsuarios[i].apellido.toUpperCase()}</td></tr>`;
        }
    }else{
        resultadoLS.innerHTML = "<tr><td>No hay resultado</td></tr>";
    }
});

botonEliminar.addEventListener("click",()=>{
    localStorage.removeItem("usuarios");
    alert("se eliminó correctamente");
})