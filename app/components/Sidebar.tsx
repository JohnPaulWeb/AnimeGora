import { BarChart3, Component, Grid, LayoutDashboard, Tags } from 'lucide-react'
import Link from "next/link"

export function Sidebar() {
  return (
    <div className="flex h-screen w-64 flex-col border-r border-gray-800 bg-gray-900/50">
      <div className="p-6">
        <Link className="flex items-center gap-2 font-semibold" href="#">
          <span className="text-blue-400">Light</span>
          <span>Blue</span>
        </Link>
      </div>
      <nav className="flex-1 space-y-2 p-4">
        <Link
          className="flex items-center gap-3 rounded-lg bg-gray-800 px-3 py-2 text-sm font-medium"
          href="#"
        >
          <LayoutDashboard className="h-5 w-5 text-gray-400" />
          Dashboard
        </Link>
        <Link
          className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-gray-400 hover:bg-gray-800"
          href="#"
        >
          <Grid className="h-5 w-5" />
          Anime
        </Link>
        <Link
          className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-gray-400 hover:bg-gray-800"
          href="#"
        >
          <Component className="h-5 w-5" />
          History
        </Link>
        <Link
          className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-gray-400 hover:bg-gray-800"
          href="#"
        >
          <Tags className="h-5 w-5" />
          Limits
        </Link>
        <Link
          className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-gray-400 hover:bg-gray-800"
          href="#"
        >
          <BarChart3 className="h-5 w-5" />
          Projects
        </Link>
      </nav>
    </div>
  )
}

  