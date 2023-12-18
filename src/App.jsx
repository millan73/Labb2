import './App.css'
import Header from './components/Header'
import TopNavigation from './components/TopNavigation'
import Footer from './components/Footer'

function App() {
    return (
        <div>
            <Header companyName={'Företaget'} />
            <TopNavigation />
            <Footer />
        </div>
    )
}

export default App
