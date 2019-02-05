import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxInputLoaderModule } from 'projects/ngx-input-loader/src/public_api';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgxInputLoaderModule.forRoot({
            type: "Better"
        })
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
