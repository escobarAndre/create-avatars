<template>
	<div
		class="h-screen w-screen bg-gradient-to-b from-blue-600 to-indigo-900 bg-blue-600 flex flex-col items-center justify-center"
	>
		{{ baseUrl }}
		<img :src="baseUrl" class="w-64 h-64" alt="" />
		<div
			class="h-56 w-1/2 rounded-md shadow-md shadow-blue-800 bg-slate-300 text-black"
		>
			<div
				v-for="propertie in inputProperties"
				:key="propertie.title"
				class="my-2 w-full h-auto bg-yellow-100"
			>
				{{ propertie.enum || propertie.items?.enum }}
				<multi-select
					@change="assignValue(propertie.title, $event.target.value)"
					:model-value="`selectedOption.${propertie.title}`"
					:list="propertie.enum || propertie.items?.enum"
					name="teste"
				/>
			</div>
		</div>
	</div>
</template>

<script>
	import MultiSelect from '../components/atoms/MultiSelect.vue';
	import { avataaars as avataaars } from '@dicebear/collection';

	export default {
		components: {
			MultiSelect
		},
		data() {
			return {
				selectedOption: {},
				avataaars,
				teste2: 'wayfarers',
				styleType: 'avataaars',
				svg: '',
				name: 'andre',
				baseUrl: `https://avatars.dicebear.com/api/avataaars/andre.svg?`
			};
		},
		computed: {
			// selectedTypeQueryStrings() {
			// 	Object.values(avataaars.schema.properties).reduce((prev, current) => {
			// 		prev = `https://avatars.dicebear.com/api/${this.styleType}/`
			// 		console.log(prev, current.title);
			// 	}, {});
			// 	return null;
			// },
			url() {
				return `https://avatars.dicebear.com/api/${this.styleType}/${
					this.name
				}.svg?${this.queryStringConstructor(
					'accessories',
					this.teste2,
					0
				)}&accessoriesChance=100`;
			},
			inputProperties() {
				return Object.values(avataaars.schema.properties);
			}
		},
		methods: {
			queryStringConstructor(option, value, position = 0 || 1) {
				console.log(position ? `&${option}=${value}` : `${option}=${value}`);
				return position ? `&${option}=${value}` : `${option}=${value}`;
			},
			normalizeKey(key) {
				if (key.includes(' ')) {
					const firtsString =
						key.split(' ')[0][0].toLowerCase() + key.split(' ')[0].substr(1);
					const secondString =
						key.split(' ')[1][0].toUpperCase() + key.split(' ')[1].substr(1);
					return firtsString.concat('', secondString);
				} else {
					return key.toLowerCase();
				}
			},
			assignValue(key, value) {
				if (!this.baseUrl.includes(key.toLowerCase())) {
					key = this.normalizeKey(key);
					let position;

					Object.values(this.selectedOption).length
						? (position = 1)
						: (position = 0);

					console.log(key);
					this.baseUrl = this.baseUrl.concat(
						'',
						`${this.queryStringConstructor(key, value, position)}`
					);
					this.selectedOption[key] = value;
				} else {
					let param = `${key}=`;
					let oldValue = this.baseUrl.split(param)[1];
					this.baseUrl = this.baseUrl.replace(oldValue, value);
				}
			}
		}
	};
</script>

<style lang="scss" scoped></style>
