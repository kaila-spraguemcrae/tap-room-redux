import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import KegList from './KegList';
import NewKegForm from './NewKegForm';
import KegDetail from './KegDetail';
import EditKegForm from './EditKegForm';
import * as a from './../actions';

class KegControl extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      formVisibleOnPage: false,
      masterKegList: [],
      selectedKeg: null,
      editing: false
    };
  }

  handleClick = () => {
    if(this.state.selectedKeg != null) {
      this.setState({
        formVisibleOnPage: false, 
        selectedKeg: null,
        editing: false
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
    this.setState({
      masterKegList: newMasterKegList,
      selectedKeg: newMasterKegList.filter(keg => keg.id === id)[0]
    });
  }

  handleRestockKeg = (id, restockAmount) => {
    const newMasterKegList = this.state.masterKegList.map((keg) => ({
      ...keg,
        quantity: keg.id === id ? parseInt(keg.quantity) + parseInt(restockAmount) : keg.quantity
    }))
    this.setState({
      masterKegList: newMasterKegList,
      selectedKeg: newMasterKegList.filter(keg => keg.id === id)[0]
    });
  }

  handleDeletingKeg = (id) => {
    const newMasterKegList = this.state.masterKegList.filter(keg => keg.id !== id);
    this.setState({
      masterKegList: newMasterKegList,
      selectedKeg: null
    });
  }

  handleEditClick = () => {
    this.setState({ editing: true });
  }

  handleEditingKegInList = (kegToEdit) => {
    const editedMasterKegList = this.state.masterKegList.filter(keg => keg.id !== this.state.selectedKeg.id).concat(kegToEdit);
    this.setState({
      masterKegList: editedMasterKegList,
      editing:false,
      selectedKeg: null
    });
  }

  render () {
    let currentlyVisibleState = null;
    let buttonText = null;
    if(this.state.editing){
      currentlyVisibleState = 
      <EditKegForm
        keg = {this.state.selectedKeg}
        onEditKeg = {this.handleEditingKegInList} />
      buttonText="Return to List";
      console.log(this.state)
    } else if(this.state.selectedKeg != null){
      currentlyVisibleState = 
      <KegDetail 
        keg = {this.state.selectedKeg} onClickingBuy = {this.handleBuyKeg} 
        onClickingRestock = {this.handleRestockKeg}
        onClickingDelete = {this.handleDeletingKeg}
        onClickingEdit = {this.handleEditClick} />
      buttonText='Return to List';
    } else if(this.state.formVisibleOnPage){
      currentlyVisibleState = 
      <NewKegForm 
        onNewKegCreation = {this.handleAddingNewKegToList} />
      buttonText = "Return to List";
    } else {
      currentlyVisibleState = 
      <KegList 
        kegList = {this.state.masterKegList} 
        onKegSelection = {this.handleChangingSelectedKeg}/>;
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