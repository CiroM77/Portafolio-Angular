import { Component, OnInit } from '@angular/core';
import Typed from 'typed.js';
@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
     const options = {
      strings: [
              "<i>Hello World, I am Ciro.</i>", 
              "<i>Hola Mundo, Soy Ciro.</i>"
              ],
              stringsElement: '#cadenas-texto', // ID del elemento que conttene cadenos de texto a mostrar.
              typeSpeed: 75, // Velocidad en mitsegundos para poner una letro,
              startDelay: 300, // Tiempo de retraso en tntctar to antmacton. Apltca tambten cuando termtna y vuelve a intctar,
              backSpeed: 75, // Veloctdad en mtltsegundos para borrrar una letra,
              smartBackspace: true, // Eliminar solomente las palabras que sean nuevas en una cadena de texto.
              shuffle: false, // Alterar el orden en el que escribe las palabras.
              backDelay: 1500, // Tiempo de espera despues de que termina de escribir una palabra.
              loop: true, // Repetir el array de strtngs
              // loopCount: false, Cont idad de veces a repettr el array.false = inftntte
              showCursor: true, // Mostrar cursor palpitanto
              cursorChar: '|', // Caracter para el cursor
              contentType: 'html', // 'html' o 'null' paro texto sin formato
                                                                            
  };

  const typed = new Typed('.typed', options)

  }

}
