import { env } from "process";
import { build } from "esbuild";
import { copy } from "esbuild-plugin-copy";
import { sassPlugin } from "esbuild-sass-plugin";

const PROD = env.NODE_ENV === "prod";

(async () => {
  const res = await build({
    entryPoints: ["assets/js/app.ts", "assets/styles/app.scss"],
    bundle: true,
    minify: PROD,
    sourcemap: PROD,
    format: "iife",
    treeShaking: PROD,
    watch: !PROD,
    target: ["chrome58", "firefox57", "safari11", "edge16"],
    outdir: "./public/",
    loader: {
      ".gif": "file",
      ".png": "file",
      ".ttf": "dataurl",
    },
    plugins: [
      copy({
        assets: [
          {
            from: ["./assets/images/**/*"],
            to: ["./images"],
          },
        ],
      }),
      sassPlugin(),
    ],
  });
})();
