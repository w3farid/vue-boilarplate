<template>
  <div>
    <h1>Hello {{ name }}!</h1>
    <img src="assets/img/vue.png">
  </div>
</template>

<script>

export default {
	props: {
		name: {
			type: String,
			required: true
		}
	}
}

</script>
