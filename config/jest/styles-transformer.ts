/* eslint-env node */
// source code - https://github.com/keyz/identity-obj-proxy/blob/master/src/index.js
module.exports = new Proxy(
    {},
    {
        get(_target, key) {
            return key === '__esModule' ? true : key; // https://github.com/keyz/identity-obj-proxy/issues/8
        },
    },
);

export {};
