const carreras = [
    {
      nombre: "Carrera 1",
      pilotos: [
        { nombre: "Piloto A", cuota: 1.5 },
        { nombre: "Piloto B", cuota: 2.3 },
        { nombre: "Piloto C", cuota: 1.8 },
      ],
    },
                ];

  function realizarApuesta(carrera, tipoApuesta, monto) {
    const carreraSeleccionada = carreras.find((c) => c.nombre === carrera);
    if (!carreraSeleccionada) {
      
        console.log("La carrera seleccionada no está disponible.");
     
        return;
    }
  
    if (monto < 10000 || monto > 1000000) {
      
        console.log("El monto debe estar entre $10,000 y $1,000,000.");
      
        return;
    }
  
    switch (tipoApuesta) {

      case "ganador":
        const pilotoGanador = carreraSeleccionada.pilotos[0];
        const ganancia = monto * pilotoGanador.cuota;

        console.log(`¡Apuesta realizada! Ganador: ${pilotoGanador.nombre}. Ganancia: $${ganancia.toFixed(2)}`);
        
        break;

      case "posicionesExactas":
        
      if (carreraSeleccionada.pilotos.length < 2) {
         
        console.log("No hay suficientes pilotos para apostar por posiciones exactas.");
          
          return;
        }

        const piloto1 = carreraSeleccionada.pilotos[0];
        const piloto2 = carreraSeleccionada.pilotos[1];
        const gananciaExacta = monto * piloto1.cuota * piloto2.cuota;
       
        console.log(`¡Apuesta realizada! 1er puesto: ${piloto1.nombre}, 2do puesto: ${piloto2.nombre}. Ganancia: $${gananciaExacta.toFixed(2)}`);
        
        break;
      
        default:
        
        console.log("Tipo de apuesta no válido. Debes elegir 'ganador' o 'posicionesExactas'.");
    }
  }{}