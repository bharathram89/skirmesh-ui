import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FieldManagementRoutingModule } from './field-management-routing.module';
import { FieldManagementComponent } from './field-management.component';


@NgModule({
  declarations: [FieldManagementComponent],
  imports: [
    CommonModule,
    FieldManagementRoutingModule
  ]
})
export class FieldManagementModule { }
