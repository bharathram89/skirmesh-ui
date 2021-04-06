import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-gamelist',
  templateUrl: './gamelist.component.html',
  styleUrls: ['./gamelist.component.scss']
})
export class GamelistComponent implements OnInit {

  @Input() gamemodes;
  @Output() addMode = new EventEmitter<any>();
  @Output() editMode = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }

}
