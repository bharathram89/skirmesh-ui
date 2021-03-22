import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NonSecureComponent } from './non-secure.component';

const routes: Routes = [{ path: '', component: NonSecureComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NonSecureRoutingModule { }
