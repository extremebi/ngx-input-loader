import { Directive, OnChanges, AfterViewInit, SimpleChanges, ElementRef, Renderer2, Input } from '@angular/core';

@Directive({
    selector: '[ngxInputLoader]'
})
export class NgxInputLoaderDirective implements OnChanges, AfterViewInit {
    @Input() ngxInputLoader: Boolean;
    private inserted: Boolean = false;

    constructor(private el: ElementRef, private renderer: Renderer2) {
    }

    ngOnChanges(changes: SimpleChanges) {
        console.log('OnChanges');
        this.setLoader();
    }

    ngAfterViewInit() {
        console.log('AfterViewInit');
        this.setLoader();
    }

    setLoader() {
        let nextSibling = this.el.nativeElement.nextSibling;
        let parent = this.el.nativeElement.parentElement;

        if (!this.inserted && this.ngxInputLoader) {
            let spinner = this.renderer.createElement('img');
            let height = this.el.nativeElement.offsetHeight;
            console.log(height);

            this.renderer.setAttribute(spinner, 'src', 'data:image/svg+xml;utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" class="lds-rolling" style="background: none;"><circle cx="50" cy="50" fill="none" ng-attr-stroke="{{config.color}}" ng-attr-stroke-width="{{config.width}}" ng-attr-r="{{config.radius}}" ng-attr-stroke-dasharray="{{config.dasharray}}" stroke="#1d0e0b" stroke-width="10" r="35" stroke-dasharray="164.93361431346415 56.97787143782138" transform="rotate(281.902 50 50)"><animateTransform attributeName="transform" type="rotate" calcMode="linear" values="0 50 50;360 50 50" keyTimes="0;1" dur="1s" begin="0s" repeatCount="indefinite"></animateTransform></circle></svg>')
            this.renderer.setStyle(spinner, 'position', 'relative');
            this.renderer.setStyle(spinner, 'left', `-${height}px`);
            this.renderer.setStyle(spinner, 'top', `${height * 0.2}px`)
            this.renderer.setStyle(spinner, 'height', `${height * 0.8}px`);
            this.renderer.addClass(spinner, 'ngx-input-loader');
            // adding after the element in DOM
            if (nextSibling) {
                this.renderer.insertBefore(parent, spinner, nextSibling);
            } else {
                this.renderer.appendChild(parent, spinner);
            }
            this.inserted = true;
            console.log('CLICK ON THE INPUT TO REMOVE SPINNER');
        } else if (this.inserted && !this.ngxInputLoader) {
            this.renderer.removeChild(parent, parent.querySelector('.ngx-input-loader'));
            this.inserted = false;
            console.log('CLICK ON THE INPUT TO ADD SPINNER');
        }
    }
}
