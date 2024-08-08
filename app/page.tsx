import Image from "next/image";
import Link from "next/link";
import gamestock1 from "../public/gamestock1.png";
import Navbar from "./components/Navbar";


export default function Home() {
  return (
    <main>
      <Navbar />
      <h1 className="flex flex-col items-center justify-center text=2xl">
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
            <div className = "slide-down" style={{color: "#f397c6", textAlign: "center", fontFamily: "system-ui", fontWeight: 400, textShadow: "1px 0.5px #5b5ff0"}}>
            Power up your portfolio with video game stock investments. Roblox, Nintendo, etc.
            </div>
          </div>
          
        <div className="fade-in">
        
        <div className="flex space-x-4 fade-in p-4 justify-center">
          <div className="card rounded-lg ">
            <Link href="/listOfCompaniesPage">
              <button className="text-white py-2 px-4 rounded 
              mr-2 bg-grey-900 hover:bg-pink-300 hover:scale-105 transition-all duration-300"
              >Explore Stocks!</button>
            </Link>
          </div>
          </div>
          </div>
      </h2>
      <section className="py-8 text-center">
        <div className="flex items-center justify-center space-x-8">
          <div className="marine-invest">
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
