import Link from 'next/link';
import { COMPANY, CONTACT } from '@/constants';
import { PRODUCTS } from '@/constants';

export function Footer() {
  return (
    <footer className="relative border-t border-white/5 overflow-hidden" style={{background:'#04080f'}}>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-48 rounded-full blur-3xl opacity-10 pointer-events-none" style={{background:'radial-gradient(ellipse, #00d4ff, transparent)'}} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 py-16">
          {/* Brand */}
          <div className="col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-xl flex items-center justify-center">
                <span className="text-[#060b14] font-black text-lg">Y</span>
              </div>
              <div>
                <span className="text-white font-bold">YANOVA</span>
                <span className="text-cyan-400 font-bold"> AI LABS</span>
              </div>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed max-w-xs mb-4">Intelligence for Every Business. Enterprise AI platform for infrastructure automation, operations, and analytics.</p>
            <p className="text-cyan-500/60 text-xs font-semibold tracking-widest uppercase">{COMPANY.slogan}</p>
            <div className="flex items-center gap-3 mt-5">
              {[[CONTACT.social.linkedin,'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z'],
               [CONTACT.social.twitter,'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.857L1.5 2.25H8.63l4.259 5.63L18.244 2.25z'],
               [CONTACT.social.github,'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z']
              ].map(([href, path]) => href ? (
                <a key={href as string} href={href as string} target="_blank" rel="noopener noreferrer"
                   className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-500 hover:text-cyan-400 transition-smooth" style={{background:'rgba(255,255,255,0.04)',border:'1px solid rgba(255,255,255,0.07)'}}>
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d={path as string}/></svg>
                </a>
              ) : null)}
            </div>
          </div>

          {/* Products */}
          <div>
            <p className="text-white text-xs font-bold uppercase tracking-widest mb-5">Products</p>
            <ul className="space-y-3">
              {PRODUCTS.map(p => (
                <li key={p.id}><Link href="/products" className="text-slate-500 hover:text-cyan-400 transition-colors text-sm">{p.name}</Link></li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <p className="text-white text-xs font-bold uppercase tracking-widest mb-5">Company</p>
            <ul className="space-y-3">
              {[['About','/about'],['Solutions','/solutions'],['Contact','/contact'],['Blog','#'],['Resources','#']].map(([l,h]) => (
                <li key={l as string}><Link href={h as string} className="text-slate-500 hover:text-cyan-400 transition-colors text-sm">{l}</Link></li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <p className="text-white text-xs font-bold uppercase tracking-widest mb-5">Legal</p>
            <ul className="space-y-3">
              {[['Privacy Policy','#'],['Terms of Service','#'],['Security','#'],['Compliance','#']].map(([l,h]) => (
                <li key={l as string}><Link href={h as string} className="text-slate-500 hover:text-cyan-400 transition-colors text-sm">{l}</Link></li>
              ))}
            </ul>
            <div className="mt-8 space-y-2">
              <a href={`mailto:${CONTACT.email}`} className="block text-xs text-slate-600 hover:text-cyan-400 transition-colors">{CONTACT.email}</a>
              <p className="text-xs text-slate-600">{CONTACT.address}</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-600 text-sm">© {new Date().getFullYear()} Yanova Labs Pvt. Ltd. All rights reserved.</p>
          <p className="text-slate-600 text-xs">Intelligence for Every Business · yanovalabs.com</p>
        </div>
      </div>
    </footer>
  );
}
