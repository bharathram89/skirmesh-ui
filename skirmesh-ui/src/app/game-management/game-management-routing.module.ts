import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameManagementComponent } from './game-management.component';

const routes: Routes = [{ path: '', component: GameManagementComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GameManagementRoutingModule { }
