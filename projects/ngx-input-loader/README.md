<a href="https://github.com/extremebi/ngx-input-loader">
  <h1 align="center">Ngx-Input-Loader</h1> 
</a>

<p align="center">
An Angular 4+ plugin to add loading spinners to your input fields seamlessly. 
</p>


## Table of contents

<!-- - [Live Demo](#live-demo) -->
- [Installation](#installation)
- [Usage](#usage)
- [Configuration](#configuration)
- [Loaders](#loaders)
- [License](#license)


<!-- ## Live DEMO

[Ngx Input Loader Demo](https://invinciblezeal.github.com/ngx-input-loader) -->



## Installation

To install this library, run:

```bash
$ npm install ngx-input-loader --save
```



## Usage

Import `NgxInputLoaderModule` in the root module (`app.module.ts`)

```typescript
...
import { NgxInputLoaderModule } from 'ngx-input-loader';

@NgModule({
    imports: [
        ...
        NgxInputLoaderModule
    ],
})

export class AppModule { }
  
```

Use the `ngxInputLoader` directive by binding it to a boolean value in the component's html (`any.component.html`)

* INPUTS

```html
<input type="text" [ngxInputLoader]="true"> 
```

* BUTTONS

```html
<button [ngxInputLoader]="true" [ngxInputLoaderConfig]="{padButton: true}">SUBMIT</button>

<!-- OR -->

<input type="button" value="Submit" [ngxInputLoader]="true" [ngxInputLoaderConfig]="{padButton: true}">

<input type="submit" value="Submit" [ngxInputLoader]="true" [ngxInputLoaderConfig]="{padButton: true}">
```

## Configuration

#### Available Options

* `loader -` Type of loader to use. See [loaders](#loaders) for the list of available loaders. Default: `rolling`.

* `position -` Position of the loader on the input or button element. Default: `right`.
    * Options: `right`, `left` & `center`.

* `color -` Color of the loader. All supported color formats can be used. Default: `#000`.

* `background -` Background of the element when the loader is visible. Images with `url('path/to/image')` can also be set as background. Default: `#fff`.

* `padding -` Padding to the loader w.r.t. the element. Default: `10px`.
    * In case of `position: 'right'` (default) only padding-right is applied.
    * In case of `position: 'left'`, only padding-left is applied.
    * In case of `position: 'center'`, no padding will be applied even if specified.

* `height -` Relative height of the loader w.r.t. the element. Default: `1`.

* `opacity -` Opacity of the loader. Default: `1`.

* `speed -` Speed of the loader. Default: `1000` (in milli-seconds).

* `padButton -` Whether to pad the button to make space for the loader when it's visible. It will pad if the element is a `button` or `input[type="submit"]` or `input[type="button"]` else it won't, even if specified.
    * Options: `true` or `false`.



#### Modular Level Configuration

Pass in the configuration object in the `forRoot` method of the `NgxInputLoaderModule` in the imports array of your root module (`app.module.ts`)

```typescript
...
import { NgxInputLoaderModule } from 'ngx-input-loader';

@NgModule({
    imports: [
        ...
        NgxInputLoaderModule.forRoot({
            // Defaults are shown. Change them to your according to your need.
            
            loader: 'rolling', // full list of loaders is provided below
            position: 'right', // options: 'right', 'center', 'left'
            color: '#000',  
            background: '#fff', 
            padding: '10px', // any supported format
            height: 1, // number relative to input height like 0.9 or 0.25
            opacity: 1, 
            speed: 1000, // in milliseconds
            padButton: false, // adds padding to buttons

            // In case any property is not specified, default options are used.
        })
    ]
})
```

#### Element Level Configuration

Add `ngxInputLoaderConfig` property binded to the configuration object to your html element. 

`Note-` This will override your modular level configuration (if any) just for this specific element.

```html

<input type="text" [ngxInputLoader]="true" [ngxInputLoaderConfig]="{
    loader: 'bars-music',
    position: 'center',
    color: '#fff',
    background: '#333',
    padding: '15px',
    height: 0.75,
    opacity: 0.7,
    speed: 750
}">

<!-- In case any property is not specified, modular level configuraition will be used (if any) else default options are used. -->
```



## Loaders

#### Types of Loaders Available -
* 'ball-bounce'
* 'ball-ellipsis'
* 'ball-fading-shrink'
* 'ball-fading'
* 'ball-fountain-fading'
* 'ball-fountain'
* 'ball-interwind'
* 'ball-line'
* 'ball-mini'
* 'ball-planets'
* 'ball-spinner-double'
* 'ball-spinner'
* 'ball-triangle'
* 'bars-music'
* 'bars-trespassing'
* 'bars'
* 'circles-spinner'
* 'circles'
* 'clock'
* 'dots-triple'
* 'drops-fading'
* 'eclipse'
* 'flickr'
* 'gear'
* 'grid'
* 'oval'
* 'pendulum'
* 'ring-broken'
* 'ring-double'
* 'ring-dual'
* 'ripple-inbound'
* 'ripple'
* 'rolling-short'
* 'rolling'
* 'segments'
* 'snake-chasing'
* 'snake-full'
* 'snake-solid'
* 'tail-spin'
* 'triangle-spin-triple'
* 'twirl'
* 'typing'



## License

MIT © [Extreme Business Intelligence Private Limited](https://github.com/extremebi)