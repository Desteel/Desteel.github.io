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
			.then(res => {
				console.log(res);
				return res.json();
			})
			.then(
				result => {
					this.setState({
						isLoaded: true,
						items: result.items
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
    }
}

export default Grid;
