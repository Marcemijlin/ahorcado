function limpiar(){
    swal.fire({
        customClass: {
            popup: 'disenho-alerta'
        },
        title: `Limpiar Palabras`,
        text: `Todas las palabras que a agregado seran borradas`,
        showCancelButton: true,
        confirmButtonText: `Confirmar`,
        cancelButtonText: `Regresar`
    }).then((result) => {
        if (result.isConfirmed) {
            palabrasPropias = [];
            return palabrasPropias
          
        }
        else{
            regresarMenu();
        }
      })
}