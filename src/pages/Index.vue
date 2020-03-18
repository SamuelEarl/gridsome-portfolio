<template>
  <HomeLayout>
    <div class="home">
      <div class="parallax">
        <div class="overlay">
          <div class="container">
            <div class="profile">
              <div class="picture">
                <g-image alt="profile photo" src="~/assets/img/profile-photo-color-200x200.png" />
              </div>
              <div class="text">
                <h1>Samuel Earl</h1>
                <h2 class="tagline">
                  Web Developer<br v-if="!isXL"><span v-if="isXL"> | </span>Product Creator
                </h2>
              </div>
            </div>

            <div class="content">
              <p>I love business and product development! Behind every web application is a business that needs to be profitable. I help businesses and new product launches to be profitable and successful.</p>

              <p>Much of my background is in business, so when I create web apps I consult with others on the team to make sure that we are creating apps that will help the business be successful. I am a huge proponent of following the Lean Startup and agile development methodologies to create the right products that users will buy.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </HomeLayout>
</template>

<script>
export default {
  metaInfo: {
    title: "Portfolio"
  },

  computed: {
    isXL() {
      // The window object is not defined on the server, so the build process with throw an error when it see "window" and say "window is not defined". So you have to wrap it in an "if (process.isClient)" conditional to prevent that error.
      if (process.isClient) {
        const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

        // If the viewport width is xlMin or larger, then return true.
        if (width >= this.$xlMin) {
          return true;
        }
        // If the viewport width is less than xlMin, then return false.
        else {
          return false;
        }
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
@media $xs-up {
  .home {

    .profile {
      margin-bottom: 10px;
      text-align: center;

      .picture {
        //
      }

      h1 {
        font-family: $cursive-font-stack;
        font-size: 3rem;
      }
      .tagline {
        margin-top: -10px;
        font-family: $cursive-font-stack;
        font-size: 1.5rem;
      }
    }
  }
}

@media $xl-up {
  .home {

    .parallax {
      // The image used.
      // background-image: url("../assets/img/canyon-sky-landscape.jpg");
      background-image: url("../assets/img/a-view-of-the-stars-on-night-sky.jpg");

      // Set a specific height.
      height: 100vh;

      // Create the parallax scrolling effect.
      background-attachment: fixed;
      background-position: center top;
      background-repeat: no-repeat;
      background-size: cover;

      // This creates the image overlay
      .overlay {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.60);
        z-index: 10;

        .profile {
          display: flex;
          align-items: center;
          margin-bottom: 30px;
          padding-top: 30px;
          text-align: left;

          .picture {
            margin-right: 30px;
          }

          .text {

            h1 {
              font-size: 4rem;
              color: white;
            }

            .tagline {
              font-size: 2.2rem;
              background-color: transparent;
              color: white;

              span {
                font-family: inherit;
                color: inherit;
              }
            }
          }
        }

        .content {
          font-size: 1.2rem;

          p {
            color: white;
          }
        }
      }
    }
  }
}
</style>
