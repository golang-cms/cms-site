const {
  PHASE_DEVELOPMENT_SERVER,
  PHASE_PRODUCTION_BUILD,
  PHASE_EXPORT,
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
  const isExport = phase === PHASE_EXPORT;
  console.log(`isDev:${isDev} isProd:${isProd} isStaging:${isStaging}`);

  const configByEnv = (config) => {
    if (isDev) return config["dev"];
    if (isProd) return config["prod"];
    if (isStaging) return config["staging"];
    return "config:not (isDev,isProd && !isStaging,isProd && isStaging)";
  };

  const app = {
    contentApiHost: configByEnv({
      dev: "http://localhost:38080",
      staging: "http://localhost:38080",
      prod: "https://cms-api-content-api-cms-zt1983811.cloud.okteto.net",
    }),
    reCaptchaKey: configByEnv({
      dev: "6LeAFwwcAAAAAAVVU5aGc1smV0_8V1iFZJXb_hcK",
      staging: "",
      prod: "6LfBTAgcAAAAAIoz9mmHs0onei9Q7rJd5r3Yz6mt",
    }),
  };

  return {
    env: app,
    async rewrites() {
      return [{ source: "/", destination: "/home" }];
    },
    // async redirects() {
    //   return [
    //     {
    //       source: "/",
    //       destination: "/home",
    //       permanent: true,
    //     },
    //   ];
    // },
    exportPathMap: async function (
      defaultPathMap,
      { dev, dir, outDir, distDir, buildId }
    ) {
      if (dev) {
        return defaultPathMap;
      }
      return {
        ...defaultPathMap,
        "/": { page: "/placeholder" },
//        "/index": { page: "/placeholder" },
//      "/": { page: "/index" },
      };
      //      return {
      //        // "/": { page: "/placeholder" },
      //        "/": { page: "/index" },
      //        "/contact-us": { page: "/contact-us" },
      //      };
    },
    reactStrictMode: true,
    images: {
      // domains: ["smardev.ga"],
      loader: "imgix", // this is a hack until the bug is fixed
      path: "https://www.smartcodee.com",
    },
//    i18n: {
//      locales: ["en", "fr", "zh"],
//      defaultLocale: "en",
//    },
//    domains: [
//      {
//        domain: "smartcodee.com",
//        defaultLocale: "en",
//      },
//      {
//        domain: "cn.smartcodee.com",
//        defaultLocale: "zh",
//      },
//    ],
  };
};
