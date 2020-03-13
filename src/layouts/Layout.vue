<template>
  <div class="layout">

    <Navigation />

    <main class="main container">
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
  name: "Layout",

  components: {
    Navigation,
  },
};
</script>

<style scoped lang="stylus">
@media $xs-up {
  .layout {

    .main {
      padding-top: 0;
    }
  }
}

@media $xl-up {
  .layout {

    .main {
      padding-top: 70px;
    }
  }
}
</style>
