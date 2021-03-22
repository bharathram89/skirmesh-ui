import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NonSecureRoutingModule } from './non-secure-routing.module';
import { NonSecureComponent } from './non-secure.component';


@NgModule({
  declarations: [NonSecureComponent],
  imports: [
    CommonModule,
    NonSecureRoutingModule
  ]
})
export class NonSecureModule { }
