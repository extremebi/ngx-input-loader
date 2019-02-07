export const barsTrespassing = (color, speed, opacity) => `<svg xmlns:svg="http://www.w3.org/2000/svg" 
    xmlns="http://www.w3.org/2000/svg" 
    xmlns:xlink="http://www.w3.org/1999/xlink" version="1.0" viewBox="0 0 128 16" xml:space="preserve">
    <g>
        <path d="M-22.949-5.576l4.525,4.525L-41.051,21.576l-4.525-4.525Zm19.2,0L0.776-1.051-21.851,21.576l-4.526-4.525Zm19.2,0,4.525,4.525L-2.651,21.576l-4.525-4.525Zm19.2,0,4.525,4.525L16.549,21.576l-4.525-4.525Zm19.2,0,4.525,4.525L35.749,21.576l-4.526-4.525Zm38.4,0,4.525,4.525L74.149,21.576l-4.525-4.525Zm-19.2,0,4.525,4.525L54.949,21.576l-4.526-4.525Zm38.4,0,4.525,4.525L93.349,21.576l-4.526-4.525Zm19.2,0,4.525,4.525L112.549,21.576l-4.525-4.525Zm19.2,0,4.525,4.525L131.749,21.576l-4.525-4.525Z" fill="${color}" fill-opacity="${opacity}"/>
        <animateTransform attributeName="transform" type="translate" from="0 0" to="-19 0" dur="${speed}ms" repeatCount="indefinite"/>
    </g>
</svg>
`