import React from 'react';
import KegList from './KegList';
import NewKegForm from './NewKegForm';


class KegControl extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      formVisibleOnPage: false,
      masterKegList: []
    };
  }

  handleClick = () => {
    if(this.state.selectedKeg != null) {
      this.setState({

      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage
      }));
    }
  }

  handleAddingNewKegToList = (newKeg) => {
    const newMasterKegList = this.state.masterKegList.concat(newKeg);
    this.setState({
      masterKegList: newMasterKegList,
      formVisibleOnPage: false
    });
  }

  render () {
    let currentlyVisibleState = null;
    let buttonText = null;
    if(this.state.formVisibleOnPage){
      currentlyVisibleState = <NewKegForm onNewKegCreation = {this.handleAddingNewKegToList} />
      buttonText = "Return to List";
    } else {
      currentlyVisibleState = <KegList kegList = {this.state.masterKegList} />;
      buttonText = 'Add New Keg';
    }

    return (
      <>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </>
    );
  }
}

export default KegControl;