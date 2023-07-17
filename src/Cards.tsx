import card1 from './assets/1.png'
import card2 from './assets/2.jpg'
import card3 from './assets/3.jpg'
import card4 from './assets/4.jpg'
import card5 from './assets/5.jpg'

export function Cards() {
  return (
    <div className="flex flex-col justify-start items-center m-10 opacity-100">
      <img className='w-80 rounded-lg mb-10' src={card1} alt="" />
      <img className='w-80 rounded-lg mb-10' src={card2} alt="" />
      <img className='w-80 rounded-lg mb-10' src={card3} alt="" />
      <img className='w-80 rounded-lg mb-10' src={card4} alt="" />
      <img className='w-80 rounded-lg mb-10' src={card5} alt="" />

    </div>
  )
}

