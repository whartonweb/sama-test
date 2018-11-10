<template>
  <div>
    <h1>Contact</h1>
    <p>Name: {{rep.FirstName}} {{rep.LastName}}</p>
    <p>Email: {{rep.EmailAddress }}</p>
    <p>Phone: {{rep.Phone }}</p>
    <p>{{rep.City}}, {{rep.State}}</p>
    <p>{{rep.CompanyName}}</p>
  </div>
</template>

<script>

export default {
  name: 'home',
  data () {
    return {
      rep: this.$api.endpoints.getSalesRep()
    }
  }
}
</script>
