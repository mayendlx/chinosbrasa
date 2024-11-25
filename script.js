$(document).ready(function () {
    // Array para almacenar usuarios registrados
    let usuariosRegistrados = [];

    // Expresiones regulares para validar email y contraseña
    const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    const regexPassword = /^(?=.\d)(?=.[a-z])(?=.*[A-Z]).{8,}$/;

    // Función para manejar la validación de los datos
    function validarFormulario(username, email, password) {
        try {
            // Validación del nombre de usuario (debe tener al menos 3 caracteres)
            if (username.length < 3) {
                throw 'El nombre de usuario debe tener al menos 3 caracteres.';
            }

            // Validación del correo electrónico
            if (!regexEmail.test(email)) {
                throw 'Correo electrónico no válido.';
            }

            // Validación de la contraseña (debe tener al menos 8 caracteres, con mayúsculas, minúsculas y números)
            if (!regexPassword.test(password)) {
                throw 'La contraseña debe tener al menos 8 caracteres, incluir una mayúscula, una minúscula y un número.';
            }

            // Si todas las validaciones son correctas, registramos al usuario
            const usuario = {
                username: username,
                email: email,
                password: password
            };
            usuariosRegistrados.push(usuario);
            console.log('Usuario registrado:', usuario);
            return true;
        } catch (error) {
            // Manejo de errores: mostramos el error en pantalla
            $('#error-message').text(error).show();
            return false;
        }
    }

    // Evento para manejar el envío del formulario
    $('#registration-form').submit(function (event) {
        event.preventDefault(); // Prevenir que el formulario se envíe de forma predeterminada

        // Obtener los valores de los campos del formulario
        let username = $('#username').val();
        let email = $('#email').val();
        let password = $('#password').val();

        // Llamar a la función de validación
        const formularioValido = validarFormulario(username, email, password);

        if (formularioValido) {
            // Si el formulario es válido, limpiamos los campos y mostramos un mensaje de éxito
            $('#error-message').hide();
            $('#username').val('');
            $('#email').val('');
            $('#password').val('');
            alert('¡Registro exitoso!');
        }
    });
});