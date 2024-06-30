import About from "./sections/About"
import Blog from "./sections/Blog"
import Event from "./sections/Event"
import Footer from "./sections/Footer"
import Gallery from "./sections/GalleryPondok"
import Hero from "./sections/Heros"
import Ulasan from "./sections/Ulasan"


function App() {
  return (<div className="font-poppins">
    <Hero />
    <About />
    <Gallery />
    <Ulasan />
    <Blog />
    <Event />
    <Footer />
  </div>)
}
export default App