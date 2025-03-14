module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://huellaid.com",
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
  },
  changefreq: "daily",
  priority: 0.7,
  sitemapSize: 7000,
  exclude: ["/api/*", "/admin/*"],
};
