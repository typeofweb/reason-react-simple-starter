module.exports = {
    "moduleFileExtensions": [
        "re",
        "js",
        "ml"
    ],
    "testMatch": [
        "**/__tests__/*.re"
    ],
    "transform": {
        ".(re|ml)": "bs-loader"
    }
}
