import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NodeConfigService } from '../service/node-status.service';
import { GlobalModule } from './global/global.module';
import { AuthService } from '../service/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { SocialLoginModule, SocialAuthServiceConfig, SocialAuthService } from 'angularx-social-login';
import {
  GoogleLoginProvider,
  FacebookLoginProvider
} from 'angularx-social-login';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GlobalModule,
    HttpClientModule,
  ],
  providers: [
    NodeConfigService,
    AuthService,
    SocialAuthService,
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider(
              '348781009877452'
            )
          }
        ]
      } as SocialAuthServiceConfig,
    }    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
