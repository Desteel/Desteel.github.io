import { action } from "mobx";
import { observer, inject } from "mobx-react";
import CardForm from "../../components/form/CardForm";
import { Button } from "../../components/elements/";
import IconCheck from "../../assets/icons/tick.svg";
import { StyledButton } from "../../components/form/Styles";

@inject("contentStore", "modalStore")
@observer
class CreatorHoc extends React.Component {
  @action("add card")
  addCard = data => {
    this.props.contentStore.addCard(data);
  };

  render() {
    return (
      <CardForm onSubmit={this.addCard} initialValues={{ phoneValues: [""] }}>
        <StyledButton as={Button} type="submit">
          <IconCheck />
        </StyledButton>
      </CardForm>
    );
  }
}

export default CreatorHoc;
