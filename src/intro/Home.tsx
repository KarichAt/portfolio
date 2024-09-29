import Navigation from '../components/navigation/Navigation'
import Portfolio from '../components/portfolio/portfolio'
import './Home.scss'

export default function Home() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Navigation />
        <Portfolio />
      </div>
    </>
  )
}


