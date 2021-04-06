import { Component, OnInit, ViewChild } from '@angular/core';
import { TabsComponent } from '../tabs/tabs.component';

@Component({
  selector: 'app-game-config',
  templateUrl: './game-config.component.html',
  styleUrls: ['./game-config.component.scss']
})
export class GameConfigComponent implements OnInit {
  
  @ViewChild('gameModeEdit') editModeTemplate; 
  @ViewChild(TabsComponent) tabsComponent;
  gameModes = [
    {
      id: 1,
      name: 'Weekend Morning Game 1',
      numNodes: '4',
      nodeModes: 'Capture/Medic',
      map: 'Town'
    }
  ];
  constructor() { }

  ngOnInit(): void {
    // this.savedGames.push({name:"Salina",numDevice:13,nodeTypes:"Bomb/Medic/Capture"})
  } 
  

  onEditMode(gameMode) {
    this.tabsComponent.openTab(
      `Editing ${gameMode.name}`,
      this.editModeTemplate,
      gameMode,
      true
    );
  }

  onAddMode() {
    this.tabsComponent.openTab('New Game Mode', this.editModeTemplate, {}, true);
  }

  onGameModeFormSubmit(dataModel) {
    if (dataModel.id > 0) {
      this.gameModes = this.gameModes.map(gameMode => {
        if (gameMode.id === dataModel.id) {
          return dataModel;
        } else {
          return gameMode;
        }
      });
    } else {
      // create a new one
      dataModel.id = Math.round(Math.random() * 100);
      this.gameModes.push(dataModel);
    }

    // close the tab
    this.tabsComponent.closeActiveTab();
  }
 

}
