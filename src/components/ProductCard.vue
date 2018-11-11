<template>
  <div class="card _col-sm-4">
    <router-link :to="link">
      <img class="card-img-top" :src="thumbnail">
    </router-link>
    <div class="card-body">
      <router-link :to="link">
        <h3 class="card-title">{{ item.ItemName }}</h3>
      </router-link>
      <p class="card-text">{{ item.Description }}</p>
      <div class="row">
        <p class="card-text col base-price">
          ${{ item.BasePrice }}
        </p>
      <p class="card-text col">
        <small class="text-muted">{{ item.ItemID }}</small>
      </p>

    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductCard',
  props: {
    item: Object
  },
  computed: {
    thumbnail () {
      return `${this.item.PhotoName}?w=500`
    },
    link () {
      return { name: 'product', params: { ItemID: this.item.ItemID } }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.card{border-radius: 0;
  border-collapse: collapse;
}
/*.card:nth-child(3n){*/
  /*border-right: none;*/
/*}*/
.card-columns .card {
  margin-bottom: 0rem;
}
//breathing room
.card{padding: 1em}
  @media screen and (min-width: 768px) {
    .card{border-radius: 0;

      border-collapse: collapse;
      border-left:none;
      border-top:none}
    .card:nth-child(8),.card:nth-child(9), .card:nth-child(10), .card:nth-child(11)
    {border-right: none}
  .base-price{ font-family: "Open Sans";
  }
    text-align: left}
.card-text:last-child {
  text-align: right;
}
</style>
