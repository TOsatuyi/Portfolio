import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-black py-24 border-t border-white/10 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_var(--tw-gradient-stops))] from-neutral-900 via-black to-black pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col md:flex-row justify-between items-start gap-12">

        {/* Navigation Links */}
        <div className="flex flex-col gap-4">
          <h3 className="text-white text-lg font-bold mb-2">Navigation</h3>
          <Link href="/#projects" className="text-gray-400 hover:text-emerald-400 transition-colors font-medium">Projects</Link>
          <Link href="/#profile" className="text-gray-400 hover:text-emerald-400 transition-colors font-medium">About</Link>
          <Link href="/talk" className="text-gray-400 hover:text-emerald-400 transition-colors font-medium">Contact</Link>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col gap-4">
          <h3 className="text-white text-lg font-bold mb-2">Contact</h3>
          <a href="mailto:danielachigbue55@gmail.com" className="text-gray-400 hover:text-emerald-400 transition-colors font-medium">
            danielachigbue55@gmail.com
          </a>
          <a href="tel:+2203591788" className="text-gray-400 hover:text-emerald-400 transition-colors font-medium">
            +220 359 1788
          </a>
        </div>

        {/* Social Links */}
        <div className="flex flex-col gap-4">
          <h3 className="text-white text-lg font-bold mb-2">Social</h3>
          <a href="https://github.com/GGE-Danny" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-emerald-400 transition-colors font-medium">GitHub</a>
          <a href="https://www.linkedin.com/in/daniel-achigbue/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-emerald-400 transition-colors font-medium">LinkedIn</a>
        </div>

      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 mt-16 pt-8 border-t border-white/5 text-center md:text-left">
        <p className="text-gray-600 text-sm font-medium">
          © {new Date().getFullYear()} GGE | DANNY. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
