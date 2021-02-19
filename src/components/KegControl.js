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
      selectedKeg: null,
      editing: false
    };
  }

  handleClick = () => {
    if(this.state.selectedKeg != null) {
      this.setState({
        selectedKeg: null,
        editing: false
      });
    } else {
      const { dispatch } = this.props;
      const action = a.toggleForm();
      dispatch(action);
    }
  }

  handleAddingNewKegToList = (newKeg) => {
    const { dispatch } = this.props;
    const action = a.addKeg(newKeg);
    dispatch(action);
    const action2 = a.toggleForm();
    dispatch(action2);
  }

  handleChangingSelectedKeg = (id) => {
    const selectedKeg = this.props.masterKegList[id];
    this.setState({selectedKeg: selectedKeg});
  }

  handleBuyKeg = (id) => {
    const { dispatch } = this.props;
    const thisKeg = this.props.masterKegList[id];
    thisKeg.quantity = thisKeg.quantity - 1;
    const action = a.addKeg(thisKeg);
    dispatch(action);
    this.setState({
      selectedKeg: this.props.masterKegList[id]
    });
  }

  handleRestockKeg = (id, restockAmount) => {
    const { dispatch } = this.props;
    const thisKeg = this.props.masterKegList[id];
    thisKeg.quantity = thisKeg.quantity + restockAmount;
    const action = a.addKeg(thisKeg);
    dispatch(action);
    this.setState({
      selectedKeg: this.props.masterKegList[id]
    });
  }

  handleDeletingKeg = (id) => {
    const { dispatch } = this.props;
    const action = a.deleteKeg(id);
    dispatch(action);
    this.setState({
      selectedKeg: null
    });
  }

  handleEditClick = () => {
    this.setState({ editing: true });
  }

  handleEditingKegInList = (kegToEdit) => {
    const { dispatch } = this.props;
    const action = a.addKeg(kegToEdit);
    dispatch(action);
    this.setState({
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
    } else if(this.state.selectedKeg != null){
      currentlyVisibleState = 
      <KegDetail 
        keg = {this.state.selectedKeg} onClickingBuy = {this.handleBuyKeg} 
        onClickingRestock = {this.handleRestockKeg}
        onClickingDelete = {this.handleDeletingKeg}
        onClickingEdit = {this.handleEditClick} />
      buttonText='Return to List';
    } else if(this.props.formVisibleOnPage){
      currentlyVisibleState = 
      <NewKegForm 
        onNewKegCreation = {this.handleAddingNewKegToList} />
      buttonText = "Return to List";
    } else {
      currentlyVisibleState = 
      <KegList 
        kegList = {this.props.masterKegList} 
        onKegSelection = {this.handleChangingSelectedKeg}/>;
      buttonText = 'Add New Beer';
    }

    return (
      <>
        {currentlyVisibleState}
        <button className="btn btn-secondary" onClick={this.handleClick}>{buttonText}</button>
      </>
    );
  }
}

KegControl.propTypes = {
  masterKegList: PropTypes.object,
  formVisibleOnPage: PropTypes.bool
}

const mapStateToProps = state => {
  return {
    masterKegList: state.masterKegList,
    formVisibleOnPage: state.formVisibleOnPage
  }
}

KegControl = connect(mapStateToProps)(KegControl);

export default KegControl;