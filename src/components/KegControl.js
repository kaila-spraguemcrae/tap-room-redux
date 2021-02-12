import React from 'react';
import KegList from './KegList';


class KegControl extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      masterKegList = []
    };
  }

  render () {
    let currentlyVisibleState = null;
    let buttonText = null;
    // if(){
        //ADD form visible on page
    // } else {
    //   currentlyVisibleState = <KegList kegList = {this.state.masterKegList} />;
    //   buttonText = "Add New Keg";
    // }

    return (
      <>
      </>
    );
  }
}

export default KegControl;