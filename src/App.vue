<template>
  <div>
    <hello-component name="Bangladesh" />
  </div>
</template>

<script>
import HelloComponent from './components/HelloComponent.vue'

export default {
	components: {
		HelloComponent
	}
}
</script>

<style lang="scss">
	@import '../assets/scss/app.scss';
</style>
