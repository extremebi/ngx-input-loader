<a href="https://koderlabs.github.io/ngx-device-detector">
  <h1 align="center">Ngx-Input-Loader</h1> 
</a>

<p align="center">
An Angular 4+ plugin to show some async task going on an input field. Eg: Fetching results of autocomplete from backend, etc.
</p>

<!-- <p align="center">
<a href="https://travis-ci.org/KoderLabs/ngx-device-detector"><img src="http://img.shields.io/travis/KoderLabs/ngx-device-detector.svg?style=flat" alt="travis build status" ></a>
<a href="https://www.npmjs.com/package/ngx-device-detector"><img src="https://img.shields.io/npm/v/ngx-device-detector.svg" alt="npm version" ></a>
<a href="https://www.npmjs.com/package/ngx-device-detector"><img src="https://img.shields.io/github/stars/KoderLabs/ngx-device-detector.svg?style=social&label=Star&style=flat-square" alt="github stars" ></a>
<a href="https://www.npmjs.com/package/ngx-device-detector"><img src="https://img.shields.io/npm/l/ngx-device-detector.svg?style=flat-square" alt="license" ></a>
</p>
<p align="center">
  <a href="https://www.npmjs.com/package/ng2-device-detector">Deprecated package :</a>
  <a href="https://www.npmjs.com/package/ng2-device-detector"><img src="https://img.shields.io/npm/dt/ng2-device-detector.svg?style=flat-square" alt="npm downloads total" ></a>
  <a href="https://www.npmjs.com/package/ng2-device-detector"><img src="https://img.shields.io/npm/dm/ng2-device-detector.svg" alt="npm downloads/month" ></a>
</p>
<p align="center">
  <a href="https://www.npmjs.com/package/ngx-device-detector">New package :</a>
  <a href="https://www.npmjs.com/package/ngx-device-detector"><img src="https://img.shields.io/npm/dt/ngx-device-detector.svg?style=flat-square" alt="npm downloads total" ></a>
  <a href="https://www.npmjs.com/package/ngx-device-detector"><img src="https://img.shields.io/npm/dm/ngx-device-detector.svg" alt="npm downloads/month" ></a>
</p> -->


<!-- ## DOCS

[Ngx Device Detector DOCS](https://koderlabs.github.io/ngx-device-detector) -->

<!-- ## Live DEMO

[Ngx Device Detector Demo](https://koderlabs.github.io/ngx-device-detector/demo) -->


## Installation

To install this library, run:

```bash
$ npm install ngx-input-loader --save
```

## Usage
Import `NgxInputLoaderModule` in your app.module.ts
```typescript
  import { NgModule } from '@angular/core';
  import { NgxInputLoaderModule } from 'ngx-input-loader';
  ...
  @NgModule({
    declarations: [
      ...
    ],
    imports: [
      CommonModule,
      FormsModule,
       NgxInputLoaderModule.forRoot({
            'background': '#fff',
            color: '#245457',
            padding: '30px',
            position: 'center'
        })
    ],
    providers:[
      ...
    ]
    ...
  })
```

In your component where you want to use the loader inside an input
```typescript
  import { Component } from '@angular/core';
  ...
  import { DeviceDetectorService } from 'ngx-device-detector';
  ...
  @Component({
    selector: 'home',  // <home></home>
    styleUrls: [ './home.component.scss' ],
    template: `
         <input type="text" placeholder="Enter a username"
            [ngxInputLoader]="showLoader" [ngxInputLoaderConfig]="{background: '#ff0066'}">
            <!-- fetching results from the backend will show a spinner on the input field -->
    `,
    ...
  })

  export class HomeComponent {
    ...
    constructor(..., private http: Http) {
    ...
    }
    ...
  }

```

<!-- ## Device service
Holds the following properties
* browser
* os
* device
* userAgent
* os_version

## Helper Methods
* **isMobile() :** returns if the device is a mobile device (android / iPhone/ windows-phone etc)
* **isTablet() :** returns if the device us a tablet (iPad etc)
* **isDesktop() :** returns if the app is running on a Desktop browser. -->

## Development

To generate all `*.js`, `*.js.map` and `*.d.ts` files:

```bash
  $ npm run tsc
```

To lint all `*.ts` files:

```bash
  $ npm run lint
```

To run unit tests
```bash
  $ npm run test
```

To build the library
```bash
  $ npm run build
```


## Run the DEMO

Make sure you have @angular/cli installed

```bash
  $ npm install -g @angular/cli
```

```bash
  $ cd demo
  $ npm install
  $ ng serve
```

the demo will be up at `localhost:4200`

<!-- ## Change Log

Please see [CHANGE_LOG.MD](CHANGE_LOG.MD) for the updates.

## IE10, IE11 Compatibility

If you're consuming the library for IE10 & IE11, make sure to uncomment (at least) these lines from `src/polyfills.ts` in your project.

```typescript
import 'core-js/es6/string';
import 'core-js/es6/array';
import 'core-js/es6/map';
```

## Credits

The library is inspired by and based on the work from [ng-device-detector ](https://github.com/srfrnk/ng-device-detector). Also used a typescript wrapper of the amazing work in [ReTree](https://github.com/srfrnk/re-tree) for regex based needs and an Angular2 Library Creator boilerplate to get the work started fast. I.e. [Generator Angular2 library](https://github.com/jvandemo/generator-angular2-library). -->

## License

MIT © [Extreme Business Intelligence Private Limited](https://github.com/extremebi)