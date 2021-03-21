import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameManagementRoutingModule } from './game-management-routing.module';
import { GameManagementComponent } from './game-management.component';


@NgModule({
  declarations: [GameManagementComponent],
  imports: [
    CommonModule,
    GameManagementRoutingModule
  ]
})
export class GameManagementModule { }
