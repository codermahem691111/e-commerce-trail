import Image from "next/image";
import Hero from './(components1)/Hero'
import DownSection from './(components1)/DownSection'
import Flyer from './(components1)/Flyer'
import Cards from './(components1)/Cards1'
import Fashion from './(components1)/Fashion'
import Cards2 from './(components1)/Cards2'
import Flyer2 from './(components1)/Flyer2'
import Cards3 from './(components1)/Cards3'
export default function Home() {
  return (
    <>
    
       <Hero/> 
       <Flyer2/>
       <Cards2/>
       <Fashion/>
       <Cards3/>
       <Cards/>
       <Flyer/>
       <DownSection/>  
    
    </>
  );
}
