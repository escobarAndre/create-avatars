<template>
	<div
		class="h-screen w-screen bg-gradient-to-b from-blue-600 to-indigo-900 bg-blue-600 flex flex-col items-center justify-center"
	>
		{{ baseUrl }}
		<img :src="baseUrl" class="w-64 h-64" alt="" />
		<div
			class="h-56 w-1/2 rounded-md shadow-md shadow-blue-800 bg-slate-300 text-black"
		>
			<m-select
				v-model="teste2"
				:options="['Batman', 'Robin', 'Pinguin']"
				class="text-black"
			/>
			<div
				v-for="propertie in inputProperties"
				:key="propertie.title"
				class="my-2 w-full h-auto"
			>
				<m-select
					@input="assignValue(propertie.title, $event)"
					:canClear="false"
					:canDeselect="false"
					:options="propertie.enum || propertie.items?.enum"
					class="text-black"
					:placeholder="`Select a ${propertie.title.toLowerCase()}`"
				/>
			</div>
		</div>
	</div>
</template>

<script>
	import MSelect from '../components/atoms/MSelect.vue';
	import { avataaars as avataaars } from '@dicebear/collection';

	export default {
		components: {
			MSelect
		},
		data() {
			return {
				selectedOption: {},
				avataaars,
				teste2: 'wayfarers',
				styleType: 'avataaars',
				svg: '',
				name: 'andre',
				baseUrl: `https://avatars.dicebear.com/api/avataaars/andre.svg?`,
				mselect: ''
			};
		},
		computed: {
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
				console.log(value);
				key = this.normalizeKey(key);
				if (!this.baseUrl.includes(key)) {
					let position;

					Object.values(this.selectedOption).length
						? (position = 1)
						: (position = 0);

					this.baseUrl = this.baseUrl.concat(
						'',
						`${this.queryStringConstructor(key, value, position)}`
					);
					this.selectedOption[key] = value;
				} else {
					let oldValue = this.baseUrl.split(`${key}=`)[1];
					this.baseUrl = this.baseUrl.replace(oldValue, value);
				}
			}
		}
	};
</script>

<style lang="scss" scoped></style>
