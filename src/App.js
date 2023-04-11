import './App.css';
import MapContainer from "./Component/Map/MapContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Component/Login/Login";
import {Component} from "react";

export default class HouseManagement extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoggedIn: !!JSON.parse(localStorage.getItem('USER')),
            loggedInUserObj: JSON.parse(localStorage.getItem('USER')) ? { username: JSON.parse(localStorage.getItem('USER'))['userInfo'] } : {}
        }
        this.setLoggedInUser = this.setLoggedInUser.bind(this)
    }

    setLoggedInUser(loggedInUserObj) {
        this.setState({ isLoggedIn: true, loggedInUserObj: { ...loggedInUserObj } })
    }

    render() {
        return (
            <div className="App">
                <BrowserRouter>
                    <Routes>
                        <Route path="/"
                               element={
                                   <Login loginProp={this.setLoggedInUser}/>
                               }/>
                        <Route>
                            <Route path="/location"
                                   element={
                                       <MapContainer></MapContainer>
                                   }/>
                        </Route>
                    </Routes>
                </BrowserRouter>
            </div>
        );
    }
}
