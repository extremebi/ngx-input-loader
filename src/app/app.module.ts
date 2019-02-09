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
            'background': '#fff',
            color: '#245457',
            position: 'right',
            loader: 'circles-spinner'
        })
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
