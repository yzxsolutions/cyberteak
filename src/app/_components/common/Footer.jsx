import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer data-scroll-section className="relative bg-black text-white py-16 border-t border-white/10">
      <div className="container mx-auto text-center flex flex-col items-center gap-4">
        <Image src="/images/cyberteak_logo.svg" alt="Codeteak Logo" width={120} height={120} />
        <p className="text-gray-400">
          Service is provided by <a href="https://codeteak.com" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-400 transition-colors hover:text-blue-300">Codeteak Technologies Pvt Ltd</a>.
        </p>
        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-2">
            <Link href="/" className="text-gray-300 hover:text-white transition-colors">Home</Link>
            <Link href="/#services" className="text-gray-300 hover:text-white transition-colors">Services</Link>
            <Link href="/#about" className="text-gray-300 hover:text-white transition-colors">About</Link>
            <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link>
        </nav>
        <p className="mt-4 text-sm text-gray-500">
          &copy; {new Date().getFullYear()} CyberTeak. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

