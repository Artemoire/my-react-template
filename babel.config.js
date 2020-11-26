module.exports = {
    presets: [
        [
            "@babel/preset-env",
            {
                modules: false, // dunno what this does tbh
                "targets": {
                    "node": "current"
                }
            }
        ],
        "@babel/preset-react"
    ],
    plugins: [
        "@babel/plugin-transform-runtime",
        "@babel/plugin-proposal-class-properties"
    ],
};