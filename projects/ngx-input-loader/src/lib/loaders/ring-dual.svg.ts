export const ringDual = (color, speed, opacity) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" class="lds-dual-ring" style="background: none;" opacity="${opacity}">
    <circle cx="50" cy="50" ng-attr-r="{{config.radius}}" ng-attr-stroke-width="{{config.width}}" ng-attr-stroke="{{config.stroke}}" ng-attr-stroke-dasharray="{{config.dasharray}}" fill="none" stroke-linecap="round" r="40" stroke-width="5" stroke="${color}" stroke-dasharray="62.83185307179586 62.83185307179586" transform="rotate(95.953 50 50)">
        <animateTransform attributeName="transform" type="rotate" calcMode="linear" values="0 50 50;360 50 50" keyTimes="0;1" dur="${speed}ms" begin="0s" repeatCount="indefinite"></animateTransform>
    </circle>
</svg>`