import { NgModule, ModuleWithProviders, InjectionToken } from '@angular/core';
import { NgxInputLoaderConfig, NGX_INPUT_LOADER_CONFIG } from './ngx-input-loader.interface';
import { NgxInputLoaderDirective } from './ngx-input-loader.directive';

@NgModule({
    declarations: [NgxInputLoaderDirective],
    imports: [],
    exports: [NgxInputLoaderDirective]
})
export class NgxInputLoaderModule {
    static forRoot(config?: NgxInputLoaderConfig): ModuleWithProviders {
        return {
            ngModule: NgxInputLoaderModule,
            providers: [
                {
                    provide: NGX_INPUT_LOADER_CONFIG,
                    useValue: config
                }
            ]
        }
    }
}
