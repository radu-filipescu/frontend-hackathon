import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { QuizPageComponent } from './pages/quiz-page/quiz-page.component';

import { ProofPageComponent } from './pages/proof-page/proof-page.component';
import { InternalLeaderboardPageComponent } from './pages/internal-leaderboard-page/internal-leaderboard-page.component';
import { ExternalLeaderboardPageComponent } from './pages/external-leaderboard-page/external-leaderboard-page.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { AddUserPageComponent } from './pages/add-user-page/add-user-page.component';

import { FormsModule } from '@angular/forms';
import { FeedPageComponent } from './pages/feed-page/feed-page.component';
@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    MainPageComponent,
    QuizPageComponent,
    ProofPageComponent,
    InternalLeaderboardPageComponent,
    ExternalLeaderboardPageComponent,
    ProfilePageComponent,
    FeedPageComponent,
    LoginPageComponent,
    AddUserPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
