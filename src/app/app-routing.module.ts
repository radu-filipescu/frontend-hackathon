import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { QuizPageComponent } from './pages/quiz-page/quiz-page.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { ProofPageComponent } from './pages/proof-page/proof-page.component';
import { InternalLeaderboardPageComponent } from './pages/internal-leaderboard-page/internal-leaderboard-page.component';
import { ExternalLeaderboardPageComponent } from './pages/external-leaderboard-page/external-leaderboard-page.component';
import { FeedPageComponent } from './pages/feed-page/feed-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { AddUserPageComponent } from './pages/add-user-page/add-user-page.component';

const routes: Routes = [
  { path: '', component: LoginPageComponent },
  { path: 'home', component: MainPageComponent },
  { path: 'internal', component: InternalLeaderboardPageComponent },
  { path: 'external', component: ExternalLeaderboardPageComponent },
  { path: 'quiz', component: QuizPageComponent },
  { path: 'proof/:action', component: ProofPageComponent },
  { path: 'profile', component: ProfilePageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'adduser', component: AddUserPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
