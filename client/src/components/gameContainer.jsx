import React from 'react'


export default class GameContainer extends React.Component {
	render(){
		console.log(this.props)
		return (
			<div>
				<button onClick={this.props.extendArray}>Add array</button>
			</div>
			)
	}
}