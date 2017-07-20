import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { GitApiService } from './git-api.service';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [GitApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
