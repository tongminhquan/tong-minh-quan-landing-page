module.exports = {
  apps: [
    {
      name: "maminhquan-landing-page",
      script: ".next/standalone/server.js",
      cwd: "/var/www/maminhquan",
      instances: 1,
      exec_mode: "fork",
      env: {
        NODE_ENV: "production",
        PORT: 3002,
        HOSTNAME: "0.0.0.0",
        NEXT_PUBLIC_SITE_URL: "https://xn--maminhqun-i2a.vn",
      },
    },
  ],
};
