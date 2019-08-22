import { loaders } from './loaders.config';
import { Directive, OnChanges, AfterViewInit, SimpleChanges, ElementRef, Input, HostBinding, Inject } from '@angular/core';
import { SafeStyle, DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { NgxInputLoaderConfig, NGX_INPUT_LOADER_CONFIG } from './ngx-input-loader.interface';

@Directive({
    selector: '[ngxInputLoader]'
})

export class NgxInputLoaderDirective implements OnChanges, AfterViewInit {

    @Input() ngxInputLoader: Boolean;
    @Input('ngxInputLoaderConfig') configElement: NgxInputLoaderConfig;
    @HostBinding('style.background') background: SafeStyle;
    @HostBinding('style.padding-right') paddingRight: SafeStyle;
    @HostBinding('style.padding-left') paddingLeft: SafeStyle;
    @HostBinding('value') value: string;
    @HostBinding('innerHTML') innerHTML: SafeHtml;
    @HostBinding('innerText') innerText: string;
    @HostBinding('textContent') textContent: string;
    @HostBinding('style.width.px') width: number;
    @HostBinding('style.height.px') height: number;

    private inserted: boolean = false;
    private element: HTMLInputElement;
    private initial = {
        background: undefined,
        children: [],
        value: undefined,
        innerHTML: null,
        innerText: null,
    }
    private textNodes = []
    private config: NgxInputLoaderConfig = {
        loader: 'rolling',
        background: '#fff',
        position: 'right',
        color: '#000',
        padding: '10px',
        height: 1,
        opacity: 1,
        speed: 1000,
        button: true
    };

    constructor(
        private el: ElementRef,
        private sanitizer: DomSanitizer,
        @Inject(NGX_INPUT_LOADER_CONFIG) modularConfig: NgxInputLoaderConfig) {
        /**
        |--------------------------------------------------
        | Modular Configurationh from forRoot() method
        |--------------------------------------------------
        */
        this.setConfiguration(modularConfig);
        this.element = this.el.nativeElement;
        this.initial = {
            background: this.element.style.background,
            children: [],
            value: this.element.value,
            innerHTML: this.element.innerHTML,
            innerText: this.element
        }
    }

    ngOnChanges(changes: SimpleChanges) {
        this.initLoader();
    }

    ngAfterViewInit() {
        this.initLoader();
    }

    initLoader() {
        this.setConfiguration(this.configElement);
        if (!this.inserted && this.ngxInputLoader) {
            this.insertLoader();
        } else if (this.inserted && !this.ngxInputLoader) {
            this.removeLoader();
        }
    }

    insertLoader() {
        if (this.config.button) {
            this.config.position = 'center';
            this.width = this.element.offsetWidth;
            this.height = this.element.offsetHeight;
            this.value = null;
            this.emptyButtonContent();
        }
        let loader = this.loader;
        this.background = this.sanitizer.bypassSecurityTrustStyle(loader);
        this.inserted = true;
    }

    removeLoader() {
        if (this.config.button) {
            this.value = this.initial.value;
            this.fillButtonContent();
        }
        this.background = this.initial.background ? this.sanitizer.bypassSecurityTrustStyle(this.initial.background) : null;
        this.inserted = false;
    }

    get loader(): string {
        let svg = loaders[this.config.loader](this.config.color, this.config.speed, this.config.opacity)
        let encodedSVG = btoa(svg);
        let height = this.element.offsetHeight;
        let loader = `url("data:image/svg+xml;base64,${encodedSVG}") no-repeat `

        loader += `${this.config.position} `
        loader += `${this.config.position !== 'center' ? this.config.padding : ''} center / `
        loader += `${this.config.height * height * 0.8}px`

        if (this.config.background) {
            loader += `, ${this.config.background}`
        } else if (this.initial.background) {
            loader += `, ${this.initial.background}`
        }
        return loader;
    }

    setConfiguration(config: NgxInputLoaderConfig) {
        if (config) {
            this.config = {
                ...this.config,
                ...config
            }
        }
    }

    emptyButtonContent() {
        console.log(this.initial, this.element.cloneNode(true));
        this.innerText = ''
    }

    fillButtonContent() {
        this.innerHTML = this.sanitizer.bypassSecurityTrustHtml(this.initial.innerHTML);
        // this.textContent = this.initial.innerText;
    }
}
