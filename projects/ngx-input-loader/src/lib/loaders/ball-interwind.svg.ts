export const ballInterwind = (color, speed, opacity) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" class="lds-ball2" style="background: none;" opacity="${opacity}">
    <g ng-attr-transform="translate(0,{{config.dy}})" transform="translate(0,-7.5)">
        <circle cx="50" ng-attr-cy="{{config.cy}}" r="11.1783" ng-attr-fill="{{config.c1}}" cy="41" fill="${color}" transform="rotate(233.904 50 50)">
            <animateTransform attributeName="transform" type="rotate" calcMode="linear" values="0 50 50;360 50 50" keyTimes="0;1" dur="${speed}ms" begin="0s" repeatCount="indefinite"></animateTransform>
            <animate attributeName="r" calcMode="spline" values="0;15;0" keyTimes="0;0.5;1" dur="${speed}ms" keySplines="0.2 0 0.8 1;0.2 0 0.8 1" begin="0s" repeatCount="indefinite"></animate>
        </circle>
        <circle cx="50" ng-attr-cy="{{config.cy}}" r="3.82173" ng-attr-fill="{{config.c2}}" cy="41" fill="${color}" transform="rotate(413.904 50 50)">
            <animateTransform attributeName="transform" type="rotate" calcMode="linear" values="180 50 50;540 50 50" keyTimes="0;1" dur="${speed}ms" begin="0s" repeatCount="indefinite"></animateTransform>
            <animate attributeName="r" calcMode="spline" values="15;0;15" keyTimes="0;0.5;1" dur="${speed}ms" keySplines="0.2 0 0.8 1;0.2 0 0.8 1" begin="0s" repeatCount="indefinite"></animate>
        </circle>
    </g>
</svg>`