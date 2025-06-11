// babel.config.cjs
module.exports = function (api) {
    const isTest = api.env("test");

    if (isTest) {
        return {
            presets: ["@babel/preset-env", "@babel/preset-react"]
        };
    }

    // Let Parcel use its built-in transpilation
    return {};
};
