export const ballFountainFading = (color, speed, opacity) => `<svg xmlns:svg="http://www.w3.org/2000/svg" 
    xmlns="http://www.w3.org/2000/svg" 
    xmlns:xlink="http://www.w3.org/1999/xlink" version="1.0" viewBox="0 0 457 60" xml:space="preserve">
    <g>
        <circle fill="${color}" fill-opacity="${opacity}" cx="-31" cy="30" r="30"/>
        <circle fill="${color}" fill-opacity="${0.8 * opacity}" cx="-97" cy="30" r="24"/>
        <circle fill="${color}" fill-opacity="${0.61 * opacity}" cx="-163" cy="30" r="19"/>
        <circle fill="${color}" fill-opacity="${0.22 * opacity}" cx="-229.5" cy="30.5" r="13.5"/>
        <circle fill="${color}" fill-opacity="${0.12 * opacity}" cx="-295" cy="31" r="11"/>
        <animateTransform attributeName="transform" type="translate" values="61 0;127 0;193 0;259 0;325 0;391 0;457 0;523 0;589 0;655 0;721 0;787 0;0 0;0 0;0 0;0 0;0 0;0 0;0 0;0 0;0 0;0 0;0 0;" calcMode="discrete" dur="${1.44 * speed}ms" repeatCount="indefinite"/>
    </g>
    <g>
        <circle fill="${color}" fill-opacity="${opacity}" cx="488" cy="30" r="30"/>
        <circle fill="${color}" fill-opacity="${0.8 * opacity}" cx="554" cy="30" r="24"/>
        <circle fill="${color}" fill-opacity="${0.61 * opacity}" cx="620" cy="30" r="19"/>
        <circle fill="${color}" fill-opacity="${0.22 * opacity}" cx="686.5" cy="30.5" r="13.5"/>
        <circle fill="${color}" fill-opacity="${0.12 * opacity}" cx="753" cy="31" r="11"/>
        <animateTransform attributeName="transform" type="translate" values="0 0;0 0;0 0;0 0;0 0;0 0;0 0;0 0;0 0;0 0;0 0;-61 0;-127 0;-193 0;-259 0;-325 0;-391 0;-457 0;-523 0;-589 0;-655 0;-721 0;-787 0;" calcMode="discrete" dur="${1.44 * speed}ms" repeatCount="indefinite"/>
    </g>
</svg>`