'use client'
import { useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { BsFillMicFill } from 'react-icons/bs'
import { useRouter } from 'next/navigation'

const HomeSearch = () => {
  const [input, setInput] = useState('');
  const [randomSearchLoading, setRandomSearchLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input) return;
    const searchTerm = input.trim();
    router.push(`/search/web?query=${searchTerm}`);
    window.open(url, '_blank');
  }

const randomSearch = async (e) => {
    setRandomSearchLoading(true);
    const word = await fetch('https://random-word-api.herokuapp.com/word')
    const data = await word.json();
    const searchTerm = data[0];
    router.push(`/search?query=${searchTerm}`);
}

  return (
    <>
      <form onSubmit={ handleSubmit } className='flex w-full mt-5 mx-auto max-w-[90%] border border-gray-200 px-5 py-3 rounded-full hover:shadow-md focus-within:shadow-md transition-shadow sm:max-w-xl lg:max-w-2xl'>
        <AiOutlineSearch className='text-xl text-gray-500 mr-3' />
        <input 
          type="text" 
          placeholder="Search Google or type a URL" 
          className="flex-grow focus:outline-none" 
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <BsFillMicFill className='text-lg' />
      </form>
      <div className='flex flex-col space-y-2 sm:space-y-0 justify-center sm:flex-row mt-58 sm:space-x-4'>
        <button className='bg-[#f8f9fa] rounded-md text-sm text-gray-800 hover:ring-gray-200 focus:outline-none active:ring-gray-300 hover:shadow-md w-36 h-10 transition-shadow'
        onClick={handleSubmit}
        > Google Search </button>
        <button className='bg-[#f8f9fa] rounded-md text-sm text-gray-800 hover:ring-gray-200 focus:outline-none active:ring-gray-300 hover:shadow-md w-36 h-10 transition-shadow disabled:opaccity-80 disabled:shadow-sm'
        disabled={randomSearchLoading}
        onClick={ randomSearch}
        > {randomSearchLoading ? 'Loading...' : 'I am Feeling Lucky'} </button>

      </div>
    </>
  )
}

export default HomeSearch
