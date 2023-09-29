<template>
    <main class="wrap">
  <section class="container">
    <div class="container_heading">
      <h2>Terms & Conditions</h2>
    </div>
    <div class="container_content">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. </p>
      <p>Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis quis ligula lacinia aliquet. Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh. Quisque volutpat condimentum velit. </p>
      <p>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam nec ante. Sed lacinia, urna non tincidunt mattis, tortor neque adipiscing diam, a cursus ipsum ante quis turpis. Nulla facilisi. Ut fringilla. Suspendisse potenti. Nunc feugiat mi a tellus consequat imperdiet. Vestibulum sapien. Proin quam. Etiam ultrices. Suspendisse in justo eu magna luctus suscipit. </p>
      <p>Sed lectus. Integer euismod lacus luctus magna. Quisque cursus, metus vitae pharetra auctor, sem massa mattis sem, at interdum magna augue eget diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Morbi lacinia molestie dui. Praesent blandit dolor. Sed non quam. In vel mi sit amet augue congue elementum. Morbi in ipsum sit amet pede facilisis laoreet. Donec lacus nunc, viverra nec, blandit vel, egestas et, augue. Vestibulum tincidunt malesuada tellus. Ut ultrices ultrices enim. Curabitur sit amet mauris. </p>
      <p>Morbi in dui quis est pulvinar ullamcorper. Nulla facilisi. Integer lacinia sollicitudin massa. Cras metus. Sed aliquet risus a tortor. Integer id quam. Morbi mi. Quisque nisl felis, venenatis tristique, dignissim in, ultrices sit amet, augue. Proin sodales libero eget ante. Nulla quam. Aenean laoreet. </p>
    </div>
    <div class="container_nav">
      <small>By clicking 'Accept' you are agreeing to our terms and conditions.</small>
      <a class="button" href="#" @click="showAcceptAlert">Accept</a>
    </div>
  </section>
</main>
</template>

<script>
export default {
    methods: {
        showAcceptAlert() {
            alert("You have accepted the Terms & Conditions.");
        }
    }
}
</script>

<style scoped>
.wrap {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;  /* Makes the content vertically centered */
    /* background-color: #f6f8fa; */
}

.container {
    width: 70%;
    max-width: 800px;
    padding: 20px;
    background-color: #fff;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
}

.container_heading {
    border-bottom: 2px solid #e9ecef;
    margin-bottom: 20px;
    padding-bottom: 15px;
}

h2 {
    font-size: 24px;
    color: #333;
}

.container_content p {
    font-size: 16px;
    line-height: 1.5;
    color: #555;
    margin-bottom: 20px;
}

.container_nav {
    border-top: 2px solid #e9ecef;
    padding-top: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.container_nav small {
    color: #777;
    font-size: 14px;
}

.button {
    display: inline-block;
    padding: 10px 20px;
    background-color: #007bff;
    color: #fff;
    border-radius: 5px;
    transition: background-color 0.3s;
}

.button:hover {
    background-color: #0056b3;
}

</style>