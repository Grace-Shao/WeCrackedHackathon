import Image from "next/image";
import Link from "next/link";
import gamestock1 from "../public/gamestock1.png";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center">
      <h1 className="text-2xl">
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      <Image src= "/gamestock2.png" alt = "GameStock Logo" 
        width={700} height={500}/>
        <br></br>
      </h1>
      
        <h2>
          <div className="flex justify-center " style={{ fontSize: '1.5rem'}}>
            Power up your portfolio with video game stock investments. Roblox, Nintendo, etc.
          </div>
        <div className="fade-in">
        <br></br>
        <br></br>
        <br></br>
        <div className="flex space-x-4 fade-in p-4 justify-center">
          <div className="card rounded-lg ">
            <button className="text-white py-2 px-4 rounded mr-2 ">Start Investing!</button> 
          </div>
          <div className="card rounded-lg">
          <button className="text-white py-2 px-4 rounded">Explore Stocks</button>
          </div>
          </div>
          </div>
      </h2>

    </main>
  );
}
