"use client"

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { navLinks } from "@/constants"
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "../ui/button"

const MobileNav = () => {
  const pathname = usePathname();

  return (
    <header className="header flex items-center justify-between px-4 py-3 shadow-md bg-pink-400 md:hidden">
      <Link href="/" className="flex items-center gap-2">
        <Image
          src="/assets/images/logo1.png"
          alt="logo"
          width={160}
          height={24}
        />
      </Link>

      <nav className="flex items-center gap-3">
        <SignedIn>
          <UserButton afterSignOutUrl="/" />

          <Sheet>
            <SheetTrigger asChild>
              <Image 
                src="/assets/icons/menu.svg"
                alt="menu"
                width={32}
                height={32}
                className="cursor-pointer"
              />
            </SheetTrigger>
            <SheetContent className="sheet-content sm:w-64 bg-pink-500 py-6 px-4">
              <div className="mb-6">
                <Image 
                  src="/assets/images/logo1.png"
                  alt="logo"
                  width={140}
                  height={22}
                />
              </div>

              <ul className="flex flex-col gap-2">
                {navLinks.map((link) => {
                  const isActive = link.route === pathname;
                  return (
                    <li key={link.route}>
                      <Link
                        href={link.route}
                        className={`flex items-center gap-3 px-4 py-2 rounded-md transition-colors duration-200 group 
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
            </SheetContent>
          </Sheet>
        </SignedIn>

        <SignedOut>
          <Button asChild className="button bg-gradient-to-r from-red-500 via-pink-500 to-blue-500 text-white px-4 py-2">
            <Link href="/sign-in">Login</Link>
          </Button>
        </SignedOut>
      </nav>
    </header>
  );
}

export default MobileNav;
