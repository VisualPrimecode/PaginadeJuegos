    $(document).ready(function(){
    $(function() {

            $('#login-form-link').click(function(e) {
                $("#login-form").delay(100).fadeIn(100);
                $("#register-form").fadeOut(100);
                $('#register-form-link').removeClass('active');
                $(this).addClass('active');
                e.preventDefault();
            });
            $('#register-form-link').click(function(e) {
                $("#register-form").delay(100).fadeIn(100);
                $("#login-form").fadeOut(100);
                $('#login-form-link').removeClass('active');
                $(this).addClass('active');
                e.preventDefault();
            });
        });

    //    });
    //         $("#reg_username").on("input", function() {
    //             // Elimina mensajes de error anteriores
    //             $(this).next().remove();
            
    //             if ($(this).val().trim() === "") {
    //                 $(this).after("<span style='color: red;'>Completa.</span>");
    //                 $("#register-submit").prop("disabled", true);
    //             } else if (!/^[a-zA-Z]+$/.test($(this).val())) {
    //                 // Si tiene otros caracteres, muestra un mensaje de error
    //                 $(this).after("<span style='color: red;'>Solo se permiten letras.</span>");
    //                 $("#register-submit").prop("disabled", true);
    //             } else {
    //                 $("#register-submit").prop("disabled", false);
    //             }
    //         });
            
    //         $("#reg_password").on("input", function() {
    //         if ($(this).val().length < 8) {
    //             $(this).next().remove();
    //             $(this).after("<span style='color: red;'>La contraseña debe tener al menos 8 caracteres.</span>");
    //             $("#register-submit").prop("disabled", true);
    //         } else {
    //             $(this).next().remove();
    //             $("#register-submit").prop("disabled", false);
    //         }
    //         if ($(this).val().length == 0) {
    //             $(this).next().remove();
    //             $(this).after("<span style='color: red;'>Campo obligatorio.</span>");
    //             $("#register-submit").prop("disabled", true);
    //         }
    //         });

    //     $("#register-form").submit(function(e) {
    //         var error = false;
    //         if ($("#reg_username").val().trim() === "") {
    //         $("#reg_username").next().remove();
    //         $("#reg_username").after("<span style='color: red;'>El campo de usuario es obligatorio.</span>");
    //         error = true;
    //         }
    //         if (error) {
    //         e.preventDefault();
    //         }
    //     });
});
