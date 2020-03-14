<template>
  <Layout>
    <h1>Recent Projects</h1>
    <p>(Describe the stack that is used (e.g. Vue.js, Vue Router, Vuex, D3.js) and the features along with GIFs showing those features.)</p>

    <div class="content">
      <h2>Budget App</h2>

      <p>This app uses Vue.js, serverless functions, and Neo4j (because I love graph database, Neo4j in particular). I placed a high priority on security (explained below) and spent a lot of time working on UX (with a lot of user feedback from my wife).</p>

      <p><strong>These are some of the features in this app:</strong></p>

      <h3>Web App Security</h3>
      <p>I take web app security very seriously. I did a lot of research to find out how to implement auth security correctly to protect my users. There are a lot of ideas out there about how security should be handled, but many of those ideas seem to be "quick and dirty" (i.e. lazy) approaches that do not address how to secure a web app properly. The auth security in this app is implemented by using a refresh token and an access token. The access token has a short expiration period and when it expires the user is given a new access token. This process repeats until the refresh token expires, at which point the user is prompted to login again. The refresh token is also rotate periodically, but it maintains the same expiration time. The ideas that I use for security come mostly from these two posts:</p>
      <ul>
        <li><a href="https://medium.com/hackernoon/the-best-way-to-securely-manage-user-sessions-91f27eeef460" target="_blank">The best way to securely manage user sessions</a></li>
        <li><a href="https://hasura.io/blog/best-practices-of-using-jwt-with-graphql/" target="_blank">The Ultimate Guide to handling JWTs on frontend clients (GraphQL)</a></li>
      </ul>
    </div>

    <div class="content">
      <h2>Data Dashboard</h2>

      <p>I did some work for a large manufacturing company that needed a second-by-second data dashboard. This app provides real-time status updates on various stations and equipment throughout the manufacturing facility. The front-end is a single-page application (SPA) written in Vue.js, Vue Router, and Vuex. All the UI components are custom made and the entire app (including the navigation and all the various windows) is completely mobile-responsive.</p>

      <p><strong>These are some of the features in this app:</strong></p>

      <h3>Real-time Data Via WebSockets</h3>

      <p>The data from the back-end is fed to the UI and inserted into a real-time dashboard that includes summary data and live charts.</p>

      <h3>Interactive Charts With D3.js</h3>

      <p>Users can change the data ranges that they want displayed for each chart. When a user hovers over a data point, the data for that specific point is displayed.</p>

      <h3>Record And Download Data Without Servers</h3>

      <p>Users can record data and download the recorded data as a CSV file for further analysis. The downloaded CSV file is saved to the user's computer. The data recording and downloading feature is completely implemented in the browser (i.e. no server-side code involved). See <a href="/code-samples#record-download-data">my first code sample</a> for a working example that you can try yourself.</p>

      <h3>Collapsible Side Panel</h3>

      <p>This feature allows users to get a larger view of the charts for a bit more of a detailed view.</p>


      <p><strong>NOTE:</strong> I wrote the original back-end server in Node.js with MongoDB and WebSockets. However, after working on the project for a while, our team realized that Go would be a better fit for what we needed.</p>
    </div>

    <div class="content">
      <h2>Education Website</h2>
      <p>In this website users can create accounts, sign-in, and create or take courses. The website administrator can grant or revoke permissions for various permissions levels. The course pages utilitize WYSIWYG editors with media plugins that allow users to type text or embed images and videos — similar to content management systems.</p>

      <p>The back-end is written in hapi.js (a Node.js framework). The database is Neo4j (a NoSQL graph database). The front-end is a single-page application (SPA) written in Vue.js/Vuex/Vue Router. Each page is designed to be completely mobile-responsive using the Stylus CSS preprocessor. All UI components are custom made without the use of any pre-built component libraries.</p>

      <p>NOTE: This was a project that I worked on a while back as I was learning backend development. I developed it using Docker containers, but it is lacking in some areas (especially security). I plan on converting the backend to use serverless functions.</p>
    </div>

    <div class="content">
      <h2>Company Org Chart</h2>
      <p>Description</p>
    </div>

    <div class="content">
      <h2>Content Management System (CMS)</h2>
      <p><a href="https://github.com/SamuelEarl/ink-cms-vue-express-mongo">GitHub Repo</a></p>
      <div class="image-container macbook-images">
        <img src="img/cms-pages-macbook.png" alt="MacBook" />
        <img src="img/cms-edit-page-macbook.png" alt="MacBook" />
      </div>
      <p>This CMS project is a work-in-progress. I love to learn, and I also enjoy teaching what I learn. I am creating a course that is targeted toward beginner web developers, and this is the course project. I will use this app to teach about modern front-end development, mobile-responsive design, databases and CRUD operations, APIs, authentication, authorization, basic web security, data validation, testing, logging, Docker, and more.</p>

      <p>I am creating this app inside Docker containers using Vue.js, Express.js and MongoDB. This app will be a model for future course projects that I will create using different tech stacks (e.g., React or Handlebars in the front-end, hapi.js or Flask in the back-end, Neo4j or MySQL as the database).</p>

      <p>Feel free to clone this repo and follow the instructions in the README to run this app on your computer in Docker!</p>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Recent Projects"
  }
}
</script>

<style lang="stylus" scoped>
@media $xs-up {
  .content {
    margin-bottom: 50px;
  }
}
</style>
