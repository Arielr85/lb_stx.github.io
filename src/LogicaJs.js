/* Roles :
    1: admin
    2: cliente
*/
function obtenerListaUsuarios() {
    var ListaUsuarios = JSON.parse(localStorage.getItem('ListaUsuariosLs'));

    if(ListaUsuarios == null) {
        ListaUsuarios =
        [
            //id, nombre, apellido, correo, contraseña, fecha nac, rol
            ['1', 'Pabs', 'Monestel', 'pablo.monestel@gmail.com', '1pablo9', '1987-10-12', '1'],
            ['2', 'Olman', 'Santamaria', 'olman@gmail.com', '1olman9', '1993-04-17', '2'],
            ['3', 'Andrea', 'stx', 'andrestx', 'stx2022', '1993-04-18', '1']
        ]
    }
    return ListaUsuarios 
}
function validarCredensiales(pCorreo, pContrasena) {
    var ListaUsuarios = obtenerListaUsuarios();
    var bAcceso = false;

    for(var i = 0; i < ListaUsuarios.length; i++ ) {
        if(pCorreo == ListaUsuarios[i][3] && pContrasena == ListaUsuarios[i][4]) {
            bAcceso = true;
            sessionStorage.setItem('usuarioActivo', ListaUsuarios[i][1] + ' ' + ListaUsuarios[i][2]);
            sessionStorage.setItem('rolUsuarioActivo', ListaUsuarios[i][6]);
        }
    }
    return bAcceso;
} ;