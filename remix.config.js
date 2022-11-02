/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  serverBuildTarget: "netlify",
  server:
    process.env.NETLIFY || process.env.NETLIFY_LOCAL
      ? "./server.js"
      : undefined,
  ignoredRouteFiles: ["**/.*"],
  serverDependenciesToBundle: [
    "swiper",
    "swiper/react",
    "swiper/react/swiper-react.js",
    "ssr-window",
    "ssr-window/ssr-window.esm.js",
    "dom7",
  ],
  // appDirectory: "app",
  // assetsBuildDirectory: "public/build",
  // serverBuildPath: ".netlify/functions-internal/server.js",
  // publicPath: "/build/",
};
