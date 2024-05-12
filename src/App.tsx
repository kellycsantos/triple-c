import Card from './components/Card'
import iconSedans from './assets/icon-sedans.svg'
import iconSuvs from './assets/icon-suvs.svg'
import iconLuxury from './assets/icon-luxury.svg'

import './App.scss'

function App() {

  return (
    <>
      <main>
        <article role='cars'>
          <Card 
              variable="sedans cars" 
              icon={iconSedans} 
              altIcon='Sedans'
              link='#'
              title="sedans" 
              text="Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city 
  or on your next road trip."/>
          <Card 
              variable="suvs" 
              icon={iconSuvs} 
              altIcon='Suvs'
              link='#'
              title="SUVs" 
              text="Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation 
  and off-road adventures."/>

          <Card 
              variable="luxury" 
              icon={iconLuxury} 
              altIcon='Luxury cars'
              link='#'
              title="Luxury" 
              text="Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury 
  rental and arrive in style."/>
        </article>
      </main>
    </>
  )
}

export default App
