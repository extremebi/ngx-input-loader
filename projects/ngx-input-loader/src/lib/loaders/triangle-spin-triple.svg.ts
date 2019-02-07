export const triangleSpinTriple = (color, speed, opacity) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" class="lds-triangles" style="background: none;" opacity="${opacity}">
    <g transform="translate(50,42)">
        <g transform="scale(0.8)">
            <g transform="translate(-50,-50)">
                <polygon ng-attr-fill="{{config.c1}}" points="72.5,50 50,11 27.5,50 50,50" fill="${color}" transform="rotate(101.91 50 38.5)">
                    <animateTransform attributeName="transform" type="rotate" calcMode="linear" values="0 50 38.5;360 50 38.5" keyTimes="0;1" dur="${speed}ms" begin="0s" repeatCount="indefinite"></animateTransform>
                </polygon>
                <polygon ng-attr-fill="{{config.c2}}" points="5,89 50,89 27.5,50" fill="${color}" transform="rotate(101.91 27.5 77.5)">
                    <animateTransform attributeName="transform" type="rotate" calcMode="linear" values="0 27.5 77.5;360 27.5 77.5" keyTimes="0;1" dur="${speed}ms" begin="0s" repeatCount="indefinite"></animateTransform>
                </polygon>
                <polygon ng-attr-fill="{{config.c3}}" points="72.5,50 50,89 95,89" fill="${color}" transform="rotate(101.91 72.3585 77.5)">
                    <animateTransform attributeName="transform" type="rotate" calcMode="linear" values="0 72.5 77.5;360 72 77.5" keyTimes="0;1" dur="${speed}ms" begin="0s" repeatCount="indefinite"></animateTransform>
                </polygon>
            </g>
        </g>
    </g>
</svg>`