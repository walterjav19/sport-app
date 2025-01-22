import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'  
import { Avatar, Dropdown, Navbar } from "flowbite-react";







function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}



export default function NavBar({Language, setLanguage}) {



  const [News, setNews] = useState(true)
  const [Futbol, setFutbol] = useState(false)
  const [NBA, setNBA] = useState(false)
  const [NFL, setNFL] = useState(false)
  
  const navigation = [

    { name: 'News', href: '#', current: News },
    { name: 'Futbol', href: '#', current: Futbol },
    { name: 'NBA', href: '#', current: NBA },
    { name: 'NFL', href: '#', current: NFL },
  ]



  return (
    <Disclosure as="nav" className="bg-gray-800">
    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div className="relative flex h-16 items-center justify-between">
        <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
          {/* Mobile menu button*/}
          <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
            <span className="absolute -inset-0.5" />
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="block size-6 group-data-[open]:hidden" />
            <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-[open]:block" />
          </DisclosureButton>
        </div>
        <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
          <div className="flex shrink-0 items-center">
            <img alt="Your Company" src="./sports.png" className="h-8 w-auto" />
          </div>
          <div className="hidden sm:ml-6 sm:block">
            <div className="flex space-x-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  aria-current={item.current ? "page" : undefined}
                  className={classNames(
                    item.current ? "bg-gray-900 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "rounded-md px-3 py-2 text-sm font-medium"
                  )}
                  onClick={() => {
                    setNews(false);
                    setFutbol(false);
                    setNBA(false);
                    setNFL(false);
                    if (item.name === "News") {
                      setNews(true);
                    }
                    if (item.name === "Futbol") {
                      setFutbol(true);
                    }
                    if (item.name === "NBA") {
                      setNBA(true);
                    }
                    if (item.name === "NFL") {
                      setNFL(true);
                    }
                  }}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </div>
        {/* Dropdown moved to the left */}
        <div className="absolute inset-y-0 left-0 flex items-center sm:static sm:inset-auto sm:ml-6 sm:pr-0" >
          <Dropdown
            arrowIcon={false}
            inline
            className="bg-gray-800 text-white"
            label={
              <Avatar
                alt="User settings"
                img={Language}
                rounded
              />
            }
          > 
            
            <Dropdown.Item className="flex items-center text-white"
            onClick={() => setLanguage("./estados-unidos.png")}>
            <img
              alt="English"
              src="./estados-unidos.png"
              className="h-4 w-auto mr-2"
            />
            English
          </Dropdown.Item>
          <Dropdown.Item className="flex items-center text-white"
          onClick={() => setLanguage("./espana.png")}>
            <img
              alt="Spanish"
              src="./espana.png"
              className="h-4 w-auto mr-2"
            />
            Spanish
          </Dropdown.Item>

          </Dropdown>
        </div>
      </div>
    </div>
  
    <DisclosurePanel className="sm:hidden">
      <div className="space-y-1 px-2 pb-3 pt-2">
        {navigation.map((item) => (
          <DisclosureButton
            key={item.name}
            as="a"
            href={item.href}
            aria-current={item.current ? "page" : undefined}
            className={classNames(
              item.current ? "bg-gray-900 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white",
              "block rounded-md px-3 py-2 text-base font-medium"
            )}
          >
            {item.name}
          </DisclosureButton>
        ))}
      </div>
    </DisclosurePanel>
  </Disclosure>
  
  )
}
