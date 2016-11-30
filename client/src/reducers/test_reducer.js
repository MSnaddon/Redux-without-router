export default function testArray(state = [], action){
	if (action.type == "EXTENDARRAY"){
		const newNumber = state.length
		return [
		...state,
		 newNumber
		 ]
	}
	return state
	
}