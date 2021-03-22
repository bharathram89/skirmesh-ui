import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 
import { AuthComponent } from './auth/auth.component';
import { AuthGuardGuard } from './helpers/auth-guard.guard';

const routes: Routes = [
  { 
    path: 'gameManagement', 
    loadChildren: () => import('./game-management/game-management.module').then(m => m.GameManagementModule),  
    canActivate: [AuthGuardGuard] 
  },
  { 
    path: 'auth', 
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) 
  }, 
  { 
    path: 'fieldManagement', 
    loadChildren: () => import('./field-management/field-management.module').then(m => m.FieldManagementModule),
    canActivate: [AuthGuardGuard] 
  }, 
  { 
    path: 'non-secure', 
    loadChildren: () => import('./non-secure/non-secure.module').then(m => m.NonSecureModule) 
  },
  {
    path: "**",
    component: AuthComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
