import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { ProofPageComponent } from './pages/proof-page/proof-page.component';
import { InternalLeaderboardPageComponent } from './pages/internal-leaderboard-page/internal-leaderboard-page.component';
import { ExternalLeaderboardPageComponent } from './pages/external-leaderboard-page/external-leaderboard-page.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    MainPageComponent,
    ProofPageComponent,
    InternalLeaderboardPageComponent,
    ExternalLeaderboardPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
