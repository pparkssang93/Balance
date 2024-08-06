import path from "path";

export default {
    entry: "script.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist"),
    },
};
