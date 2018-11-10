<template>
  <div id="app" class="container">
    <nav class="navbar  navbar-expand">
      <router-link class="navbar-brand" to="/">
        <img src="http://getbootstrap.com/docs/4.1/assets/brand/bootstrap-solid.svg" width="30" height="30" alt="">
      </router-link>
      <!-- Links -->
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link class="nav-link" to="/">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/contact">Contact</router-link>
        </li>
      </ul>
    </nav>
    <router-view/>
  </div>
</template>
<style lang="scss">
  @import '/assets/vars';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
  .container{max-width: 88rem;}
$color:#212529;
h3{
  &.card-title{
    font-family: "Open Sans";
    font-weight: 700;
    font-size: 1.1em;
    text-transform: uppercase;
    color: darken($color, 10%)
  }
}
p{font-family: "Roboto";
  color:lighten($color, 10%)}
.card-columns {
  -webkit-column-gap: 0rem;
  -moz-column-gap: 0rem;
  column-gap: 0rem;
}

</style>
