<template>
  <div>
    <b-card
      title="This is a test tile"
      :img-src="'https://picsum.photos/600/300/?image=' + $route.params.id"
      img-alt="Image"
      img-top
      tag="article"
      style="max-width: 100%;"
      class="mb-2"
    >
      <div class="row mb-3">
        <div class="col-6">
          <b-card-sub-title>Last Updated : 31st May, 2020</b-card-sub-title>
        </div>
        <div class="col-6">
          <b-card-sub-title class="text-right">Written By: Prajwol Raj Onta</b-card-sub-title>
        </div>
      </div>
      <b-card-text class="text-justify">
        <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur corporis impedit ipsam maxime
          molestiae nihil nisi quos, vero? Ad, debitis expedita harum hic perferendis totam vitae voluptatum. Fuga,
          quae, saepe?
        </div>
        <div>Aperiam nisi optio similique. Accusamus accusantium animi autem beatae fugit impedit in iusto, laudantium
          libero nemo omnis placeat quas quia repellendus soluta ullam vitae? Ad architecto assumenda dolorem modi
          ratione!
        </div>
        <div>Corporis ex inventore maxime. Amet architecto beatae dignissimos, eos et explicabo facilis harum iste
          laudantium nemo optio quae quaerat soluta tempora unde? Earum ipsam iste odit omnis porro, quam rem!
        </div>
        <div>Aliquam aspernatur assumenda cumque deserunt doloremque dolores ducimus eligendi eum illo ipsum iusto
          molestiae mollitia nam nemo odio, quibusdam quos ratione reiciendis vel voluptate! Consequatur cupiditate ex
          obcaecati! Aliquam, voluptatibus!
        </div>
        <div>A aliquam amet architecto aut, debitis delectus, facilis iste laudantium maxime molestias officia optio
          placeat provident quae quibusdam quod saepe vel voluptate voluptates voluptatibus. Asperiores consectetur iste
          odit repellat soluta.
        </div>
      </b-card-text>
    </b-card>
  </div>
</template>

<script>
    export default {
        name: "index.vue"
    }
</script>

<style scoped>

</style>
