<template>
  <div>
    <header class="center">

      <h1 class="display-4">{{ company.CompanyName }}</h1>
    </header>
    <div class="card-columns ">
      <ProductCard v-for="item in items" :key="item.ItemID" :item="item"></ProductCard>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import ProductCard from '@/components/ProductCard.vue'

export default {
  name: 'home',
  components: {
    ProductCard
  },
  data () {
    return {
      company: this.$api.endpoints.getCompany(),
      items: this.$api.endpoints.getItems(),
      contact: this.$api.endpoints.getSalesRep()
    }
  },
  computed: {
    companyLogo () {
      const id = this.company.ManufacturerID
      return `http://images.repzio.com/productimages/${id}/logo${id}_lg.jpg`
    }
  }
}
</script>
