import path from "path";

const __dirname = path.resolve();

export default {
    entry: "./script.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist"),
    },
};
