export const bars = (color, speed, opacity) => `<svg viewBox="0 0 135 140" 
    xmlns="http://www.w3.org/2000/svg" fill="${color}" opacity="${opacity}">
    <rect y="10" width="15" height="120" rx="6">
        <animate attributeName="height" begin="${0.5 * speed}ms" dur="${speed}ms" values="120;110;100;90;80;70;60;50;40;140;120" calcMode="linear" repeatCount="indefinite" />
        <animate attributeName="y" begin="${0.5 * speed}ms" dur="${speed}ms" values="10;15;20;25;30;35;40;45;50;0;10" calcMode="linear" repeatCount="indefinite" />
    </rect>
    <rect x="30" y="10" width="15" height="120" rx="6">
        <animate attributeName="height" begin="${0.25 * speed}ms" dur="${speed}ms" values="120;110;100;90;80;70;60;50;40;140;120" calcMode="linear" repeatCount="indefinite" />
        <animate attributeName="y" begin="${0.25 * speed}ms" dur="${speed}ms" values="10;15;20;25;30;35;40;45;50;0;10" calcMode="linear" repeatCount="indefinite" />
    </rect>
    <rect x="60" width="15" height="140" rx="6">
        <animate attributeName="height" begin="0s" dur="${speed}ms" values="120;110;100;90;80;70;60;50;40;140;120" calcMode="linear" repeatCount="indefinite" />
        <animate attributeName="y" begin="0s" dur="${speed}ms" values="10;15;20;25;30;35;40;45;50;0;10" calcMode="linear" repeatCount="indefinite" />
    </rect>
    <rect x="90" y="10" width="15" height="120" rx="6">
        <animate attributeName="height" begin="${0.25 * speed}ms" dur="${speed}ms" values="120;110;100;90;80;70;60;50;40;140;120" calcMode="linear" repeatCount="indefinite" />
        <animate attributeName="y" begin="${0.25 * speed}ms" dur="${speed}ms" values="10;15;20;25;30;35;40;45;50;0;10" calcMode="linear" repeatCount="indefinite" />
    </rect>
    <rect x="120" y="10" width="15" height="120" rx="6">
        <animate attributeName="height" begin="${0.5 * speed}ms" dur="${speed}ms" values="120;110;100;90;80;70;60;50;40;140;120" calcMode="linear" repeatCount="indefinite" />
        <animate attributeName="y" begin="${0.5 * speed}ms" dur="${speed}ms" values="10;15;20;25;30;35;40;45;50;0;10" calcMode="linear" repeatCount="indefinite" />
    </rect>
</svg>
`