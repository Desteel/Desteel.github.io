import { OptionBox, OptionBtn } from './Styles';
import { Button } from '../elements/';
import IconCross from '../../icons/cross.svg';
import IconPen from '../../icons/pen.svg';
import IconCheck from '../../icons/tick.svg';

class Options extends React.Component {
    editRender = () => (
        <OptionBox>
            <OptionBtn as={Button} type={'submit'}>
                {<IconCheck />}
            </OptionBtn>
            <OptionBtn as={Button} action={this.props.editClose}>
                {'exit'}
            </OptionBtn>
        </OptionBox>
    );

    viewRender = () => (
        <OptionBox>
            <OptionBtn as={Button} action={this.props.editStart}>
                {<IconPen />}
            </OptionBtn>
            <OptionBtn as={Button} action={this.props.deleteCard}>
                {<IconCross />}
            </OptionBtn>
        </OptionBox>
    );

    render() {
        return this.props.editable ? this.editRender() : this.viewRender();
    }
}

export default Options;
