
import { Navbar } from './Navbar';
import { Character } from './Character';

export function EmailSignup() {
  return (
    <main className="min-h-screen bg-[#121212]">
      <Navbar />
      
      <div className="relative mx-auto min-h-screen max-w-7xl px-4 pt-20">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Left Content */}
          <div className="flex flex-col justify-center space-y-6 py-12">
            <div className="relative h-24 w-24">
              <img
                src="/avatar.jpg"
                alt="Huang Long Logo"
                className="h-full w-full object-contain"
              />
            </div>
            <h1 className="text-6xl font-bold tracking-wider text-white">
              Ayanokoji
            </h1>
            <div className="h-px w-full bg-gradient-to-r from-[#B8860B] to-transparent" />
          </div>

          {/* Right Content - Character Gallery */}
          <div className="relative h-[80vh]">
            <Character />
          </div>
        </div>
      </div>
    </main>
  );
}
