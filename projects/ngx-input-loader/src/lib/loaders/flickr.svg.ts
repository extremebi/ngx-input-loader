export const flickr = (color, speed, opacity) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" class="lds-flickr" style="background: none;" opacity="${opacity}">
    <circle ng-attr-cx="{{config.cx1}}" cy="50" ng-attr-fill="{{config.c1}}" ng-attr-r="{{config.radius}}" cx="65.9714" fill="${color}" r="20">
        <animate attributeName="cx" calcMode="linear" values="30;70;30" keyTimes="0;0.5;1" dur="${speed}ms" begin="-${0.5 * speed}ms" repeatCount="indefinite"></animate>
    </circle>
    <circle ng-attr-cx="{{config.cx2}}" cy="50" ng-attr-fill="{{config.c2}}" ng-attr-r="{{config.radius}}" cx="34.0286" fill="${color}" r="20">
        <animate attributeName="cx" calcMode="linear" values="30;70;30" keyTimes="0;0.5;1" dur="${speed}ms" begin="0s" repeatCount="indefinite"></animate>
    </circle>
    <circle ng-attr-cx="{{config.cx1}}" cy="50" ng-attr-fill="{{config.c1}}" ng-attr-r="{{config.radius}}" cx="65.9714" fill="${color}" r="20">
        <animate attributeName="cx" calcMode="linear" values="30;70;30" keyTimes="0;0.5;1" dur="${speed}ms" begin="-${0.5 * speed}ms" repeatCount="indefinite"></animate>
        <animate attributeName="fill-opacity" values="0;0;1;1" calcMode="discrete" keyTimes="0;0.499;0.5;1" ng-attr-dur="{{config.speed}}s" repeatCount="indefinite" dur="${speed}ms"></animate>
    </circle>
</svg>`