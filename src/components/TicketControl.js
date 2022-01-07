import React from 'react';
import NewTicketForm from './NewTicketForm';
import TicketList from './TicketList';

class TicketControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainTicketList: [] //this will hold all the new tickets made
    };
  }

  handleClick = () => {
    this.setState(prevState => ({
      formVisibleOnPage: !prevState.formVisibleOnPage
    }));
  }

  render(){  
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.NewTicketForm) {
      currentlyVisibleState = <NewTicketForm />;
      buttonText = "Return to ticket list";
    } else {
      currentlyVisibleState = <TicketList ticketList={this.state.mainTicketList} />;//this is how we pass mainTicketList to the ticketlist where ticketList acts as the property to Ticketlist
      buttonText = "Add Ticket";
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }

}

export default TicketControl;