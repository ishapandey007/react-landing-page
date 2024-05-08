import { data } from './data'
import React, { useState } from 'react'
import { Benefit } from '../../components'

export const Showcase = () => {
  const [imageUrl, setImageUrl] = useState('')

  const fetchRandomImage = () => {
    fetch('https://picsum.photos/200')
      .then(response => {
        if (response.ok) {
          return response.url
        }
        throw new Error('Network response was not ok.')
      })
      .then(url => setImageUrl(url))
      .catch(error => console.error('Error fetching image:', error))
  }

  return (
    <>
      <ul
        id="showcase"
        className="container flex flex-col items-center justify-center gap-20 p-5 m-auto lg:flex-row lg:gap-5 lg:justify-between max-w-[70rem]"
      >
        {data.map((item, idx) => {
          const isEven = idx % 2 === 0 ? true : false
          return (
            <li
              key={item.title}
              className={
                isEven
                  ? 'md:ml-[5rem] lg:ml-0 lg:mt-[2rem]'
                  : 'md:mr-[5rem] lg:mr-0 lg:mb-[2rem]'
              }
            >
              <Benefit info={item} idx={idx} />
            </li>
          )
        })}
      </ul>
      <div className="flex flex-col justify-center items-center gap-3">
        <button
          onClick={fetchRandomImage}
          className=" mb-6 w-fit  p-3 font-bold transition-all duration-500 rounded-md bg-cyan-100 text-midnight hover:bg-cyan-400"
        >
          Get Image
        </button>
        {imageUrl && (
          <img
            className="rounded-md mb-32"
            width={'200px'}
            height={'200px'}
            src={imageUrl}
            alt="Random"
          />
        )}
      </div>
    </>
  )
}
