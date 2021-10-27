import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dialog-newsletter',
  templateUrl: './dialog-newsletter.component.html',
  styleUrls: ['./dialog-newsletter.component.scss']
})
export class DialogNewsletterComponent implements OnInit {

  isNewletterChecked = true;

  constructor() { }

  ngOnInit(): void {
  }

  setCheckboxFalse() {
     this.isNewletterChecked = false;
     //this.isNewletterChecked.checked = false;
  }



}
