import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SetupComponent } from './setup/setup.component';
import { QuestionsComponent } from './questions/questions.component';
import { SnapshotComponent } from './snapshot/snapshot.component';

const routes: Routes = [
  { path: '', redirectTo: 'snapshot', pathMatch: 'full'},
  { path: 'setup', component: SetupComponent},
  { path: 'snapshot', component: SnapshotComponent},
  { path: 'assistant/:code', component: QuestionsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
