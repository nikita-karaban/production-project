declare module '*.scss' {
    const classes: {[className: string]: string};

    export = classes;
}

declare module '*.jpg';
declare module '*.jpeg';
declare module '*.png' {
    const content: string;

    export default content;
}

declare module '*.svg' {
    import React from 'react';

    const SVG: React.VFC<React.SVGProps<SVGSVGElement>>;

    export default SVG;
}

// eslint-disable-next-line no-unused-vars
declare const __IS_DEV__: boolean;
