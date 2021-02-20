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
      editing: false
    };
  }

  handleClick = () => {
    if(this.props.selectedKeg != null) {
      const {dispatch} = this.props;
      const action = a.deselectKeg();
      dispatch(action);
      this.setState({
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
    const { dispatch } = this.props;
    const selectedKeg = this.props.masterKegList[id];
    const action = a.selectKeg(selectedKeg);
    dispatch(action);
  }

  handleBuyKeg = (id) => {
    const { dispatch } = this.props;
    const thisKeg = this.props.masterKegList[id];
    thisKeg.quantity = thisKeg.quantity - 1;
    const action = a.addKeg(thisKeg);
    dispatch(action);
    const selectedKeg = this.props.masterKegList[id];
    const action2 = a.selectKeg(selectedKeg);
    dispatch(action2);
  }

  handleRestockKeg = (id, restockAmount) => {
    const { dispatch } = this.props;
    const thisKeg = this.props.masterKegList[id];
    thisKeg.quantity = thisKeg.quantity + restockAmount;
    const action = a.addKeg(thisKeg);
    dispatch(action);
    const selectedKeg = this.props.masterKegList[id];
    const action2 = a.selectKeg(selectedKeg);
    dispatch(action2);
  }

  handleDeletingKeg = (id) => {
    const { dispatch } = this.props;
    const action = a.deleteKeg(id);
    dispatch(action);
    const action2 = a.deselectKeg();
    dispatch(action2);
  }

  handleEditClick = () => {
    this.setState({ editing: true });
  }

  handleEditingKegInList = (kegToEdit) => {
    const { dispatch } = this.props;
    const action = a.addKeg(kegToEdit);
    dispatch(action);
    const action2 = a.deselectKeg();
    dispatch(action2);
    this.setState({
      editing:false,
    });
  }

  render () {
    let currentlyVisibleState = null;
    let buttonText = null;
    if(this.state.editing){
      currentlyVisibleState = 
      <EditKegForm
        keg = {this.props.selectedKeg}
        onEditKeg = {this.handleEditingKegInList} />
      buttonText="Return to List";
    } else if(this.props.selectedKeg != null){
      currentlyVisibleState = 
      <KegDetail 
        keg = {this.props.selectedKeg} 
        onClickingBuy = {this.handleBuyKeg} 
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
  formVisibleOnPage: PropTypes.bool,
  selectedKeg: PropTypes.object
}

const mapStateToProps = state => {
  return {
    masterKegList: state.masterKegList,
    formVisibleOnPage: state.formVisibleOnPage,
    selectedKeg: state.selectedKeg
  }
}

KegControl = connect(mapStateToProps)(KegControl);

export default KegControl;