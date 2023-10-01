class Usuario {
    constructor({ username, password }) {
      this.username = username;
      this.password = password;
    }
  }
  
  class Banco {
    constructor() {
      this.trabajadores = [];
    }
  
    agregarTrabajador({ nombre }) {
      this.trabajadores.push({ nombre });
    }
  
    obtenerCantidadTrabajadores() {
      return this.trabajadores.length;
    }
  
    obtenerNumeroAleatorioTrabajadores() {
      return Math.floor(Math.random() * this.trabajadores.length);
    }
  }
  
  const banco = new Banco();
  const containerEmpleados = document.getElementById("listaUsuarios");
  const inputNombre = document.querySelector('#inputNombre');
  const inputContrasenia = document.querySelector('#inputContrasenia');
  
  // Agregar trabajadores al banco
  function agregarTrabajador() {
    let pedirTrabajadores = true;
    while (pedirTrabajadores) {
      const nombreTrabajador = prompt('Ingrese el nombre de un trabajador que llegó al banco (Enter para finalizar):');
  
      // Validar que se ingresó un nombre o se presionó Enter
      if (nombreTrabajador === null || nombreTrabajador.trim() === "") {
        pedirTrabajadores = false;
      } else {
        banco.agregarTrabajador({ nombre: nombreTrabajador });
      }
    }
  
    actualizarListaTrabajadores();
  }
  
  // Actualizar la lista de trabajadores
  function actualizarListaTrabajadores() {
    containerEmpleados.innerHTML = ""; // Limpiar el contenedor
  
    const lista = document.createElement('ul');
    banco.trabajadores.forEach(trabajador => {
      const item = document.createElement('li');
      item.textContent = `Nombre del trabajador: ${trabajador.nombre}`;
      lista.appendChild(item);
    });
  
    containerEmpleados.appendChild(lista);
  
    const cantidadTrabajadores = banco.obtenerCantidadTrabajadores();
    alert(`Cantidad de trabajadores que llegaron al banco: ${cantidadTrabajadores}`);
  
    // Ejemplo de uso de Math en tu código
    const numeroAleatorio = banco.obtenerNumeroAleatorioTrabajadores();
    alert(`Número aleatorio de trabajadores que llegaron: ${numeroAleatorio}`);
  }
  
  // Event listener para el formulario de registro
  const formRegistro = document.getElementById('formRegistro');
  formRegistro.addEventListener('submit', (event) => {
    event.preventDefault();
  
    const usuario = {
      nombre: inputNombre.value,
      contrasenia: inputContrasenia.value
    };
  
    //almacenamiento local
    console.log('Usuario registrado:', usuario);
  
    inputNombre.value = '';
    inputContrasenia.value = '';
  });
// DOM
const agregarTrabajadorBtn = document.createElement('button');
agregarTrabajadorBtn.textContent = 'Agregar Trabajadores';
agregarTrabajadorBtn.addEventListener('click', agregarTrabajador);

// Obtén una referencia al elemento con el id "containerAgregarTrabajadores"
const containerAgregarTrabajadores = document.getElementById('containerAgregarTrabajadores');

// Agrega el botón al contenedor
containerAgregarTrabajadores.appendChild(agregarTrabajadorBtn);

  // Relacionar con el primer código
const formRegistro2 = document.querySelector('#formRegistro'); // Cambiado el nombre de la variable
const inputUser = document.querySelector('#inputUser');
const inputPass = document.querySelector('#inputPass');
const divListaUsuarios = document.querySelector('#listaUsuarios');
const seccionUsuarios = document.querySelector('#seccionUsuarios');

const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
mostrarUsuarios();
  
  // Agregar trabajadores al banco
  formRegistro.onsubmit = e => {
    e.preventDefault();
  
    const username = inputUser.value;
    const password = inputPass.value;
  
    const usuario = new Usuario({ username, password });
  
    guardarUsuario(usuario);
  }
  
// Modifica esta parte para cargar los datos JSON
function cargarUsuariosDesdeJSON() {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'usuarios.json', true);
  xhr.onload = function () {
    if (xhr.status === 200) {
      const usuarios = JSON.parse(xhr.responseText);
      // Procesa los datos de usuarios aquí
      mostrarUsuarios(usuarios);
    } else {
      console.error('Error al cargar los usuarios.');
    }
  };
  xhr.send();
}

// Llama a la función para cargar los usuarios desde JSON
cargarUsuariosDesdeJSON();

// Mostrar lista de usuarios
function mostrarUsuarios(usuarios) {
  if (usuarios.length > 0) {
    seccionUsuarios.style.display = 'block';
    let listaUsuariosHtml = '<ul>';
    for (const usuario of usuarios) {
      listaUsuariosHtml += `<li><a onclick="hacerAlgoConUsuario('${usuario.nombre}')">${usuario.nombre}</a></li>`;
    }
    divListaUsuarios.innerHTML = listaUsuariosHtml + '</ul>';
  }
}
  
  function alertaSW(nombreUsuario) {
    return {
      title: 'Alerta!!',
      text: 'Acabas de tocar al usuario: ' + nombreUsuario,
      icon: 'warning',
      confirmButtonText: 'Ok'
    };
  }
  
  function hacerAlgoConUsuario(nombreUsuario) {
    //mostrar una alerta.
    const alertData = alertaSW(nombreUsuario);
    Swal.fire(alertData);
  }