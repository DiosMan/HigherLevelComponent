import React , { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import * as actions from '../actions/index';

class Header extends Component {

    authButton() {
        if (this.props.authenticated) {
            return <button onClick={() => this.props.authenticate(false)} className="btn btn-primary" >Sign Out</button>;
        }

        return <button onClick={() => this.props.authenticate(true)} className="btn btn-primary">Sign In</button>;
    }

    render() {
        return (
            <nav className="navbar navbar-light">
                <ul className="nav navbar-nav">
                    <li className="nav-item">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/resources">resources</Link>
                    </li>
                    <li className="nav-item">
                        {this.authButton()}
                    </li>
                </ul>
            </nav>
        );
    }
}

function mapStateToProps(state){
    return { authenticated: state.authenticated };
}

export default connect(mapStateToProps,actions)(Header);