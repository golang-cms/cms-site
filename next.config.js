const {
  PHASE_DEVELOPMENT_SERVER,
  PHASE_PRODUCTION_BUILD,
} = require("next/constants");
module.exports = (phase) => {
  // when started in development mode `next dev` or `npm run dev` regardless of the value of STAGING environmental variable
  const isDev = phase === PHASE_DEVELOPMENT_SERVER;
  // when `next build` or `npm run build` is used
  const isProd =
    phase === PHASE_PRODUCTION_BUILD && process.env.STAGING !== "1";
  // when `next build` or `npm run build` is used
  const isStaging =
    phase === PHASE_PRODUCTION_BUILD && process.env.STAGING === "1";

  console.log(`isDev:${isDev}  isProd:${isProd}   isStaging:${isStaging}`);

  const app = {
    contentApiHost: (() => {
      if (isDev) return "http://localhost:38080";
      if (isProd)
        return "https://cms-api-content-api-cms-zt1983811.cloud.okteto.net";
      if (isStaging) return "http://localhost:38080";
      return "contentApiHost:not (isDev,isProd && !isStaging,isProd && isStaging)";
    })(),
  };

  return {
    env: app,
    async rewrites() {
      return [{ source: "/", destination: "/index" }];
    },
    reactStrictMode: true,
    images: {
      domains: ["smardev.ga"],
      loader: "imgix", // this is a hack until the bug is fixed
    },
  };
};
