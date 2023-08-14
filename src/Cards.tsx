import { useEffect, useState } from 'react'
import * as VCards from './services/visitCards'
import { VisitCards } from './types/VisitCards'
import { MagnifyingGlass } from '@phosphor-icons/react'

export function Cards() {
  const [loading, setLoading] = useState(false)
  const [productsCards, setProductsCards] = useState<VisitCards[]>([])
  const [search, setSearch] = useState('')
  
  useEffect(() => {
    const getVisitCards = async () => {
      setLoading(true)
      setProductsCards(await VCards.getAll())
      setLoading(false)
    }
    void getVisitCards()
  }, [])

  const filteredProductsCards = productsCards.filter(item => item.name.includes(search.toUpperCase()))

  console.log(filteredProductsCards)

  return (
    <div className='flex flex-col justify-start items-center m-10'>
      <div className='flex mr-4 gap-2 items-center justify-center'>
        <MagnifyingGlass className='self-start text-zinc-300' size={32} />
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type='text'
          placeholder='Pesquise aqui'
          className='text-zinc-500 p-1 mb-4 rounded-sm bg-zinc-100 z-50 w-[80%]'
        />
      </div>
      {loading ? 
        (<div className='flex flex-col justify-center items-center'>
          <div className='mt-10 mb-5 relative w-20 h-20 rounded-full before:content-[""] before:absolute before:rounded-[inherit] before:w-full before:h-full before:bg-gradient-to-r before:from-fuchsia-500 before:to-cyan-500 animate-spinSlow after:content-[""] after:absolute after:rounded-[inherit] after:w-[85%] after:h-[85%] after:bg-zinc-900 after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2'>     
          </div>
          <span className='text-2xl'>Carregando...</span>
        </div>) : null
      }
      
      {!loading ? filteredProductsCards.map((item) => (
        <div key={item.url}>
          <div className='pt-4 text-sm italic text-zinc-200'>{item.name.slice(0, -4)}</div>
          <img
            src={item.url} 
            className='w-80 rounded-lg mb-10 shadow-cyan-900 shadow-xl' 
            alt={item.name} 
          />
        </div>
      )) : null}
    </div>
  )
}