import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { ProofPageComponent } from './pages/proof-page/proof-page.component';

const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'proof/:action', component: ProofPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
