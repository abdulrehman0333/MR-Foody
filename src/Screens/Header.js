import React from 'react';
import { Link } from 'react-router-dom';
import SignedInLinks from '../Auth/SignedInLinks';
import SignedOutLinks from '../Auth/SignedOutLinks';
import { connect } from 'react-redux';
import Dashboard from '../Screens/Dashboard';
import SignIn from './SignIn';


const Navbar = (props) => {
    const { auth, profile } = props;
    console.log("navabr auth===> success",auth)
    const links = auth.uid ? <SignedInLinks profile={profile} /> : <SignedOutLinks />;
    return (
        <nav className="nav-wrapper blue">
            <div className="container">
                <Link to="/" component={SignIn} className="brand-logo"><span style={{fontFamily: "Segoe UI" , marginLeft: "-12in"}} >MR-Foody</span></Link>
                {links}
            </div>
        </nav>
    )
};

const mapStateToProps = (state) => {
    console.log("Navbar ===>",state);
    return {
        auth : state.firebase.auth,
        profile: state.firebase.profile
    }
}

export default connect(mapStateToProps)(Navbar);