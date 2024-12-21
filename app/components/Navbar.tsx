"use client"


import { useState } from 'react'
import Link from 'next/link'
import { ChevronDown, Menu, User } from 'lucide-react'
import { Button } from '@/components/ui/button'

const navItems = [
  { name: 'HOME', href: '/' },
  { name: 'NEWS', href: '/news' },
  { name: 'RESONATORS', href: '/resonators' },
  { name: 'LORE', href: '/lore' },
  { name: 'REGIONS', href: '/regions' },
  { name: 'TOP-UP Center', href: '/top-up' },
]

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 z-50 w-full bg-black/90 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-xl font-bold text-white">GoGoraAnime</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm ${
                  item.name === 'RESONATORS' 
                    ? 'text-[#B8860B]' 
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Language and User */}
          <div className="hidden items-center space-x-4 md:flex">
            <Button variant="ghost" className="text-gray-300">
              English <ChevronDown className="ml-1 h-4 w-4" />
            </Button>
            <Button size="icon" variant="ghost">
              <User className="h-5 w-5 text-gray-300" />
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block rounded-md px-3 py-2 text-base text-gray-300 hover:bg-gray-700 hover:text-white"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}   