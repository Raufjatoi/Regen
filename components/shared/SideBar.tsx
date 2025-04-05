"use client"

import { navLinks } from '@/constants'
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from '../ui/button'

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <aside className="h-screen w-64 bg-gradient-to-b from-red-500 via-pink-300 to-blue-900 text-white shadow-lg p-6">
      <div className="flex flex-col h-full justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center justify-center mb-6">
          <Image
            src="/assets/images/logo1.png"
            alt="logo"
            width={180}
            height={28}
          />
        </Link>

        {/* Navigation */}
        <nav className="flex-1">
          <SignedIn>
            <ul className="space-y-2">
              {navLinks.slice(0, 6).map((link) => {
                const isActive = link.route === pathname;

                return (
                  <li key={link.route}>
                    <Link
                      href={link.route}
                      className={`flex items-center gap-3 px-4 py-2 rounded-md transition-all ${
                        isActive
                          ? 'bg-pink-100 bg-opacity-20 text-white backdrop-blur-md'
                          : 'hover:bg-white hover:bg-opacity-10'
                      }`}
                    >
                      <Image
                        src={link.icon}
                        alt={link.label}
                        width={24}
                        height={24}
                        className={`${
                          isActive ? 'brightness-200' : 'brightness-90'
                        }`}
                      />
                      <span>{link.label}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>

            <ul className="space-y-2 pt-6 border-t border-white/20 mt-6">
              {navLinks.slice(6).map((link) => {
                const isActive = link.route === pathname;

                return (
                  <li key={link.route}>
                    <Link
                      href={link.route}
                      className={`flex items-center gap-3 px-4 py-2 rounded-md transition-all ${
                        isActive
                          ? 'bg-pink-100 bg-opacity-20 text-white backdrop-blur-md'
                          : 'hover:bg-white hover:bg-opacity-10'
                      }`}
                    >
                      <Image
                        src={link.icon}
                        alt={link.label}
                        width={24}
                        height={24}
                        className={`${
                          isActive ? 'brightness-200' : 'brightness-90'
                        }`}
                      />
                      <span>{link.label}</span>
                    </Link>
                  </li>
                );
              })}

              <li className="flex justify-center pt-4">
                <UserButton afterSignOutUrl="/" showName />
              </li>
            </ul>
          </SignedIn>

          <SignedOut>
            <Button asChild className='button bg-pink-200 hover:bg-pink-300 bg-cover'>
              <Link href='/sign-in'>Login</Link>
            </Button>
          </SignedOut>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
