<template>
<div class="wrapper">
  <div class="card">
    <h1 class="font-bold text-6xl">Vue With TailwindCSS</h1>
    <h2 class="text-3xl font-bold">{{ subtitle }}</h2>
    <slot />
  </div>
</div>
</template>

<script>

export default {
  name: 'hello-world',
  props: {
    subtitle: {
      type: String,
      default: 'Using VueCLI'
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>
.wrapper {
 @apply flex justify-center items-center h-screen text-center text-emerald-500 bg-gray-100;
}

.card {
  @apply rounded-lg border border-emerald-300 bg-emerald-100 p-10 shadow-lg;
}
</style>
