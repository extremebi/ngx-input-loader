export const ballFadingShrink = (color, speed, opacity) => `<svg xmlns:svg="http://www.w3.org/2000/svg" 
    xmlns="http://www.w3.org/2000/svg" 
    xmlns:xlink="http://www.w3.org/1999/xlink" version="1.0" viewBox="0 0 128 128" xml:space="preserve">
    <g>
        <circle cx="16" cy="64" r="16" fill="${color}" fill-opacity="${opacity}"/>
        <circle cx="16" cy="64" r="14.344" fill="${color}" fill-opacity="${opacity}" transform="rotate(45 64 64)"/>
        <circle cx="16" cy="64" r="12.531" fill="${color}" fill-opacity="${opacity}" transform="rotate(90 64 64)"/>
        <circle cx="16" cy="64" r="10.75" fill="${color}" fill-opacity="${opacity}" transform="rotate(135 64 64)"/>
        <circle cx="16" cy="64" r="10.063" fill="${color}" fill-opacity="${opacity}" transform="rotate(180 64 64)"/>
        <circle cx="16" cy="64" r="8.063" fill="${color}" fill-opacity="${opacity}" transform="rotate(225 64 64)"/>
        <circle cx="16" cy="64" r="6.438" fill="${color}" fill-opacity="${opacity}" transform="rotate(270 64 64)"/>
        <circle cx="16" cy="64" r="5.375" fill="${color}" fill-opacity="${opacity}" transform="rotate(315 64 64)"/>
        <animateTransform attributeName="transform" type="rotate" values="0 64 64;315 64 64;270 64 64;225 64 64;180 64 64;135 64 64;90 64 64;45 64 64" calcMode="discrete" dur="${.72 * speed}ms" repeatCount="indefinite"></animateTransform>
    </g>
</svg>`