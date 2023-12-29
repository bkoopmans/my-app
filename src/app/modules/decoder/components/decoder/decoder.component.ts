import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-decoder',
  templateUrl: './decoder.component.html',
  styleUrls: ['./decoder.component.scss']
})
export class DecoderComponent implements OnInit {

  userInput: string = '';
  imagePath: string | null = null;


  constructor() { }

  ngOnInit() {
  }

  checkInput() {
    if (this.userInput && this.userInput.toLowerCase() === 'c25ae4a 3') {
      this.imagePath = 'assets/images/escape_room_success.png';
    } else if (this.userInput && this.userInput.toLowerCase() === 'abcd1234') {
      this.imagePath = 'assets/images/Success.png';
    } else {
      this.imagePath = 'assets/images/Try_again.png';
    }
  }

}
