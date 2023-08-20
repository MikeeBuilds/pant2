const Footer: React.FC = () => {
  return (
    <div className=import '@/styles/globals.css';
import type { AppProps } from 'next/app';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Roadmap from '@/components/Roadmap';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-grow">
        <Component {...pageProps} />
        <Roadmap />
      </div>
      <Footer />
    </div>
  );
}
>
      <div className="flex space-x-4">
        <div>docs</div>
        <div>media kit</div>
      </div>
      <div className="text-lg text-gray font-arial">
        <span>©</span>
        <span className="font-medium font-metropolis"> Pantheon Ecosystem</span>
      </div>
      <div className="flex space-x-4">
        <img className="w-[30px] h-[30px] object-cover" alt="" src="/discord@2x.png" />
        <img className="w-[30px] h-[30px] object-cover" alt="" src="/twitter@2x.png" />
        <img className="w-[30px] h-[30px] object-cover" alt="" src="/medium@2x.png" />
      </div>
    </div>
  );
};

export default Footer;
