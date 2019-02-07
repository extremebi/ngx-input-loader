export const eclipse = (color, speed, opacity) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" class="lds-eclipse" style="background: none;" opacity="${opacity}">
    <path ng-attr-d="{{config.pathCmd}}" ng-attr-fill="{{config.color}}" stroke="none" d="M10 50A40 40 0 0 0 90 50A40 45 0 0 1 10 50" fill="${color}" transform="rotate(53.5946 50 52.5)">
        <animateTransform attributeName="transform" type="rotate" calcMode="linear" values="0 50 52.5;360 50 52.5" keyTimes="0;1" dur="${speed}ms" begin="0s" repeatCount="indefinite"></animateTransform>
    </path>
</svg>`