export const dropsFading = (color, speed, opacity) => `<svg xmlns:svg="http://www.w3.org/2000/svg" 
    xmlns="http://www.w3.org/2000/svg" 
    xmlns:xlink="http://www.w3.org/1999/xlink" version="1.0" viewBox="0 0 128 128" xml:space="preserve">
    <g>
        <path d="M64 0a8 8 0 0 1 8 8c0 4.42-8 25.5-8 25.5S56 12.42 56 8a8 8 0 0 1 8-8z" fill="${color}" fill-opacity="${opacity}"/>
        <path d="M64 0a8 8 0 0 1 8 8c0 4.42-8 25.5-8 25.5S56 12.42 56 8a8 8 0 0 1 8-8z" fill="${color}" fill-opacity="${0.03 * opacity}" transform="rotate(30 64 64)"/>
        <path d="M64 0a8 8 0 0 1 8 8c0 4.42-8 25.5-8 25.5S56 12.42 56 8a8 8 0 0 1 8-8z" fill="${color}" fill-opacity="${0.09 * opacity}" transform="rotate(60 64 64)"/>
        <path d="M64 0a8 8 0 0 1 8 8c0 4.42-8 25.5-8 25.5S56 12.42 56 8a8 8 0 0 1 8-8z" fill="${color}" fill-opacity="${0.17 * opacity}" transform="rotate(90 64 64)"/>
        <path d="M64 0a8 8 0 0 1 8 8c0 4.42-8 25.5-8 25.5S56 12.42 56 8a8 8 0 0 1 8-8z" fill="${color}" fill-opacity="${0.25 * opacity}" transform="rotate(120 64 64)"/>
        <path d="M64 0a8 8 0 0 1 8 8c0 4.42-8 25.5-8 25.5S56 12.42 56 8a8 8 0 0 1 8-8z" fill="${color}" fill-opacity="${0.35 * opacity}" transform="rotate(150 64 64)"/>
        <path d="M64 0a8 8 0 0 1 8 8c0 4.42-8 25.5-8 25.5S56 12.42 56 8a8 8 0 0 1 8-8z" fill="${color}" fill-opacity="${0.44 * opacity}" transform="rotate(180 64 64)"/>
        <path d="M64 0a8 8 0 0 1 8 8c0 4.42-8 25.5-8 25.5S56 12.42 56 8a8 8 0 0 1 8-8z" fill="${color}" fill-opacity="${0.55 * opacity}" transform="rotate(210 64 64)"/>
        <path d="M64 0a8 8 0 0 1 8 8c0 4.42-8 25.5-8 25.5S56 12.42 56 8a8 8 0 0 1 8-8z" fill="${color}" fill-opacity="${0.65 * opacity}" transform="rotate(240 64 64)"/>
        <path d="M64 0a8 8 0 0 1 8 8c0 4.42-8 25.5-8 25.5S56 12.42 56 8a8 8 0 0 1 8-8z" fill="${color}" fill-opacity="${0.75 * opacity}" transform="rotate(270 64 64)"/>
        <path d="M64 0a8 8 0 0 1 8 8c0 4.42-8 25.5-8 25.5S56 12.42 56 8a8 8 0 0 1 8-8z" fill="${color}" fill-opacity="${0.84 * opacity}" transform="rotate(300 64 64)"/>
        <path d="M64 0a8 8 0 0 1 8 8c0 4.42-8 25.5-8 25.5S56 12.42 56 8a8 8 0 0 1 8-8z" fill="${color}" fill-opacity="${0.92 * opacity}" transform="rotate(330 64 64)"/>
        <animateTransform attributeName="transform" type="rotate" values="0 64 64;30 64 64;60 64 64;90 64 64;120 64 64;150 64 64;180 64 64;210 64 64;240 64 64;270 64 64;300 64 64;330 64 64" calcMode="discrete" dur="${speed}ms" repeatCount="indefinite"></animateTransform>
    </g>
</svg>`