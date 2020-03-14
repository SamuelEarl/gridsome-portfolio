<template>
  <Layout>
    <h1>Code Samples</h1>

    <div class="content">
      <h2 id="record-download-data">Record Real-time Data And Download Those Data As A CSV File</h2>

      <p><em>Click the "Result" tab in the JSFiddle window below to see the widget and instructions.</em></p>

      <iframe width="100%" height="500" src="https://jsfiddle.net/duke_of_earl/6nqe78or/embedded/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

      <br><br>

      <p>In the embedded systems project that I worked on, we needed to allow users to record real-time data for a given period of time, create a CSV file that was populated with those data, and then allow users to download the CSV file for further data analysis. That feature had to be implemented completely in the browser (i.e., no back-end code involved). That was a fun and challenging widget to create. The Fiddle above includes both the data recording and downloading features as well as a timer, so it is essentially two code samples in one.</p>
    </div>

    <div class="content">
      <h2>Input Field That Will Shrink To Fit The Width Of The Text</h2>

      <p><em>Click the "Result" tab in the JSFiddle window below to see the widget and instructions.</em></p>

      <iframe width="100%" height="500" src="https://jsfiddle.net/duke_of_earl/5f7sjk3u/embedded/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

      <br><br>

      <p>I had to create input fields that allowed users to enter their own labels for certain items. The challenge was that I didn't know how much room users needed for their labels, and those labels could not be of unlimited length. I came up with this "shrink-to-fit" idea that worked nicely. Users were able to enter their labels inline, see the lengths of those labels as they were typing, and adjust the lengths of their labels as necessary.</p>

      <p>Adjustable-width input fields can be relatively simple widgets, unless you need the width of the input field to match the width of the text perfectly. That was what I needed for this particular project and is what this Fiddle demonstrates. The trick is to use the HTML5 Canvas API.</p>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Code Samples"
  }
}
</script>

<style lang="stylus" scoped>
@media $xs-up {
  .content {
    margin-bottom: 50px;
    // border-bottom: 1px solid lightgray;
  }
}

@media $xl-up {

}
</style>
