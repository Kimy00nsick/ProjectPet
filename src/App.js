import './App.scss';
import First from "./pages/page01";
import MainPage from "./pages/pageBox";
import List from "./pages/detailPage";
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    <Route path='/' element={<MainPage/>}/>
                    <Route path='/menu' element={<List/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;