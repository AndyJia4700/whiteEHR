import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../../actions/session_actions';
import { FaPlus } from "react-icons/fa";
import { closeModal } from '../../actions/modal_actions';



const mSTP = state => {
    return {
        currentPhysician:  state.session.currentPhysician
    }
}

const mDTP = dispatch => ({
    logout: () => dispatch(logout()),
    closeModal: () => dispatch(closeModal()),
})

class ProfileDropDown extends React.Component{
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e){
        e.preventDefault();
        this.props.logout().then(this.props.closeModal());
        window.location.replace("/")
    }

    render(){
        const {currentPhysician} = this.props
        // debugger;
        return (
          <div className="modal-child-div">
            <div className="modal-child-subdiv">
                <p className="modal-child-div-greeting">Hello {currentPhysician.first_name}</p>
                <br />
                <Link to={`/physicians/${currentPhysician.id}`} className="modal-child-div-button" onClick={this.props.closeModal}>manage account</Link>
            </div>
            
            <div className="modal-child-subdiv">
                <p className="modal-child-div-greeting">create your project</p>
                <Link to="/project/new" onClick={this.props.closeModal}>
                    <FaPlus className="modal-child-div-add"/>
                </Link>
            </div>
            
            <button onClick={this.handleClick} className="modal-child-div-button-logout">logout</button>
          </div>
        );
    }

}

export default connect(mSTP, mDTP)(ProfileDropDown);