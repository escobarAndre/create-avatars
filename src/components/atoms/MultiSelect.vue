<template>
	<select @input="$emit('input', $event)" :name="name" :id="name">
		<option value="adventur">{{ name }}</option>
		<option v-for="item in list" :value="item" :key="item">
			{{ item }}
		</option>
	</select>
</template>

<script>
	export default {
		props: {
			modelValue: {
				required: true
			},
			list: {
				type: [Array, Object],
				required: true
			},
			name: {
				required: true
			}
		}
	};
</script>
