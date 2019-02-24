import "./Time.scss";

class Time extends React.Component {
	constructor(props) {
		super(props);
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
			<div className="time">
				<div className="time__count">
					{this.state.date.toLocaleTimeString()}
				</div>
			</div>
		)
	}    
}

export default Time