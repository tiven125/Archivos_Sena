document.addEventListener("DOMContentLoaded", function () {
  const formulario = document.getElementById("registroForm");

  if (formulario) {
    formulario.addEventListener("submit", function (event) {
      event.preventDefault();

      const nombreInput = document.querySelector("#nombre");
      const apellidoInput = document.querySelector("#apellido");
      const correoInput = document.querySelector("#correo");
      const contraseñaInput = document.querySelector("#contraseña");

      if (nombreInput && apellidoInput && correoInput && contraseñaInput) {
        const nombre = nombreInput.value;
        const apellido = apellidoInput.value;
        const correo = correoInput.value;
        const contraseña = contraseñaInput.value;

        if (!nombre || !apellido || !correo || !contraseña) {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Por favor, completa todos los campos",
          });
          return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(correo)) {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "El correo electrónico no es válido",
          });
          return;
        }

        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
        if (!passwordRegex.test(contraseña)) {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "La contraseña debe tener al menos 8 caracteres, una mayúscula, una minúscula y un número",
          });
          return;
        }

        Swal.fire({
          icon: "success",
          title: "¡Registro exitoso!",
          text: "Tu formulario ha sido enviado correctamente",
        });
      } else {
        console.error("Alguno de los elementos de entrada no se encontró.");
      }
    });
  } else {
    console.error("El formulario no se encontró.");
  }
});
