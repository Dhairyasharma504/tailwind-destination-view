import Footer from './Footer';
import HomeHero from '../homeSection/HomeHero';

import Navbar from './Navbar';
import Hero from './Hero';

const Layout = ({ isHome, heroBgImage, children }) => (
  <div className=" ">
    <Navbar />
    {isHome ? <HomeHero /> : <Hero bgImage={heroBgImage} />}
    {children}
    <Footer />
  </div>
);

export default Layout;
