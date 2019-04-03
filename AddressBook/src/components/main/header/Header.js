import { observer, inject } from 'mobx-react';
import Search from '../../search/Search';
import Time from '../../time/Time';
import CreatorHoc from '../../../containers/creator-hoc';
import HocModal from '../../../containers/modal-hoc/HocModal';
import { StyledHeader, BtnAddCard } from './Styles';

@inject('modalStore')
@observer
class Header extends React.Component {
    render() {
        return (
            <StyledHeader>
                <div className="container">
                    <Search />
                    <BtnAddCard
                        as={HocModal}
                        content={<CreatorHoc />}
                        text={'Add card'}
                    />
                    <Time />
                </div>
            </StyledHeader>
        );
    }
}

export default Header;
