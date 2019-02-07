import { loaders } from './loaders.config';
import { Directive, OnChanges, AfterViewInit, SimpleChanges, ElementRef, Input, HostBinding, Inject } from '@angular/core';
import { SafeStyle, DomSanitizer } from '@angular/platform-browser';
import { NgxInputLoaderConfig, NGX_INPUT_LOADER_CONFIG } from './ngx-input-loader.interface';

@Directive({
    selector: '[ngxInputLoader]'
})

export class NgxInputLoaderDirective implements OnChanges, AfterViewInit {

    @Input() ngxInputLoader: Boolean;
    @Input('ngxInputLoaderConfig') configElement: NgxInputLoaderConfig;
    @HostBinding('style.background') background: SafeStyle;
    private inserted: boolean = false;
    private element: HTMLInputElement;
    private initialBackground: string;

    /**
    |--------------------------------------------------
    | DEFAULT CONFIGURATION
    |--------------------------------------------------
    */
    private config: NgxInputLoaderConfig = {
        loader: 'ball-fading-shrink',
        background: '#fff',
        position: 'right',
        color: '#000',
        height: 1,
        padding: 10,
        speed: 1000,
        opacity: 1
    };

    constructor(
        private el: ElementRef,
        private sanitizer: DomSanitizer,
        @Inject(NGX_INPUT_LOADER_CONFIG) configModule: NgxInputLoaderConfig) {
        /**
        |--------------------------------------------------
        | MODULE CONFIGURATION WITH ForRoot OBJECT
        |--------------------------------------------------
        */
        this.setConfiguration(configModule);
        this.element = this.el.nativeElement;
        this.initialBackground = this.element.style.background;
    }

    ngOnChanges(changes: SimpleChanges) {
        this.setLoader();
    }

    ngAfterViewInit() {
        this.setLoader();
    }

    setLoader() {
        /**
        |--------------------------------------------------
        | ELEMENT CONFIGURATION WITH ngxInputLoaderConfig INPUT BINDING OBJECT
        |--------------------------------------------------
        */
        this.setConfiguration(this.configElement);

        if (!this.inserted && this.ngxInputLoader && this.element.localName === 'input') {
            let loader = this.getLoader();
            this.background = this.sanitizer.bypassSecurityTrustStyle(loader);
            this.inserted = true;

        } else if (this.inserted && !this.ngxInputLoader) {
            this.background = this.initialBackground ? this.sanitizer.bypassSecurityTrustStyle(this.initialBackground) : null;
            this.inserted = false;
        }
    }

    getLoader(): string {
        let svg = loaders[this.config.loader](this.config.color, this.config.speed, this.config.opacity)
        let encodedSVG = btoa(svg);
        let height = this.element.offsetHeight;
        let loader = `url("data:image/svg+xml;base64,${encodedSVG}") no-repeat `

        loader += `${this.config.position} `
        loader += `${this.config.position !== 'center' ? this.config.padding + 'px' : ''} center / `
        loader += `${this.config.height * height * 0.8}px`

        if (this.config.background) {
            loader += `, ${this.config.background}`
        } else if (this.initialBackground) {
            loader += `, ${this.initialBackground}`
        }
        return loader;
    }

    setConfiguration(config: NgxInputLoaderConfig) {
        if (config) {
            Object.keys(config).forEach((key) => this.config[key] = config[key]);
        }
    }
}
