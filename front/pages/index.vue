<template>
  <div class="container">
    <div>
      <Logo />
      <h1 class="title">
        nuxt_with_rails
      </h1>
      <div class="links">
        <n-link to='/login' class="button--green">
          login
        </n-link>
        <n-link to='/signup' class="button--green">
          Signup
        </n-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  auth: false
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
