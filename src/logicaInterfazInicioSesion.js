document.querySelector('#btnIngresar').addEventListener('click', iniciarSesion);

function iniciarSesion() {
    var sCorreo = '';
    var sContrasena = '';
    var bAcceso = false;
    
    sCorreo = document.querySelector('#txtUsuario').value;
    sContrasena = document.querySelector('#txtContrasena').value;

    bAcceso = validarCredensiales(sCorreo, sContrasena);
   
    if(bAcceso == true) {
        ingresar();
    }
}

function ingresar() {
    var rol = sessionStorage.getItem('rolUsuarioActivo');
    switch(rol) {
        case '1':
            window.location.href = 'admin.html';
            break;
        case '2':
            window.location.href = 'cliente.html';
            break;
    }
}