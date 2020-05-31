<template>
  <div>
    <Header/>
    <div class="container mt-5">
      <div class="row">
        <div class="col-md-9">
          <nuxt />
        </div>
        <div class="col-md-3">
          Sidebar
        </div>
      </div>
    </div>

  </div>
</template>

<style>
</style>
<script>
  import Header from "../components/Header";
  export default {
    components: {Header}
  }
</script>
