<template>
	<div
		class="h-auto min-h-screen w-full pb-10 bg-gradient-to-b from-blue-600 to-indigo-900 bg-blue-600 flex flex-col items-center justify-center"
	>
		<welcome-modal />
		<img :src="baseUrl" class="w-80 h-80" alt="" />
		<div
			class="h-auto w-[70%] px-3 py-2 rounded-md shadow-md shadow-blue-800 bg-slate-300 text-black"
		>
			<div class="w-full grid grid-cols-3 gap-3">
				<template v-for="propertie in inputProperties" :key="propertie.title">
					<m-select
						v-if="!propertie.title.includes('Probability')"
						@input="assignValue(propertie.title, $event)"
						:canClear="false"
						:canDeselect="false"
						:options="propertie.enum || propertie.items?.enum"
						class="text-black m-2 w-auto"
						:placeholder="`Select a ${propertie.title.toLowerCase()}`"
					/>
				</template>
			</div>
		</div>
	</div>
</template>

<script>
	import MSelect from '../components/atoms/MSelect.vue';
	import WelcomeModal from '../components/atoms/WelcomeModal.vue';
	import { avataaars as avataaars } from '@dicebear/collection';

	export default {
		components: {
			MSelect,
			WelcomeModal
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
				console.log(key);
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
