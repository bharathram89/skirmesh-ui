import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'gameManagement', loadChildren: () => import('./game-management/game-management.module').then(m => m.GameManagementModule) }, { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) }, { path: 'fieldManagement', loadChildren: () => import('./field-management/field-management.module').then(m => m.FieldManagementModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
