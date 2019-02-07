export const rippleInbound = (color, speed, opacity) => `<svg viewBox="0 0 45 45" 
    xmlns="http://www.w3.org/2000/svg" stroke="${color}" opacity="${opacity}">
    <g fill="none" fill-rule="evenodd" transform="translate(1 1)" stroke-width="2">
        <circle cx="22" cy="22" r="6" stroke-opacity="0">
            <animate attributeName="r" begin="${speed}ms" dur="${2 * speed}ms" values="6;22" calcMode="linear" repeatCount="indefinite" />
            <animate attributeName="stroke-opacity" begin="${speed}ms" dur="${2 * speed}ms" values="1;0" calcMode="linear" repeatCount="indefinite" />
            <animate attributeName="stroke-width" begin="${speed}ms" dur="${2 * speed}ms" values="2;0" calcMode="linear" repeatCount="indefinite" />
        </circle>
        <circle cx="22" cy="22" r="6" stroke-opacity="0">
            <animate attributeName="r" begin="${2 * speed}ms" dur="${2 * speed}ms" values="6;22" calcMode="linear" repeatCount="indefinite" />
            <animate attributeName="stroke-opacity" begin="${2 * speed}ms" dur="${2 * speed}ms" values="1;0" calcMode="linear" repeatCount="indefinite" />
            <animate attributeName="stroke-width" begin="${2 * speed}ms" dur="${2 * speed}ms" values="2;0" calcMode="linear" repeatCount="indefinite" />
        </circle>
        <circle cx="22" cy="22" r="8">
            <animate attributeName="r" begin="0s" dur="${speed}ms" values="6;1;2;3;4;5;6" calcMode="linear" repeatCount="indefinite" />
        </circle>
    </g>
</svg>`