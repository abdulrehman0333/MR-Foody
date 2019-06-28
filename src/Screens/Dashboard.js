import React, { Component } from 'react'
import Notifications from './Notifications';
import MenuList from '../Menus/MenuList';
import { connect } from 'react-redux';
// import { firestoreConnect } from 'react-redux-firebase';
// import { compose } from 'redux';
import { Redirect } from 'react-router-dom';
import Tag from '../Components/Tags';
import Grid from '../Components/Grids';
import Footer from './Footer'
import Chips from '../Components/CountryChips';
import RestChips from "../Components/RestaurantChips";

class Dashboard extends Component {
    render() {
        console.log("Dashboard Props", this.props)
        const { menus, auth } = this.props;
        if (!auth.uid) return <Redirect to='/Dashboard' />

        return (
            <div className="dashboard">
                <div className="app_bg" style={{ width: "100%", height: "545px" }}>
                    <Tag />
                </div>
                <div className="countryChips">
                    <RestChips />
                </div>
                <div className="App" >
                    <div className="cards" style={{ marginTop: "0.8in" }}>
                        <Grid />
                    </div>
                    <div className="countryChips">
                        <Chips />
                    </div>
                </div>
                <div>
                    <Footer />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log("mapStateToProps Dashbnoard map state to props wala", state)
    return {
        menus: state.menu.menus,
        auth: state.firebase.auth
    }

}

export default connect(mapStateToProps)(Dashboard);