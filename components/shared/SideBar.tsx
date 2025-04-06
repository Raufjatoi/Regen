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
    <aside className="hidden md:flex flex-col w-[250px] bg-pink-500 shadow-md min-h-screen px-4 py-6">
      <div className="flex flex-col gap-6 h-full">
        <Link href="/" className="sidebar-logo mb-4">
          <Image src="/assets/images/logo1.png" alt="logo" width={180} height={28} />
        </Link>

        <nav className="flex flex-col justify-between flex-1 overflow-y-auto">
          <SignedIn>
            <ul className="flex flex-col gap-2">
              {navLinks.slice(0, 6).map((link) => {
                const isActive = link.route === pathname;
                return (
                  <li key={link.route}>
                    <Link
                      href={link.route}
                      className={`flex items-center gap-3 px-4 py-2 rounded-lg transition-colors duration-200 group
                        ${isActive 
                          ? 'bg-sky-500 text-white shadow-sm' 
                          : 'text-gray-700 hover:bg-red-800 hover:text-white'
                        }`}
                    >
                      <Image 
                        src={link.icon}
                        alt={link.label}
                        width={24}
                        height={24}
                        className={`${isActive ? 'brightness-200' : 'group-hover:brightness-150'}`}
                      />
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>

            <ul className="flex flex-col gap-2 mt-4">
              {navLinks.slice(6).map((link) => {
                const isActive = link.route === pathname;
                return (
                  <li key={link.route}>
                    <Link
                      href={link.route}
                      className={`flex items-center gap-3 px-4 py-2 rounded-lg transition-colors duration-200 group
                        ${isActive 
                          ? 'bg-sky-500 text-white shadow-sm' 
                          : 'text-gray-700 hover:bg-red-800 hover:text-white'
                        }`}
                    >
                      <Image 
                        src={link.icon}
                        alt={link.label}
                        width={24}
                        height={24}
                        className={`${isActive ? 'brightness-200' : 'group-hover:brightness-150'}`}
                      />
                      {link.label}
                    </Link>
                  </li>
                );
              })}
              <li className="flex items-center px-4 py-2">
                <UserButton afterSignOutUrl='/' showName />
              </li>
            </ul>
          </SignedIn>

          <SignedOut>
            <Button asChild className="button bg-gradient-to-r from-red-500 via-pink-500 to-blue-500 text-white w-full mt-4">
              <Link href="/sign-in">Login</Link>
            </Button>
          </SignedOut>
        </nav>
      </div>
    </aside>
  );
}

export default Sidebar;
