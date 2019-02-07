import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { NgxInputLoaderModule } from 'projects/ngx-input-loader/src/public_api';

@NgModule({
    declarations: [PagesComponent],
    imports: [
        CommonModule,
        NgxInputLoaderModule
    ],
    exports: [
        PagesComponent
    ]
})
export class PagesModule { }
