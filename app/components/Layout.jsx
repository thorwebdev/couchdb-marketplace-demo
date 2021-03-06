import Head from 'next/head';
import { useState } from 'react';
import { useUser } from '../utils/useUser';

export default function Layout(props) {
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { session, logOut, searchTerm, setSearchTerm } = useUser();

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="bg-indigo-600">
        <nav className="bg-indigo-600 border-b border-indigo-300 border-opacity-25 lg:border-none">
          <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
            <div className="relative h-16 flex items-center justify-between lg:border-b lg:border-indigo-400 lg:border-opacity-25">
              <div className="px-2 flex items-center lg:px-0">
                <a href="/" className="flex-shrink-0">
                  <img
                    className="block h-8 w-8"
                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-300.svg"
                    alt="Workflow"
                  />
                </a>
              </div>
              <div className="flex-1 px-2 flex justify-center lg:ml-6 lg:justify-end">
                <div className="max-w-lg w-full lg:max-w-xs">
                  <label htmlFor="search" className="sr-only">
                    Search
                  </label>
                  <div className="relative text-gray-400 focus-within:text-gray-600">
                    <div className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
                      <svg
                        className="h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <input
                      id="search"
                      className="block w-full bg-white py-2 pl-10 pr-3 border border-transparent rounded-md leading-5 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-600 focus:ring-white focus:border-white sm:text-sm"
                      placeholder="Search"
                      type="search"
                      name="search"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div className="flex lg:hidden">
                <button
                  type="button"
                  className="bg-indigo-600 p-2 rounded-md inline-flex items-center justify-center text-indigo-200 hover:text-white hover:bg-indigo-500 hover:bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-600 focus:ring-white"
                  aria-controls="mobile-menu"
                  aria-expanded="false"
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                  <span className="sr-only">Open main menu</span>
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>

                  <svg
                    className="hidden h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <div className="hidden lg:block lg:ml-4">
                <div className="flex items-center">
                  <button className="bg-indigo-600 flex-shrink-0 rounded-full p-1 text-indigo-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-600 focus:ring-white">
                    <span className="sr-only">View notifications</span>
                    <svg
                      className="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                      />
                    </svg>
                  </button>

                  <div className="ml-3 relative flex-shrink-0">
                    <div>
                      <button
                        type="button"
                        className="bg-indigo-600 rounded-full flex text-sm text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-600 focus:ring-white"
                        id="user-menu-button"
                        aria-expanded="false"
                        aria-haspopup="true"
                        onClick={() => setUserMenuOpen(!userMenuOpen)}
                      >
                        <span className="sr-only">Open user menu</span>
                        <span className="inline-block h-8 w-8 rounded-full overflow-hidden bg-gray-100">
                          <svg
                            className="h-full w-full text-gray-300"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                          </svg>
                        </span>
                      </button>
                    </div>
                    <div
                      className={
                        `${userMenuOpen ? 'block' : 'hidden'}` +
                        ' origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none'
                      }
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="user-menu-button"
                      tabIndex="-1"
                    >
                      {session ? (
                        <div>
                          <a
                            href="/user"
                            className="block py-2 px-4 text-sm text-gray-700"
                            role="menuitem"
                            tabIndex="-1"
                            id="user-menu-item-0"
                          >
                            Your Profile
                          </a>

                          <button
                            className="block py-2 px-4 text-sm text-gray-700"
                            role="menuitem"
                            tabIndex="-1"
                            id="user-menu-item-2"
                            onClick={logOut}
                          >
                            Sign out
                          </button>
                        </div>
                      ) : (
                        <div>
                          <a
                            href="/login"
                            className="block py-2 px-4 text-sm text-gray-700"
                            role="menuitem"
                            tabIndex="-1"
                            id="user-menu-item-0"
                          >
                            Sign In
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            id="mobile-menu"
            className={`${mobileMenuOpen ? 'hidden ' : ''}` + 'lg:hidden'}
          >
            <div className="pt-4 pb-3 border-t border-indigo-700">
              <div className="px-5 flex items-center">
                <div className="flex-shrink-0">
                  <span className="inline-block h-10 w-10 rounded-full overflow-hidden bg-gray-100">
                    <svg
                      className="h-full w-full text-gray-300"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </span>
                </div>
                <div className="ml-3">
                  <div className="text-base font-medium text-white">
                    {session?.name}
                  </div>
                </div>
                <button className="ml-auto bg-indigo-600 flex-shrink-0 rounded-full p-1 text-indigo-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-600 focus:ring-white">
                  <span className="sr-only">View notifications</span>

                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                    />
                  </svg>
                </button>
              </div>
              {session ? (
                <div className="mt-3 px-2 space-y-1">
                  <a
                    href="/user"
                    className="block rounded-md py-2 px-3 text-base font-medium text-white hover:bg-indigo-500 hover:bg-opacity-75"
                  >
                    Your Profile
                  </a>

                  <button
                    onClick={logOut}
                    className="block rounded-md py-2 px-3 text-base font-medium text-white hover:bg-indigo-500 hover:bg-opacity-75"
                  >
                    Sign out
                  </button>
                </div>
              ) : (
                <div className="mt-3 px-2 space-y-1">
                  <a
                    href="/login"
                    className="block rounded-md py-2 px-3 text-base font-medium text-white hover:bg-indigo-500 hover:bg-opacity-75"
                  >
                    Sign In
                  </a>
                </div>
              )}
            </div>
          </div>
        </nav>
      </div>

      <main className="mt-12">
        <Head>
          <title>CouchDB marketplace demo</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="max-w-7xl mx-auto pb-12 px-4 sm:px-6 lg:px-8">
          {props.children}
        </div>
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t">
        <a
          className="flex items-center justify-center"
          href="https://thor.news"
          target="_blank"
          rel="noopener noreferrer"
        >
          Made by thorwebdev ??????
        </a>
      </footer>
    </div>
  );
}
