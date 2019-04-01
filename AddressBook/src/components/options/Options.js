import { OptionsBox, Btn } from './StyledOptions';
import IconCross from '../../icons/cross.svg';
import IconPen from '../../icons/pen.svg';
import IconCheck from '../../icons/tick.svg';

class Options extends React.Component {
    editRender = () => (
        <OptionsBox>
            <Btn type={'submit'}>
                {<IconCheck />}
            </Btn>
            <Btn action={this.props.editClose}>{'exit'}</Btn>
        </OptionsBox>
    );

    viewRender = () => (
        <OptionsBox>
            <Btn action={this.props.editStart}>{<IconPen />}</Btn>
            <Btn action={this.props.deleteCard}>{<IconCross />}</Btn>
        </OptionsBox>
    );

    render() {
        return this.props.editable ? this.editRender() : this.viewRender();
    }
}

export default Options;
