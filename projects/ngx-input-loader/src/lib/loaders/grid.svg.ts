export const grid = (color, speed, opacity) => `<svg viewBox="0 0 105 105" 
    xmlns="http://www.w3.org/2000/svg" fill="${color}" opacity="${opacity}">
    <circle cx="12.5" cy="12.5" r="12.5">
        <animate attributeName="fill-opacity" begin="0s" dur="${speed}ms" values="1;.2;1" calcMode="linear" repeatCount="indefinite" />
    </circle>
    <circle cx="12.5" cy="52.5" r="12.5" fill-opacity="${.5 * opacity}">
        <animate attributeName="fill-opacity" begin="${0.1 * speed}ms" dur="${speed}ms" values="1;.2;1" calcMode="linear" repeatCount="indefinite" />
    </circle>
    <circle cx="52.5" cy="12.5" r="12.5">
        <animate attributeName="fill-opacity" begin="${0.3 * speed}ms" dur="${speed}ms" values="1;.2;1" calcMode="linear" repeatCount="indefinite" />
    </circle>
    <circle cx="52.5" cy="52.5" r="12.5">
        <animate attributeName="fill-opacity" begin="${0.6 * speed}ms" dur="${speed}ms" values="1;.2;1" calcMode="linear" repeatCount="indefinite" />
    </circle>
    <circle cx="92.5" cy="12.5" r="12.5">
        <animate attributeName="fill-opacity" begin="${0.8 * speed}ms" dur="${speed}ms" values="1;.2;1" calcMode="linear" repeatCount="indefinite" />
    </circle>
    <circle cx="92.5" cy="52.5" r="12.5">
        <animate attributeName="fill-opacity" begin="${0.4 * speed}ms" dur="${speed}ms" values="1;.2;1" calcMode="linear" repeatCount="indefinite" />
    </circle>
    <circle cx="12.5" cy="92.5" r="12.5">
        <animate attributeName="fill-opacity" begin="${0.7 * speed}ms" dur="${speed}ms" values="1;.2;1" calcMode="linear" repeatCount="indefinite" />
    </circle>
    <circle cx="52.5" cy="92.5" r="12.5">
        <animate attributeName="fill-opacity" begin="${0.5 * speed}ms" dur="${speed}ms" values="1;.2;1" calcMode="linear" repeatCount="indefinite" />
    </circle>
    <circle cx="92.5" cy="92.5" r="12.5">
        <animate attributeName="fill-opacity" begin="${0.2 * speed}ms" dur="${speed}ms" values="1;.2;1" calcMode="linear" repeatCount="indefinite" />
    </circle>
</svg>
`