export const snakeChasing = (color, speed, opacity) => `<svg xmlns:svg="http://www.w3.org/2000/svg" 
    xmlns="http://www.w3.org/2000/svg" 
    xmlns:xlink="http://www.w3.org/1999/xlink" version="1.0" viewBox="0 0 128 128" xml:space="preserve">
    <g>
        <path d="M10.96 28.9C12.46 26.14 28.4.5 63.76.24c37.1-.26 53.48 29.12 54.03 30.38 2.44 5.63 1.4 12.86-3.77 15.44-5.93 2.96-12.13 1.18-15.44-3.5-6.83-9.6-7.58-21.7-25.15-28.87-38.08-15.57-64.03 18-62.5 15.2zM117 99.06c-1.48 2.74-17.42 28.4-52.78 28.63-37.1.25-53.5-29.1-54.04-30.4-2.48-5.6-1.43-12.82 3.72-15.4 5.94-2.96 12.15-1.17 15.45 3.5 6.84 9.62 7.58 21.7 25.16 28.88 38.1 15.54 64.06-18 62.5-15.2z" fill="${color}" fill-opacity="${opacity}"/>
        <animateTransform attributeName="transform" type="rotate" from="0 64 64" to="180 64 64" dur="${0.5 * speed}ms" repeatCount="indefinite"></animateTransform>
    </g>
</svg>`