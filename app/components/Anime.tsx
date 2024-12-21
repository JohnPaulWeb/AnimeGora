import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

interface AnimeCard {
  title: string
  episodes: number
  image: string
}

const animeReleases: AnimeCard[] = [
  {
    title: "The Classroom of the Elite",
    episodes: 22,
    image: "/ayanokoji.jpg",
  },
  {
    title: "Tokyo Revengers",
    episodes: 10,
    image: "/tokyo.jpg",
  },
  {
    title: "Let This Grieving Soul Retire",
    episodes: 11,
    image: "/soul.jpg",
  },
  {
    title: "As a Reincarnated Aristocrat, I'll Use My Appraisal Skill",
    episodes: 22,
    image: "/aristo.jpg",
  },
  {
    title: "Tower of God Season 2: Workshop Battle",
    episodes: 23, 
    image: "/tower.png",
  },
  {
    title: "TsumaSho",
    episodes: 11,
    image: "/tsuma.jpg",
  },
  {
    title: "Shangri-La Frontier Season 2",
    episodes: 34,
    image: "/shangri.jpg",
  },
  {
    title: "Fairy Tail: 100 Years Quest",
    episodes: 22,
    image: "/fairy.jpg",
  },
  {
    title: "Punirunes: Puni 2",
    episodes: 10,
    image: "/puni.jpg",
  },
]
export default function Anime() {
    return (
        <div className="bg-black min-h-screen p-6">
             <h2 className="mb-12 text-center text-4xl font-bold">
          Why Choose <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">GoGoraAnime</span>?
        </h2>
      {/* <h1 className="text-4xl font-light text-white mb-6">GoGoraAnime</h1> */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {animeReleases.map((anime, index) => (
          <Card
            key={index}
            className="group relative overflow-hidden bg-gray-900 rounded-lg hover:ring-2 hover:ring-primary transition-all duration-300"
          >
            <CardContent className="p-0">
              <div className="relative aspect-[16/9]">
                <Image
                  src={anime.image}
                  alt={anime.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute top-2 right-2 bg-black/80 px-2 py-1 rounded text-white font-medium">
                  {anime.episodes}
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h2 className="text-white font-medium text-lg line-clamp-2">
                    {anime.title}
                  </h2>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
    )
}