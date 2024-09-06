import React from "react";
import { Link } from "react-router-dom";
export default function Example() {
  return (
    <div className="relative overflow-hidden bg-white">
      <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
        <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
          <div className="sm:max-w-lg">
            <h1 className="text-4xl font-bold font tracking-tight text-gray-900 sm:text-6xl">
              Trending styles are finally here
            </h1>
            <p className="mt-4 text-xl text-gray-500">
              This year, our new season collection will shelter you from the
              harsh elements of a world that doesn't care if you live or die.
            </p>
          </div>
          <div>
            <div className="mt-10">
              {/* Decorative image grid */}
              {/* Desktop Image Grid */}
              <div
                aria-hidden="true"
                className="hidden lg:block pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
              >
                <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                  <div className="flex items-center space-x-6 lg:space-x-8">
                    {/* Desktop grid - same structure as before */}
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      {/* Images */}
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          alt=""
                          src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-01.jpg"
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          alt=""
                          src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-02.jpg"
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          alt=""
                          src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-03.jpg"
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          alt=""
                          src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-04.jpg"
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          alt=""
                          src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-05.jpg"
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          alt=""
                          src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-06.jpg"
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          alt=""
                          src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-07.jpg"
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Mobile Image Grid */}
              <div className="block lg:hidden">
                <div className="grid grid-cols-2 gap-4 p-4">
                  <div className="h-40 w-full overflow-hidden rounded-lg">
                    <img
                      alt=""
                      src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-01.jpg"
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <div className="h-40 w-full overflow-hidden rounded-lg">
                    <img
                      alt=""
                      src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-02.jpg"
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <div className="h-40 w-full overflow-hidden rounded-lg">
                    <img
                      alt=""
                      src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-03.jpg"
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <div className="h-40 w-full overflow-hidden rounded-lg">
                    <img
                      alt=""
                      src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-04.jpg"
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                </div>
              </div>

              <a
                href="#"
                className="inline-block rounded-md border border-transparent bg-rose-600 px-8 py-3 text-center font-medium text-white hover:bg-rose-700"
              >
                Shop Collection
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
