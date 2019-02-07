export const clock = (color, speed, opacity) => `<svg xmlns:svg="http://www.w3.org/2000/svg" 
    xmlns="http://www.w3.org/2000/svg" 
    xmlns:xlink="http://www.w3.org/1999/xlink" version="1.0" viewBox="0 0 128 128" xml:space="preserve">
    <g>
        <path d="M63.88 0A63.88 63.88 0 1 1 0 63.88 63.88 63.88 0 0 1 63.88 0zm0 11.88a52 52 0 1 1-52 52 52 52 0 0 1 52-52zm0 46.2a5.8 5.8 0 1 1-5.8 5.8 5.8 5.8 0 0 1 5.8-5.8z" fill-rule="evenodd" fill="${color}" fill-opacity="${opacity}"/>
        <path d="M58.25 5h11.3v59h-11.3V5z" fill="${color}" fill-opacity="${opacity}"/>
        <animateTransform attributeName="transform" type="rotate" from="0 64 64" to="360 64 64" dur="${1.62 * speed}ms" repeatCount="indefinite"></animateTransform>
    </g>
</svg>`