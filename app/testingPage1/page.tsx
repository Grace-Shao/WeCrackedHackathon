import Image from "next/image";
import Head from 'next/head';
import Link from "next/link";

export default function Home() {
  return (
    <main> 
      <Head>
        <link rel="preload" 
        href="C:\Users\kelec\Downloads\WeCracked\WeCrackedHackathon\app\globals.css" />
      </Head>
      <div className="text=4xl">
      <div></div>
      <Image src= "/gamestock logo.png" alt = "Logo" width={70} height={70} layout="fixed" />
      </div>
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
