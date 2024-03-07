/* eslint-env node */
// source code - https://github.com/keyz/identity-obj-proxy/blob/master/src/index.js
module.exports = new Proxy(
    {},
    {
        get(_target, key) {
            if (key === '__esModule') {
                // if we import as: import {ReactComponent as Icon} from './file.svg';
                return {ReactComponent: 'test-svg-stub'};
            }

            // if we import as: import iconSrc from './file.svg';
            return 'test-svg-stub';
        },
    },
);

export {};
