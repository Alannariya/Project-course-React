import React from 'react'
import { GiCompass, GiDiamondHard, GiStabbedNote } from 'react-icons/gi'
export const links = [
  {
    id: 1,
    text: 'главная',
    url: '/',
  },
  {
    id: 2,
    text: 'о нас',
    url: '/about',
  },
  {
    id: 3,
    text: 'галерея',
    url: '/gallery',
  },
]

export const services = [
  {
    id: 1,
    icon: <GiCompass />,
    title: 'познание мира',
    text:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi',
  },
  {
    id: 2,
    icon: <GiDiamondHard />,
    title: 'расширение кругозора',
    text:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi',
  },
  {
    id: 3,
    icon: <GiStabbedNote />,
    title: 'история',
    text:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi',
  },
]

export const gallery_url = 'https://6490cf9d2f2c7ee6c2c7845f.mockapi.io/paintings'

export const single_painting_url = `https://6490cf9d2f2c7ee6c2c7845f.mockapi.io/paintings?id=`
