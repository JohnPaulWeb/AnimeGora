'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

const characters = [
  {
    id: 1,
    image: '/ayanokoji.jpg',
    name: 'Character 1'
  },
  {
    id: 2,
    image: '/tokyo.jpg',
    name: 'Character 2'
  },
  {
    id: 3,
    image: '/puni.jpg',
    name: 'Character 3'
  },
  {
    id: 4,
    image: '/fairy.jpg',
    name: 'Character 4'
  }
]

export function Character() {
  const [currentPage, setCurrentPage] = useState(0)
  const charactersPerPage = 2 // Adjust to show fewer characters per page if needed
  const totalPages = Math.ceil(characters.length / charactersPerPage)

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages)
  }

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages)
  }

  const displayedCharacters = characters.slice(
    currentPage * charactersPerPage,
    (currentPage + 1) * charactersPerPage
  )

  return (
    <div className="relative flex h-full w-full items-center justify-end">
      <div className="grid grid-cols-2 gap-2 md:grid-cols-4 md:gap-4">
        {displayedCharacters.map((character) => (
          <div
            key={character.id}
            className="relative aspect-[3/7] w-full max-w-[300px] overflow-hidden"
          >
            <Image
              src={character.image}
              alt={character.name}
              fill
              className="object-cover"
              priority
            />
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <div className="absolute bottom-0 right-0 flex items-center space-x-4">
        <Button
          variant="outline"
          size="icon"
          onClick={prevPage}
          className="border-gray-700 bg-black/50 text-gray-300 hover:bg-black/70"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={nextPage}
          className="border-gray-700 bg-black/50 text-gray-300 hover:bg-black/70"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}
