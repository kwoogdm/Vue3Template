const mutations = {
	CATEGORY_LISTS(state,lists){
		if(lists.length >0 ){
			state.categoryList = lists;
		}
	}
}
export default mutations