import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from '../app/modules/home/home.component';
import { ChoiceComponent } from '../app/modules/choice/choice.component';
import { GaugeComponent } from '../app/shared/gauge/gauge.component';
import { GameOverComponent } from '../app/modules/game-over/game-over.component';
import { GameBarComponent } from './shared/game-bar/game-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ChoiceComponent,
    GaugeComponent,
    GameOverComponent,
    GameBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
