 $("#formulario").validate({
     rules: {
         nombre: {
             required: true,
             minlength: 2,
             remote: "php/users.php"
         },
         email: {
            required:true,
            remote: "php/emails.php"
         },
         cuenta:{iban:true,
                    required:true
     },
         comentarios: "required"
     }
 });
