export const typing = (color, speed, opacity) => `<svg xmlns:svg="http://www.w3.org/2000/svg" 
    xmlns="http://www.w3.org/2000/svg" 
    xmlns:xlink="http://www.w3.org/1999/xlink" version="1.0" viewBox="0 0 128 32" xml:space="preserve">
    <circle fill="${color}" fill-opacity="${opacity}" cx="0" cy="0" r="11" transform="translate(16 16)">
        <animateTransform attributeName="transform" type="scale" additive="sum" values="1;1.42;1;1;1;1;1;1;1;1" dur="${speed}ms" repeatCount="indefinite"></animateTransform>
    </circle>
    <circle fill="${color}" fill-opacity="${opacity}" cx="0" cy="0" r="11" transform="translate(64 16)">
        <animateTransform attributeName="transform" type="scale" additive="sum" values="1;1;1;1;1.42;1;1;1;1;1" dur="${speed}ms" repeatCount="indefinite"></animateTransform>
    </circle>
    <circle fill="${color}" fill-opacity="${opacity}" cx="0" cy="0" r="11" transform="translate(112 16)">
        <animateTransform attributeName="transform" type="scale" additive="sum" values="1;1;1;1;1;1;1;1.42;1;1" dur="${speed}ms" repeatCount="indefinite"></animateTransform>
    </circle>
</svg>`