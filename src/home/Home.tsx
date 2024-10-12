import Footer from '../components/footer/footer'
import Navigation from '../components/navigation/Navigation'
import Portfolio from '../components/portfolio/portfolio'
import Resume from '../components/resume/resume'
import './Home.scss'

export default function Home() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Navigation />
        <Resume />
        <Portfolio />
        <Footer/>
      </div>
    </>
  )
}


