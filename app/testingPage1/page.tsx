import Image from "next/image";
import Link from "next/link";
import gamestock1 from "../public/gamestock1.png";

export default function Home() {
  return (
    <main>
      <nav className="flex items-center justify-center p-4">
        <div className="flex items-center text-4xl space-x-8">
          <div className="text-xl hover:text-black">
              <Link legacyBehavior href="/">
                <a className="hover:underline text-white font-mono">home </a>
              </Link>
              <Link legacyBehavior href="/explore">
                <a className="hover:underline text-white font-mono">explore </a>
              </Link> 
              <Link legacyBehavior href="/contact">
                <a className="hover:underline text-white font-mono">contact </a>
              </Link>
              <Link legacyBehavior href="/news">
                <a className="hover:underline text-white font-mono">news </a>
              </Link>
          </div>
        </div>
      </nav>
      <h1 className="flex flex-col items-center justify-center text=2xl">

        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      <div >
        <Image src= "/gamestock2.png" alt = "GameStock Logo" 
          width={700} height={500} layout="fixed"/>
          <br></br>
      </div>
      </h1>
      
        <h2>
          <div className="flex justify-center " style={{ fontSize: '1.5rem'}}>
            <div className = "slide-down">
            Power up your portfolio with video game stock investments. Roblox, Nintendo, etc.
            
            </div>
          </div>
          
        <div className="fade-in">
        <br></br>
        <br></br>
        <br></br>
        <div className="flex space-x-4 fade-in p-4 justify-center">
          <div className="card rounded-lg ">
            <button className="text-white py-2 px-2 rounded 
            mr-2 bg-grey900 hover:bg-blue-500 hover:scale-105 transition-all duration-300" >Start Investing!</button> 
          </div>
          <div className="card rounded-lg">
            <button className="text-white py-2 px-4 rounded 
            mr-2 bg-grey-900 hover:bg-pink-500 hover:scale-105 transition-all duration-300"
            >Explore Stocks</button>
          </div>
          </div>
          </div>
      </h2>
      <section className="py-8 text-center">
        <div className="flex items-center justify-center space-x-8">
          <div className="marine-invest">
            <br></br>
            <br>
            </br>
            <Image src="/row.png" alt="Roblox Logo" width={70} height={70} />
          </div>
          <div className="marine-invest">
            <Image src="/blizz.png" alt="Blizzard Logo" width={70} height={70} />
          </div>
          <div className="marine-invest">
            <Image src="/nv.png" alt="Nvidia Logo" width={70} height={70} />
          </div>
          <div className="marine-invest">
            <Image src="/taketwo.png" alt="Take Two" width={70} height={70} />
          </div>
          <br></br>
          <div className="marine-invest">
            <Image src="/ubisoft.png" alt="Ubisoft" width={70} height={70} />
          </div>  
        </div>
      </section>

      

    </main>
  );
}
