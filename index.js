// const mostrarReloj = () => {
//     let fecha = new Date();

//     let hora = formatoHora(fecha.getHours() );
//     let minutos = formatoHora(fecha.getMinutes() );
//     let segundos = formatoHora(fecha.getSeconds());
//     document.getElementById('hora').innerHTML = `${hora}:${minutos}:${segundos}`;


//     const meses = [
//         'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 
//         'Julio', 'Agosto', 'Septiembre', 
//         'Octubre', 'Noviembre', 'Diciembre'
//     ];
    
//     const dias = [
//         'Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'
//     ];
    
//     let diasSemana = dias[fecha.getDay()];
//         let dia = fecha.getDate();
//         let mes = meses[fecha.getMonth()];
//         let fechaTexto = `${diasSemana} ${dia} ${mes}`;
    
//         document.getElementById('fecha').innerHTML = fechaTexto;
        

// }



//     const formatoHora = (hora) =>{
//         if(hora < 10)
//             hora = '0' + hora;
//         return hora;
//     }

//     setInterval(mostrarReloj, 1000);


const mostrarReloj = () => {
    let fecha = new Date();

    let hora = formatoHora(fecha.getHours() );
    let minutos = formatoHora(fecha.getMinutes() );
    let segundos = formatoHora(fecha.getSeconds());
    document.getElementById('hora').innerHTML = `${hora}:${minutos}:${segundos}`;

    
    
    }

    const formatoHora = (hora) =>{
        if(hora < 10)
            hora = '0' + hora;
        return hora;
    }

    setInterval(mostrarReloj, 1000);
   

    const getRemainTime = deadline =>{
        let now = new Date(),
            remainTime = (new Date(deadline) - now + 1000) / 1000,
            remainSeconds = ('0' + Math.floor(remainTime % 60)).slice(-2),
            remainMinutes = ('0' + Math.floor(remainTime / 60 % 60)).slice(-2),
            remainHours = ('0' + Math.floor(remainTime / 3600 % 24)).slice(-2),
            remainDays = Math.floor(remainTime / (3600 * 24));
            
            return{
                remainTime,
                remainSeconds,
                remainMinutes,
                remainHours,
                remainDays
            }

    };

    const countdown = (deadline, elem, finalMessage) =>{
        const el = document.getElementById(elem);

        const timerUpdate = setInterval( () => {

            let t = getRemainTime(deadline);
            // el.innerHTML = `${t.remainDays}d:${t.remainHours}h:${t.remainMinutes}m:${t.remainSeconds}s`;
            el.innerHTML = `
                ${t.remainDays}d:
                ${t.remainHours}h:
                ${t.remainMinutes}m:
                ${t.remainSeconds}s`;

            if (t.remainTime <= 1){
                clearInterval(timerUpdate);
                el.innerHTML = finalMessage;
            }


        } , 1000);



    };


    // document.getElementById('contenedor').classList.toggle('animar');


    // countdown('Sep 07 2022 16:40:50 GMT-0500', 'clock', '<a href="https://www.youtube.com/results?search_query=php+yii2">Ir a formulario de Registro</a>    ');
        countdown('Sep 08 2022 14:00:00 GMT-0500', 'clock', 'Ya es la hora de la comida');


    

    