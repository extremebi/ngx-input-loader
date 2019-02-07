import { loaders } from './../../../projects/ngx-input-loader/src/lib/loaders.config';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-pages',
    templateUrl: './pages.component.html',
    styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {
    loader = true;
    loader3 = true;
    constructor() { }

    ngOnInit() {
    }

}
