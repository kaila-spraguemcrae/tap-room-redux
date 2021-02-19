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
    const { dispatch } = this.props;
    const action = a.addKeg(newKeg);
    dispatch(action);
    this.setState({
      formVisibleOnPage: false
    });
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
        kegList = {this.props.masterKegList} 
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

KegControl.propTypes = {
  masterKegList: PropTypes.object,
}

const mapStateToProps = state => {
  return {
    masterKegList: state
  }
}

KegControl = connect(mapStateToProps)(KegControl);

export default KegControl;