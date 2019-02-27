import { observer, inject } from 'mobx-react';

@inject("searchStore")
@observer class BtnClear extends React.Component {        
    render() {  
        const searchStore = this.props.searchStore,
            styles = {};

        if (!searchStore.isActive) {
            styles.opacity = 0;
            styles.visibility = 'hidden';
        }        
        
        return (
            <button type="button" onClick={searchStore.clearInput} style={styles} className="button">
				<svg focusable="false" height="24px" viewBox="0 0 24 24" width="24px" xmlns="http://www.w3.org/2000/svg"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path><path d="M0 0h24v24H0z" fill="none"></path></svg>
			</button>
        );
    }
}

export default BtnClear;