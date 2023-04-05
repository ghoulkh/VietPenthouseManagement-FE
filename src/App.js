import './App.css';
import MapContainer from "./Component/Map/MapContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Component/Login/Login";


function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/"
                           element={
                        <Login/>
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

export default App;
