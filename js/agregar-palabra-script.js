async function palabraNueva(){
    var confInput = new RegExp("^[A-Z\u00d1]+$", "g");

    var {value: nuevaPalabra} = await swal.fire({
                        customClass: {
                            popup: 'disenho-alerta'
                        },
                        title: `Agregar Palabra`,
                        input: `text`,
                        inputValue: ` `,
                        inputPlaceholder: `Ingrese Palabra`,
                        showCancelButton: true,
                        cancelButtonColor: '#d33',
                        confirmButtonText: 'Agregar Palabra',
                        cancelButtonText: 'Volver',
                        allowOutsideClick: false,
                        allowEscapeKey: false,
                        allowEnterKey: false,
                        stopKeydownPropagation: false,
                        inputValidator: (value) => {
                            
                            if (value.length == 0) {
                              return 'Debes Agregar una Palabra!'
                            }
                           
                           if(value.length < 3){
                                return `La palabra debe contener minimo 3 letras.`
                            }
                            if(value.length > 10){
                                return `La palabra debe contener maximo 10 letras.`
                            }

                            if(!confInput.test(value)){
                                return `No se aceptan Minusculas ni Espacios.`
                            }
                            if(value.includes(" ")){
                                return `No se aceptan espacios.` 
                            }
       
                          }
                        })

                        if(nuevaPalabra){
                            palabrasPropias.push(nuevaPalabra);
                            swal.fire({
                                customClass: {
                                    popup: 'disenho-alerta'
                                },
                                title: `Agregada!!`,
                                text: `La palabra: ` + nuevaPalabra + ` a sido agregada.`
                            })
                        }

}