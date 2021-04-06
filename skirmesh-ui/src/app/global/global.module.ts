import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

import { RouterModule } from '@angular/router'; 
import { SecureFooterComponent } from './secure-footer/secure-footer.component'; 
import { AuthService } from 'src/service/auth.service';
import { UserServiceService } from 'src/service/user-service.service';
import { GameConfigComponent } from './game-config/game-config.component';
import { TabsComponent } from './tabs/tabs.component';
import { TabComponent } from './tab/tab.component';
import { DynamicTabsDirective } from './tabs/dynamic-tabs.directive';
import { GamelistComponent } from './gamelist/gamelist.component';
import { EditGameComponent } from './edit-game/edit-game.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [FooterComponent, HeaderComponent, GameConfigComponent, TabsComponent, TabComponent,
    TabsComponent,
    TabComponent,
    DynamicTabsDirective,
    GamelistComponent,
    EditGameComponent,],
  imports: [
    RouterModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule

  ],
  exports: [FooterComponent, HeaderComponent,GameConfigComponent]
})
export class GlobalModule { }
//AuthService