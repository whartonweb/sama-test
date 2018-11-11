<template>
  <div class="row product-view">
    <div class="col">
    <h2>{{ item.ItemName }}</h2>
    <img :src="photo">
    </div>
    <div class="col meta">
      <p>ItemID: {{ item.ItemID }}</p>
      <p>{{ item.Description }}</p>
      <p>Dimensions: {{ item.Dimensions }}</p>
      <p>BasePrice: ${{ item.BasePrice }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductDetails',
  data () {
    return {
      item: this.$api.endpoints.getItem(this.$route.params.ItemID)
    }
  },
  computed: {
    photo () {
      return `${this.item.PhotoName}?w=600`
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import '../assets/vars';
  .product-view{
    align-items:center;
    .meta{background-color:lighten(#212529, 80%);
      padding: 2em;}
  }

</style>
