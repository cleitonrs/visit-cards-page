import { useEffect, useState } from 'react'
import * as VCards from './services/visitCards'
import { VisitCards } from './types/VisitCards'

export function Cards() {
  const [loading, setLoading] = useState(false)
  const [visitCards, setVisitCards] = useState<VisitCards[]>([])

  useEffect(() => {
    const getVisitCards = async () => {
      setLoading(true)
      setVisitCards(await VCards.getAll())
      setLoading(false)
    }
    void getVisitCards()
  }, [])

  return (
    <div className='flex flex-col justify-start items-center m-10'>
      {loading && 
        <div>
          <div className='text-6xl text-center m-10'>✋</div>
          <div className='text-4xl'>
            Carregando... 
          </div>
        </div>
      }
      {!loading && visitCards.map((item) => (
        <img key={item.url} className='w-80 rounded-lg mb-10' src={item.url} alt={item.name} />
      ))}
    </div>
  )
}