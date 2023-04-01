import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { QuizPageComponent } from './pages/quiz-page/quiz-page.component';
import { ProofPageComponent } from './pages/proof-page/proof-page.component';

const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'quiz', component: QuizPageComponent },
  { path: 'proof', component: ProofPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
