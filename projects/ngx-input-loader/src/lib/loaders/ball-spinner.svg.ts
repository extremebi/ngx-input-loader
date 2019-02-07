export const ballSpinner = (color, speed, opacity) => `<svg xmlns:svg="http://www.w3.org/2000/svg" 
    xmlns="http://www.w3.org/2000/svg" 
    xmlns:xlink="http://www.w3.org/1999/xlink" version="1.0" viewBox="0 0 128 128" xml:space="preserve">
    <g>
        <circle cx="108.5" cy="89.75" r="12.5" fill="${color}" fill-opacity="${opacity}"/>
        <animateTransform attributeName="transform" type="rotate" from="0 64 64" to="360 64 64" dur="${speed}ms" repeatCount="indefinite"></animateTransform>
    </g>
</svg>`