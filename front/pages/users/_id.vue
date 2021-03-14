<template>
  <h1> Hello, {{ name }} 元気ですか？</h1>
</template>
<script>
export default {
  asyncData({ $axios, params }) {
    return $axios.$get(`${process.env.BASE_URL}users/${params.id}`)
      .then((res) => {
        return { name: res.name }
      })
  }
}
</script>
