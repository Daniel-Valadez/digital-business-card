import Info from "./components/Info";
import About from './components/About'; 
import Interests from './components/Interests'
import Footer from "./components/footer";

function App() {
    return(
        <main class='container'>
            <div class='container-inner'>
                <Info /> 
                <About /> 
                <Interests /> 
                <Footer />
            </div>
        </main>
    )
}

export default App;
