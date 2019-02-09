import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagesModule } from './pages/pages.module';
import { NgxInputLoaderModule } from 'projects/ngx-input-loader/src/public_api';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        PagesModule,
        NgxInputLoaderModule.forRoot({
            // Defaults are shown. Change them to your according to your need.
            // All properties should not be necessarily specified.

            loader: 'rolling', // full list of loaders is provided below
            position: 'right', // options: 'right', 'center', 'left'
            color: '#000',
            background: '#fff',
            padding: '10px', // any supported format
            height: 1, // number relative to input height like 0.9 or 0.25
            opacity: 1,
            speed: 1000, // in milliseconds
            padButton: false, // adds padding to buttons
        })
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
