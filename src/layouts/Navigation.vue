<template>
  <div class="navigation">

    <div class="mobile-menu-bar">
      <div>
        <button
          class="mobile-menu-btn"
          title="Open Menu"
          @click="showMobileNav = !showMobileNav"
        >
          <MenuIcon title="Open Menu" />
        </button>
      </div>
    </div>

    <div class="navbar-wrapper" v-if="showNav">
      <nav class="navbar container">
        <div class="site-name-wrapper">
          <g-link class="site-name" to="/" exact>{{ $static.metadata.siteName }}</g-link>
        </div>
        <div class="navlink-wrapper">
          <g-link class="navlink" to="/recent-projects" exact>Recent Projects</g-link>
          <g-link class="navlink" to="/code-samples" exact>Code Samples</g-link>
          <g-link class="navlink" to="/contact-me" exact>Contact Me</g-link>
          <!-- <g-link class="navlink" to="/mini-courses" exact>Mini Courses</g-link> -->
        </div>
      </nav>
    </div>

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
import MenuIcon from "vue-material-design-icons/Menu.vue";

export default {
  name: "Navigation",

  components: {
    MenuIcon,
  },

  data() {
    return {
      showMobileNav: false,
    };
  },

  computed: {
    showNav() {
      const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

      // If the viewport width is xlMin or larger, then show the nav bar.
      if (width >= this.$xlMin) {
        return true;
      }
      // If the viewport width is less than xlMin, then return the value from this.showMobileNav.
      else {
        return this.showMobileNav;
      }
    }
  }
};
</script>

<style scoped lang="stylus">
@media $xs-up {
  .navigation {

    .mobile-menu-bar {
      position: sticky;
      top: 0;
      display: flex;
      align-items: center;
      width: 100%;
      height: 50px;
      padding: 10px;
      background-color: $primary;

      .mobile-menu-btn {
        color: white;
        font-size: 2rem;
      }
    }

    .navbar-wrapper {
      position: fixed;
      top: 50px;
      width: 100%;
      padding-bottom: 15px;
      background-color: $primary;

      .navbar {
        display: flex;
        flex-direction: column;
        align-items: center;

        .site-name-wrapper {
          padding: 5px 0;

          .site-name {
            font-size: 1.6rem;
            color: lighten($primary, 65%);
          }
        }

        .navlink-wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;

          .navlink {
            padding: 7px 0;
            font-size: 1.25rem;
            color: lighten($primary, 65%);
          }
        }
      }
    }
  }
}

@media $xl-up {
  .navigation {

    .mobile-menu-bar {
      display: none;
    }

    .navbar-wrapper {
      position: fixed;
      top: 0;
      // width: 100%;
      padding-bottom: 0;
      // background-color: $primary;

      .navbar {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        height: 60px;

        .site-name-wrapper {
          padding: 0;

          .site-name {
            font-size: 1.6rem;
            // color: lighten($primary, 75%);

            &.active {
              color: white;
            }
          }
        }

        .navlink-wrapper {
          // display: flex;
          flex-direction: row;
          align-items: center;

          .navlink {
            margin-left: 25px;
            // padding: 7px 0;
            // font-size: 1.25rem;
            // color: white;

            &.active {
              color: white;
            }
          }
        }
      }
    }
  }
}
</style>
