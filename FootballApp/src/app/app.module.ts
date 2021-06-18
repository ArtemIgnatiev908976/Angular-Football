import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {Routes} from "@angular/router";
import {RouterModule} from "@angular/router";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BannerComponent } from './banner/banner.component';
import { MainSectionComponent } from './main-section/main-section.component';
import { TableCardComponent } from './shared/table-card/table-card.component';
import { SelectorMenuComponent } from './shared/selector-menu/selector-menu.component';
import { OneTeamComponent } from './one-team/one-team.component';
import {HttpClientModule} from "@angular/common/http";
import {TeamsService} from "./teams.service";
import {FormsModule} from "@angular/forms";



const appRoutes: Routes =[
  {path: 'main-section', component: MainSectionComponent},
  {path: 'oneTeam', component: OneTeamComponent},

]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    MainSectionComponent,
    TableCardComponent,
    SelectorMenuComponent,
    OneTeamComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule
  ],
  providers: [ TeamsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
