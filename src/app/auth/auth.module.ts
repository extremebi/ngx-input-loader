import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { NgxInputLoaderModule } from 'projects/ngx-input-loader/src/public_api';

@NgModule({
    declarations: [AuthComponent],
    imports: [
        CommonModule,
        NgxInputLoaderModule
    ],
    exports: [
        AuthComponent
    ]
})
export class AuthModule { }
