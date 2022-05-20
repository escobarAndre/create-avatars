<template>
	<Multi-select
		v-bind="$attrs"
		:classes="{
			container:
				'h-9 relative w-full flex items-center justify-end box-border cursor-pointer border-0.5 border-primary-dark rounded-lg bg-white text-base leading-snug outline-none',
			containerDisabled: 'cursor-default bg-neutral-new',
			containerOpen: 'rounded-b-none border-b-0',
			containerOpenTop: 'rounded-t-none',
			containerActive: '',
			singleLabel:
				'flex items-center h-full max-w-full absolute left-0 top-0 pointer-events-none bg-transparent leading-snug pl-5 pr-16 box-border',
			singleLabelText:
				'block whitespace-nowrap max-w-full text-primary-new font-semibold text-xs',
			multipleLabel:
				'flex items-center h-full absolute left-0 top-0 pointer-events-none bg-transparent leading-snug pl-5',
			search:
				'w-full absolute inset-0 outline-none focus:ring-0 appearance-none box-border border-0 text-base font-sans bg-white rounded pl-5',
			tags: 'flex-grow flex-shrink flex flex-wrap items-center mt-1 pl-2',
			tag: 'bg-green-500 text-white text-md font-semibold py-0.5 pl-2 rounded mr-1 mb-1 flex items-center whitespace-nowrap',
			tagDisabled: 'pr-2 opacity-50',
			tagRemove:
				'flex items-center justify-center p-1 mx-0.5 rounded-sm hover:bg-black hover:bg-opacity-10 group',
			tagRemoveIcon:
				'bg-multiselect-remove bg-center bg-no-repeat opacity-30 inline-block w-3 h-3 group-hover:opacity-60',
			tagsSearchWrapper:
				'inline-block relative mx-1 mb-1 flex-grow flex-shrink h-full',
			tagsSearch:
				'absolute inset-0 border-0 outline-none focus:ring-0 appearance-none p-0 text-base font-sans box-border w-full',
			tagsSearchCopy: 'invisible whitespace-pre-wrap inline-block h-px',
			placeholder:
				'flex items-center h-full absolute left-0 top-0 pointer-events-none bg-transparent leading-snug pl-5 text-gray-400',
			caret:
				'bg-multiselect-caret bg-center bg-no-repeat w-4 h-6 py-px box-content mr-3.5 relative z-10 text-purple-light flex-shrink-0 flex-grow-0 transition-transform transform pointer-events-none',
			caretOpen: 'rotate-180 pointer-events-auto',
			clear:
				'pr-3.5 relative z-10 opacity-40 transition duration-300 flex-shrink-0 flex-grow-0 flex hover:opacity-80',
			clearIcon:
				'bg-multiselect-remove bg-center bg-no-repeat w-2.5 h-4 py-px box-content inline-block',
			spinner:
				'bg-multiselect-spinner bg-center bg-no-repeat w-4 h-4 z-10 mr-3.5 animate-spin flex-shrink-0 flex-grow-0',
			dropdown:
				'max-h-60 absolute -left-px -right-px bottom-0 transform translate-y-full border border-primary-dark border-t-0 -mt-10 overflow-y-scroll z-50 bg-white flex flex-col rounded-b-lg',
			dropdownTop:
				'-translate-y-full top-px bottom-auto flex-col-reverse rounded-b-none rounded-t',
			dropdownHidden: 'hidden',
			options: 'flex flex-col p-0 m-0 list-none',
			optionsTop: 'flex-col-reverse',
			group: 'p-0 m-0',
			groupLabel:
				'flex text-sm box-border items-center justify-start text-left py-1 px-3 font-semibold bg-gray-200 cursor-default leading-normal',
			groupLabelPointable: 'cursor-pointer',
			groupLabelPointed: 'bg-gray-300 text-gray-700',
			groupLabelSelected: 'bg-green-600 text-white',
			groupLabelDisabled: 'bg-neutral-new text-gray-300 cursor-not-allowed',
			groupLabelSelectedPointed: 'bg-green-600 text-white opacity-50',
			groupLabelSelectedDisabled:
				'text-green-100 bg-green-600 bg-opacity-50 cursor-not-allowed',
			groupOptions: 'p-0 m-0',
			option:
				'flex items-center justify-start box-border text-left cursor-pointer text-secondary-new font-medium text-xs leading-snug py-2 pr-3 pl-5',
			optionPointed: 'text-gray-800 bg-neutral-new',
			optionSelected: 'text-secondary-new bg-neutral-new',
			optionDisabled: 'text-gray-300 cursor-not-allowed',
			optionSelectedPointed: 'text-secondary-new bg-neutral-new opacity-90',
			optionSelectedDisabled:
				'text-green-100 bg-neutral-new bg-opacity-50 cursor-not-allowed',
			noOptions: 'py-2 px-3 text-gray-600 bg-white text-left',
			noResults: 'py-2 px-3 text-gray-600 bg-white text-left',
			fakeInput:
				'bg-transparent absolute left-0 right-0 -bottom-px w-full h-px border-0 p-0 appearance-none outline-none text-transparent',
			spacer: 'h-9 py-px box-content'
		}"
	/>
</template>
<script>
	export default {};
</script>
<style scoped></style>
