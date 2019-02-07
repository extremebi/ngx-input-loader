export const ringBroken = (color, speed, opacity) => `<svg xmlns:svg="http://www.w3.org/2000/svg" 
    xmlns="http://www.w3.org/2000/svg" 
    xmlns:xlink="http://www.w3.org/1999/xlink" version="1.0" viewBox="0 0 128 128" xml:space="preserve">
    <g>
        <path d="M116.3 60.18a52.28 52.28 0 0 0-12.64-30.45l8.06-8.06a63.6 63.6 0 0 1 15.97 38.5h-11.4z" fill="${color}" fill-opacity="${opacity}"/>
        <path d="M116.3 60.18a52.28 52.28 0 0 0-12.64-30.45l8.06-8.06a63.6 63.6 0 0 1 15.97 38.5h-11.4z" fill="${color}" fill-opacity="${0.39 * opacity}" transform="rotate(45, 64, 64)"/>
        <path d="M116.3 60.18a52.28 52.28 0 0 0-12.64-30.45l8.06-8.06a63.6 63.6 0 0 1 15.97 38.5h-11.4z" fill="${color}" fill-opacity="${0.39 * opacity}" transform="rotate(90, 64, 64)"/>
        <path d="M116.3 60.18a52.28 52.28 0 0 0-12.64-30.45l8.06-8.06a63.6 63.6 0 0 1 15.97 38.5h-11.4z" fill="${color}" fill-opacity="${0.39 * opacity}" transform="rotate(135, 64, 64)"/>
        <path d="M116.3 60.18a52.28 52.28 0 0 0-12.64-30.45l8.06-8.06a63.6 63.6 0 0 1 15.97 38.5h-11.4z" fill="${color}" fill-opacity="${0.39 * opacity}" transform="rotate(180, 64, 64)"/>
        <path d="M116.3 60.18a52.28 52.28 0 0 0-12.64-30.45l8.06-8.06a63.6 63.6 0 0 1 15.97 38.5h-11.4z" fill="${color}" fill-opacity="${0.39 * opacity}" transform="rotate(225, 64, 64)"/>
        <path d="M116.3 60.18a52.28 52.28 0 0 0-12.64-30.45l8.06-8.06a63.6 63.6 0 0 1 15.97 38.5h-11.4z" fill="${color}" fill-opacity="${0.39 * opacity}" transform="rotate(270, 64, 64)"/>
        <path d="M116.3 60.18a52.28 52.28 0 0 0-12.64-30.45l8.06-8.06a63.6 63.6 0 0 1 15.97 38.5h-11.4z" fill="${color}" fill-opacity="${0.39 * opacity}" transform="rotate(315, 64, 64)"/>
        <animateTransform attributeName="transform" type="rotate" values="0 64 64;45 64 64;90 64 64;135 64 64;180 64 64;225 64 64;270 64 64;315 64 64" calcMode="discrete" dur="${speed}ms" repeatCount="indefinite"></animateTransform>
    </g>
</svg>`