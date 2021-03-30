import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-field-info',
  templateUrl: './field-info.component.html',
  styleUrls: ['./field-info.component.scss']
})
export class FieldInfoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  tab3LearnMore(){
    var dots = document.getElementById("dots-tab3");
    var moreText = document.getElementById("more-tab3");
    var btnText = document.getElementById("btn-tab3");

    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  }
  tab2LearnMore(){
    var dots = document.getElementById("dots-tab2");
    var moreText = document.getElementById("more-tab2");
    var btnText = document.getElementById("btn-tab2");

    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  }
  tab1LearnMore(){
    var dots = document.getElementById("dots-tab1");
    var moreText = document.getElementById("more-tab1");
    var btnText = document.getElementById("btn-tab1");

    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  }
}
