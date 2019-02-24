import Template from "../card/Card";

let jsonUrl = require('../../data/items.json');

class Grid extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			error: null,
			isLoaded: false,
			items: []
		};
	}
	
	componentDidMount() {
		fetch(jsonUrl)
			.then(res => res.json())
			.then(
				result => {
					this.setState({
						isLoaded: true,
						items: result.items
					}, () => {
						//console.log(this.state)
					});
				},
				error => {
					this.setState({
						isLoaded: true,
						error
					});
				}
			);
	}
	
    render() {
		const { error, isLoaded, items } = this.state;
		
		if (error) {
			return <div>Error: {error.message}</div>;
		} else if (!isLoaded) {
			return <div>Loading...</div>;
		} else {
			return (
				<div className="grid">
					{items.map(item => (
						<Template
							data={{
								key: "1",
								photoUrl:
									"https://avatars3.githubusercontent.com/u/30462928?s=460&v=4",
								name: "Alexander",
								surname: "Kerensky",
								phone: "84626358367",
								address: "Detroit"
							}}
						/>
						
					))}					
				</div>
				/*
				<li key={item.name}>
					{item.name} {item.price}
				</li>
				*/
			);
		}
	  
        /*
		return (
            <div className="grid">
                <Template
                    data={{
                        photoUrl:
                            "https://avatars3.githubusercontent.com/u/30462928?s=460&v=4",
                        name: "Alexander",
                        surname: "Kerensky",
                        phone: "84626358367",
                        address: "Detroit"
                    }}
                />
            </div>
        );
		*/
    }
}

export default Grid;
