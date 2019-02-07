import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
    loader = true;
    loader3 = true;

    constructor() { }

    ngOnInit() {
    }

}
