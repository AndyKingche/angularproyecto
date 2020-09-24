import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SeriesService } from './services/series.service';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { SeriesFormComponent } from './components/series-form/series-form.component';
import { SeriesListComponent } from './components/series-list/series-list.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    SeriesFormComponent,
    SeriesListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ SeriesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
