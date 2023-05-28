import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from '../app/modules/home/home.component';
import { ChoiceComponent } from '../app/modules/choice/choice.component';
import { GaugeComponent } from '../app/shared/gauge/gauge.component';
import { GameOverComponent } from '../app/modules/game-over/game-over.component';
import { GameBarComponent } from './shared/game-bar/game-bar.component';
import { EventCardComponent } from './shared/event-card/event-card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ChoiceComponent,
    GaugeComponent,
    GameOverComponent,
    GameBarComponent,
    EventCardComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
