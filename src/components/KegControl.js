import React from 'react';
import KegList from './KegList';
import NewKegForm from './NewKegForm';
import KegDetail from './KegDetail';


class KegControl extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      formVisibleOnPage: false,
      masterKegList: [],
      selectedKeg: null
    };
  }

  handleClick = () => {
    if(this.state.selectedKeg != null) {
      this.setState({
        formVisibleOnPage: false, 
        selectedKeg: null
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

  handleChangingSelectedKeg = (id) => {
    const selectedKeg = this.state.masterKegList.filter(keg => keg.id === id)[0];
    this.setState({selectedKeg: selectedKeg});
  }

  handleBuyKeg = (id) => {
    const newMasterKegList = this.state.masterKegList.map((keg)=> ({
      ...keg,
        quantity: keg.id === id ? keg.quantity -1 : keg.quantity
    }))
    const selectedKeg = this.state.masterKegList.filter(keg => keg.id === id)[0];
    this.setState({
      masterKegList: newMasterKegList,
      selectedKeg: selectedKeg
    });
  }

  handleRestockKeg = (id, restockAmount) => {
    const newMasterKegList = this.state.masterKegList.map((keg) => ({
      ...keg,
        quantity: keg.id === id ? parseInt(keg.quantity) + parseInt(restockAmount) : keg.quantity
    }))
    const selectedKeg = this.state.masterKegList.filter(keg => keg.id === id)[0];
    this.setState({
      masterKegList: newMasterKegList,
      selectedKeg: selectedKeg
    });
  }

  render () {
    let currentlyVisibleState = null;
    let buttonText = null;
    if(this.state.selectedKeg != null){
      currentlyVisibleState = <KegDetail keg = {this.state.selectedKeg} onClickingBuy = {this.handleBuyKeg} onClickingRestock = {this.handleRestockKeg} />
      buttonText='Return to List';
    } else if(this.state.formVisibleOnPage){
      currentlyVisibleState = <NewKegForm onNewKegCreation = {this.handleAddingNewKegToList} />
      buttonText = "Return to List";
    } else {
      currentlyVisibleState = <KegList kegList = {this.state.masterKegList} onKegSelection = {this.handleChangingSelectedKeg}/>;
      buttonText = 'Add New Keg';
    }

    return (
      <>
        {currentlyVisibleState}
        <button className="btn btn-secondary" onClick={this.handleClick}>{buttonText}</button>
      </>
    );
  }
}

export default KegControl;