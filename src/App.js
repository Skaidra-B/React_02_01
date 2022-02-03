import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import AllPostsPage from "./pages/AllPostsPage";
import SinglePostPage from "./pages/SinglePostPage";
import UsernameIdPage from "./pages/UsernameIdPage";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<AllPostsPage/>}/>
                    <Route path="/user/:username" element={<SinglePostPage/>}/>
                    <Route path="/post/:username/:id" element={<UsernameIdPage/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
