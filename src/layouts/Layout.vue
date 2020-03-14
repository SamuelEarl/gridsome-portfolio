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
    background-color: $cyan;
    min-height: 100vh;

    .main {
      padding-top: 0;
      padding-bottom: 20px;
    }
  }
}

@media $xl-up {
  .layout {

    .main {
      padding-top: 70px;
      padding-bottom: 30px;
    }
  }
}
</style>
