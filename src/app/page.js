import Header from "./components/layout/Header";
import Hero from "./components/layout/Hero";
import HomeMenu from "./components/layout/HomeMenu";
import SectionHeaders from "./components/layout/SectionHeaders";

export default function Home() {
  return (
   <>
   <Header />
   <Hero />
   <HomeMenu />
   <section className="text-center my-16">
      <SectionHeaders
      subHeader={'Our Story'}
      mainHeader={'About Us'}
      />
      <div className="max-w-md mx-auto mt-4 text-gray-500 flex flex-col gap-4">
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt quidem ea aliquam nesciunt harum eveniet cum minus, tempore iusto itaque tempora sint error, veniam iure sunt cumque rem adipisci voluptatem!
      </p>
      <p>
        Sapiente natus porro itaque, quas vitae sit repellat deserunt suscipit neque, minima, provident aliquam doloribus adipisci. Velit similique tenetur perspiciatis optio officiis?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit dolorum ea asperiores vitae pariatur ex.
      </p>
      </div>
   </section>
   <section className="text-center my-8">
    <SectionHeaders 
    subHeader={'Don\'t hesitate'}
    mainHeader={'Contact Us'}
    />
    <div className="mt-8">
      <a className="text-4xl underline text-gray-500" href="tel:">+91 87978 8797</a>
    </div>
    
   </section>
   <footer className="border-t p-8 text-center text-gray-500 mt-16">
    &copy; 2024 All rights reserved
   </footer>
   </> 
  )
}
