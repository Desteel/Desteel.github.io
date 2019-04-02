import { SearchInput } from './Styles';
import { observer, inject } from 'mobx-react';

@inject('searchStore')
@observer
class Input extends React.Component {
    returnValue = e => {
        this.props.searchStore.value = e.target.value;
    };

    render() {
        return (
            <SearchInput
                type="text"
                placeholder="Search"
                onChange={this.returnValue}
                value={this.props.searchStore.value}
            />
        );
    }
}

export default Input;
