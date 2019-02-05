import { NgModule, ModuleWithProviders, InjectionToken } from '@angular/core';
import { NgxInputLoaderService } from './ngx-input-loader.service';
import { CustomConfig } from './custom-config.model';
import { NgxInputLoaderDirective } from './ngx-input-loader.directive';

const NgxInputLoaderConfigService = new InjectionToken<CustomConfig>('NgxInputLoaderConfig');

@NgModule({
    declarations: [NgxInputLoaderDirective],
    imports: [],
    exports: [NgxInputLoaderDirective]
})
export class NgxInputLoaderModule {
    static forRoot(config: CustomConfig): ModuleWithProviders {
        console.log(config);
        return {
            ngModule: NgxInputLoaderModule,
            providers: [
                NgxInputLoaderService,
                {
                    provide: NgxInputLoaderConfigService,
                    useValue: config
                }
            ]
        }
    }
}
