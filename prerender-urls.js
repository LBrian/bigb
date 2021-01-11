module.exports = function () {
  return [
    {
      url: '/',
      icon: process.env.REACT_APP_ICON,
      manifest: process.env.REACT_APP_MANIFEST,
      preconnect: process.env.REACT_APP_PRECONNECT,
      appleTouchIcon: process.env.REACT_APP_APPLE_TOUCH_ICON,
      // Open Graph meta
      ogTitle: process.env.REACT_APP_OG_TITLE,
      ogUrl: process.env.REACT_APP_OG_URL,
      ogImage: process.env.REACT_APP_OG_IMAGE,
      ogDescription: process.env.REACT_APP_OG_DESCRIPTION
    }
  ];
};
