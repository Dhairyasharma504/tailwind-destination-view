import Footer from './global/Footer';

import Navbar from './global/Navbar';
import Hero from './Hero';

const Layout = ({ children }) => (
  <div className=" ">
    <Navbar />
    <Hero />
    {children}
    <Footer />
  </div>
);

export default Layout;
