import { Fragment } from 'react';
import Link from 'next/link';
import { useStoreState, useStoreActions } from 'easy-peasy';
import Router from 'next/router';
import Cookies from 'js-cookie';
import { Popover, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { AnchorLink } from '@zeiq/web';

import config from '../../utils/config';

const Header = () => {
  const isLoggedIn = useStoreState((state) => state.isLoggedIn.value);
  const setIsLoggedIn = useStoreActions((actions) => actions.isLoggedIn.toggle);
  // console.log('isLoggedIn', isLoggedIn);

  const handleLogout = () => {
    setIsLoggedIn(false);
    Cookies.remove('token');
    Router.push('/');
  };

  return (
    <Popover className="relative bg-white">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
              <div className="flex justify-start lg:w-0 lg:flex-1">
                <Link href="/">
                  <a>
                    <span className="sr-only">{config.siteName}</span>
                    <img
                      className="h-4 w-auto sm:h-10"
                      src="/images/logo.png"
                      alt=""
                    />
                  </a>
                </Link>
              </div>
              <div className="-mr-2 -my-2 md:hidden">
                <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Open menu</span>
                  <MenuIcon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
              <Popover.Group as="nav" className="hidden md:flex space-x-10">
                <Link href="/">
                  <AnchorLink>Events</AnchorLink>
                </Link>
                <Link href="/">
                  <AnchorLink>Business service</AnchorLink>
                </Link>
                <Link href="/">
                  <AnchorLink>About Us</AnchorLink>
                </Link>
              </Popover.Group>
              {isLoggedIn ? (
                <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                  <a
                    onClick={handleLogout}
                    className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
                  >
                    Logout
                  </a>
                </div>
              ) : (
                <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                  <Link href="/auth/login">
                    <a>Sign in</a>
                  </Link>
                  <Link href="/auth/register">
                    <a className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">
                      Sign up
                    </a>
                  </Link>
                </div>
              )}
            </div>
          </div>

          <Transition
            show={open}
            as={Fragment}
            enter="duration-200 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Popover.Panel
              focus
              static
              className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
            >
              <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                <div className="pt-5 pb-6 px-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <img
                        className="h-8 w-auto"
                        src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                        alt={config.siteName}
                      />
                    </div>
                    <div className="-mr-2">
                      <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                        <span className="sr-only">Close menu</span>
                        <XIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                </div>
                <div className="py-6 px-5 space-y-6">
                  <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                    <Link href="/about">
                      <AnchorLink>About</AnchorLink>
                    </Link>
                    <Link href="/blog">
                      <AnchorLink>Blog</AnchorLink>
                    </Link>
                    <Link href="/contact">
                      <AnchorLink>Contact</AnchorLink>
                    </Link>
                    <Link href="/auth/account">
                      <AnchorLink>Account</AnchorLink>
                    </Link>
                  </div>
                  {isLoggedIn ? (
                    <div>
                      <a
                        onClick={handleLogout}
                        className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                      >
                        Logout
                      </a>
                    </div>
                  ) : (
                    <div>
                      <Link href="/auth/register">
                        <a>Sign up</a>
                      </Link>
                      <p className="mt-6 text-center text-base font-medium text-gray-500">
                        Existing customer?{' '}
                        <Link href="/auth/login">
                          <a className="text-indigo-600 hover:text-indigo-500">
                            Sign in
                          </a>
                        </Link>
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
};

export default Header;
