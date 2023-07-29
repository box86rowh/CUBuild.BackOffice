import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTableModule} from '@angular/material/table'
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatListModule } from '@angular/material/list';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LandingComponent } from './landing/landing.component';
import { HomeComponent } from './home/home.component';
import { SetupComponent } from './setup/setup.component';
import { SnapshotComponent } from './snapshot/snapshot.component';
import { QuestionsComponent } from './questions/questions.component';
import { NgHttpLoaderModule } from 'ng-http-loader';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ShareViewComponent } from './share-view/share-view.component';
import { TransactionListComponent } from './transaction-list/transaction-list.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    HomeComponent,
    SetupComponent,
    SnapshotComponent,
    QuestionsComponent,
    ShareViewComponent,
    TransactionListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatGridListModule,
    MatListModule,
    MatTableModule,
    HttpClientModule,
    MatCardModule,
    MatTabsModule,
    NgbModule,
    MatIconModule,
    NgHttpLoaderModule.forRoot()
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
