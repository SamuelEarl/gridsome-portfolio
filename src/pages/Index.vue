<template>
  <HomeLayout>
    <div class="index">
      <div class="parallax">
        <div class="overlay">
          <div class="container">
            <div class="profile">
              <div class="picture">
                <g-image alt="profile photo" src="~/assets/img/profile-photo-gray-scale-200x200.png" />
              </div>
              <div class="text">
                <h1>Samuel Earl</h1>
                <h2>Analyst &amp; Software Developer</h2>
              </div>
            </div>

            <div class="content">
              <p>I love business and product development! Behind many software products are companies that need to be profitable. I help businesses and products to be profitable and successful.</p>

              <p>Much of my background is in business and software development. When I am working on a project I consult with my team members to make sure that we are creating software that will help the business be successful. I am a huge proponent of following the Lean Startup and agile development methodologies to create products that people want.</p>
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
}
</script>

<style lang="stylus" scoped>
@media $xs-up {
  .index {

    .profile {
      margin-bottom: 10px;
      text-align: center;

      .picture {
        //
      }

      .text {

        h1 {
          font-family: $cursive-font-stack;
          font-size: 3rem;
        }
        h2 {
          margin-top: -10px;
          font-family: $cursive-font-stack;
          font-size: 2rem;
          background-color: transparent;
          color: $text;
        }
      }
    }
  }
}

@media $xl-up {
  .index {

    .parallax {
      // The image used.
      background-image: url("../assets/img/canyon-sky-landscape.jpg");
      // background-image: url("../assets/img/a-view-of-the-stars-on-night-sky.jpg");

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

            h2 {
              font-size: 2.5rem;
              color: white;
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
