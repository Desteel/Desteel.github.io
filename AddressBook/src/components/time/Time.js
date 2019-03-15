class Time extends React.Component {
	constructor() {
		super();
		this.state = {
				date: new Date()
			};
	}	
	
	updateDate() {
		this.setState({
			date: new Date()
		});		
	}
	
	componentDidMount() {
		let timer = setInterval(() => this.updateDate(), 1000);
	}

	componentWillUnmount() {		
		clearInterval(timer);
	}	
	
	render() {		
		return (
			<div>
				{this.state.date.toLocaleTimeString()}
			</div>
		)
	}    
}

export default Time