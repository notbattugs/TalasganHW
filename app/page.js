import Image from 'next/image';
import Header from './components/Header';
import Comp1 from './components/Comp1';
import Comp2 from './components/Comp2';
import Comp3 from './components/Comp3';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div>
      <Header />
      <Comp1 />
      <Comp2 />
      <Comp3 />
      <Footer />
    </div>
  );
}
