import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { openModal } from '../../actions/modal_actions';

const mSTP = state => ({
    currentPhysician: state.session.currentPhysician
})

const mDTP = dispatch => ({
    openModal: modal => dispatch(openModal(modal))
})
const SessionShow = ({currentPhysician, openModal}) => {
    const sessionLinks = () => (
            <Link to="/login" className="">Log in</Link>
    );
    
    const photo = (currentPhysician && currentPhysician.photoUrl) ? <img src={currentPhysician.photoUrl} className="tiny-photo"/> : <img className="tiny-no-photo"/>
    
    const greeting = () => (
        <a onClick={() => openModal('profileDropDown')}>
            {photo}
        </a>
    );

    return currentPhysician ? greeting() : sessionLinks();

}
export default connect(mSTP, mDTP)(SessionShow);
