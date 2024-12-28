import { Bell, HelpCircle, Settings } from 'lucide-react'
// import Link from "next/link"
import { Sidebar } from "./Sidebar"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#1a1f37] text-white">
      <div className="flex">
        <Sidebar />
        <div className="flex-1">
          <header className="flex h-16 items-center justify-between border-b border-gray-800 px-6">
            <div className="flex items-center gap-4">
              <Input
                className="w-96 bg-gray-900/50 text-sm"
                placeholder="Search Dashboard"
                type="search"
              />
            </div>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon">
                <Bell className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <HelpCircle className="h-5 w-5" />
              </Button> 
              <Button variant="ghost" size="icon">
                <Settings className="h-5 w-5" />
              </Button>
              <Avatar>
                <AvatarImage src="/avatar.jpg" />
                <AvatarFallback>PS</AvatarFallback>
              </Avatar>
            </div>
          </header>
          <main className="p-6">{children}</main>
        </div>
      </div>
    </div>
  )
}

