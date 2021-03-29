import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FaqComponent } from './faq/faq.component';
import { FeaturesListComponent } from './features-list/features-list.component';
import { FieldInfoComponent } from './field-info/field-info.component';
import { HomeComponent } from './home/home.component';
import { NonSecureComponent } from './non-secure.component';
import { PlayerInfoComponent } from './player-info/player-info.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';

// const routes: Routes = [{ path: '', component: NonSecureComponent }];

const routes: Routes = [
  { path: '',
  component: NonSecureComponent,
  children: [
    {
      path: 'home',
      component: HomeComponent,
    },
    {
      path: 'feature-list',
      component: FeaturesListComponent,
    },
    {
      path: 'faq',
      component: FaqComponent,
    },
    {
      path: 'contact-us',
      component: ContactUsComponent,
    },
    {
      path: 'privacy-policy',
      component: PrivacyPolicyComponent,
    },
    {
      path: 'field-info',
      component: FieldInfoComponent,
    },
    {
      path: 'player-info',
      component: PlayerInfoComponent,
    },
    
    {
      path: "",
      redirectTo:'/non-secure/home'
    }
  ]},
  
  // { path: '**',
  // component: NonSecureComponent,
  // children: [
  //   {
  //     path: '**',
  //     redirectTo: 'home',
  //   },
  //   {
  //     path: 'features-list',
  //     component: FeaturesListComponent,
  //   }
  // ]}
 ];
 
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NonSecureRoutingModule { }
