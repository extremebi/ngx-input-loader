export const ballBounce = (color, speed, opacity) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" class="lds-ball" style="background: none;" opacity="${opacity}">
    <circle cx="50" ng-attr-cy="{{config.cy}}" ng-attr-r="{{config.radius}}" ng-attr-fill="{{config.color}}" cy="22.0442" r="15" fill="${color}">
        <animate attributeName="cy" calcMode="spline" values="20;80;20" keyTimes="0;0.5;1" dur="${speed}ms" keySplines="0.45 0 0.9 0.55;0 0.45 0.55 0.9" begin="0s" repeatCount="indefinite"></animate>
    </circle>
</svg>`