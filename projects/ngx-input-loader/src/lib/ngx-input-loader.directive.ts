import { Directive, OnChanges, AfterViewInit, SimpleChanges, ElementRef, Renderer2, Input } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Directive({
    selector: '[ngxInputLoader]'
})
export class NgxInputLoaderDirective implements OnChanges, AfterViewInit {
    @Input() ngxInputLoader: Boolean;
    private inserted: Boolean = false;

    constructor(private el: ElementRef, private renderer: Renderer2, private spinner: NgxSpinnerService) {
    }

    ngOnChanges(changes: SimpleChanges) {
        console.log('changes', changes);
        this.setLoader();
    }

    ngAfterViewInit() {
        console.log('dfdfchanges');
        this.setLoader();
    }

    setLoader() {
        if (!this.inserted) {
            console.log('ngxInputLoader', this.ngxInputLoader);
            console.log(this.el);
            console.log(this.el.nativeElement);
            let parent = this.el.nativeElement.parentElement
            console.log(parent);
            let spinner = this.renderer.createElement('ngx-spinner');
            this.setAttributes(spinner)
            this.renderer.insertBefore(parent, spinner, this.el.nativeElement);
            this.inserted = true;
            if (this.ngxInputLoader) this.spinner.show()
            else this.spinner.hide();
        }
    }

    setAttributes(spinner) {
        this.renderer.setAttribute(spinner, 'bdColor', '');
    }
}
