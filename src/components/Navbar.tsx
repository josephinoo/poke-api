
import Image from 'next/image'
export default function Navbar() {
    return (
      <nav className="py-5 bg-black bg-opacity-70 flex-col justify-start items-center gap-2.5 inline-fle">

        <div className="flex items-center justify-center">
        <div className="mr-6">
              <Image
                src="/assets/pokemon-logo.png"
                alt="Logo Pokemon"
                width={100}
                height={100}
              />
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="flex space-x-4 ">
              <a href="#" className="text-white">
                Home
              </a>
              <a href="#" className="text-white">
                Pokedex
              </a>
            </div>
          </div>
      </nav>
    );
  }