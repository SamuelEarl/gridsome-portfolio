<template>
  <div class="home-layout">

    <Navigation />

    <main class="main">
      <slot/>
    </main>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import Navigation from "./Navigation.vue";

export default {
  name: "HomeLayout",

  components: {
    Navigation,
  },
};
</script>

<style lang="stylus" scoped>
@media $xs-up {
  .home-layout {

    .main {
      padding-top: 20px;
    }
  }
}

@media $xl-up {
  .home-layout {

    .main {
      padding-top: 0;
    }
  }
}
</style>
