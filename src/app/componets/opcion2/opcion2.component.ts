import { Component } from '@angular/core';

@Component({
  selector: 'app-opcion2',
  templateUrl: './opcion2.component.html',
  styleUrls: ['./opcion2.component.css']
})
export class Opcion2Component {

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    const audio = new Audio('../../../assets/audio/Prueba.mp3');
        // audio.play();
        // audio.pause()
  }
}
