import { InjectionToken } from "@angular/core";

export interface NgxInputLoaderConfig {
    loader?: string,
    color?: string,
    padding?: string,
    height?: number,
    background?: string,
    speed?: number,
    position?: string,
    opacity?: number,
    button?: boolean
}

export const NGX_INPUT_LOADER_CONFIG = new InjectionToken<NgxInputLoaderConfig>('NGX_INPUT_LOADER_CONFIG');