import _ from 'lodash';
import './estilos.css';
import Imagen from './countries.png';


if('serviceWorker' in navigator){
    window.addEventListener('load', ()=>{
        navigator.serviceWorker.register('./service-worker.js').then(registration => {
            console.log("SW ha sido registrado", registration);
        }).catch(err=>{
            console.log("SW no registrado",err)
        });
    });
}

function componente(){
    const elemento = document.createElement('div');
    elemento.innerHTML = _.join(['A continuacion se muestran','los paises con mayor produccion de vino.'], ' ');
    elemento.classList.add('descripcionvino');
    const miImagen = new Image();
    miImagen.src = Imagen;
    elemento.appendChild(miImagen);
    return elemento;
}

document.body.appendChild(componente())