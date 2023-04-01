$(document).ready(function(){
    // Desactivar el botón de "Crear cuenta" al cargar la página
    $('#register-submit2').attr('disabled', true);
    
    // Activar el botón de "Crear cuenta" cuando el formulario de registro está lleno
    $('input[name="reg_username"], input[name="reg_email"], input[name="reg_password"], input[name="reg_confirm_password"]').on('input', function() {
        var reg_usernameValue = $('input[name="reg_username"]').val();
        var reg_emailValue = $('input[name="reg_email"]').val();
        var reg_passwordValue = $('input[name="reg_password"]').val();
        var reg_confirm_passwordValue = $('input[name="reg_confirm_password"]').val();
        
        if (reg_usernameValue !== '' && reg_emailValue !== '' && reg_passwordValue !== '' && reg_confirm_passwordValue !== '') {
            $('#register-submit2').attr('disabled', false);
            $('#form-message').text('¡El formulario está completo! Ahora puede hacer clic en "Crear cuenta"').show();
        } else {
            $('#register-submit2').attr('disabled', true);
            $('#form-message').hide();
        }
        
        // Validar que el nombre de usuario solo contenga letras
        var letters = /^[A-Za-z]+$/;
        if(!reg_usernameValue.match(letters)) {
            $('#reg_username_error').text('El nombre de usuario solo puede contener letras').show();
            $('#register-submit2').attr('disabled', true);
        } else {
            $('#reg_username_error').hide();
        }
    });
});
