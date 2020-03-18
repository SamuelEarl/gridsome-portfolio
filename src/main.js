// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import "~/assets/stylus/main.styl";
import HomeLayout from "~/layouts/HomeLayout.vue";
import Layout from "~/layouts/Layout.vue";
import "vue-material-design-icons/styles.css";

export default function (Vue, { router, head, isClient }) {
  head.link.push({
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Kalam&family=Open+Sans&display=swap"
  }),

  // Min and Max media query ranges:
  Vue.prototype.$xsMin = 0;
  Vue.prototype.$xsMax = 600;
  Vue.prototype.$sMin = 601;
  Vue.prototype.$sMax = 767;
  Vue.prototype.$mMin = 768;
  Vue.prototype.$mMax = 992;
  Vue.prototype.$lMin = 993;
  Vue.prototype.$lMax = 1199;
  Vue.prototype.$xlMin = 1200;

  // Set HomeLayout as a global component
  Vue.component("HomeLayout", HomeLayout);
  Vue.component("Layout", Layout);
};
