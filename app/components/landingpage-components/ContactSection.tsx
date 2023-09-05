import React from 'react'
import arrow from '@/app/assets/landingpage-assets/images/arrow.png'
import Image from 'next/image'

export default function ContactSection() {
  return (
    <div className="px-5 grid gap-8 grid-cols-1 md:grid-cols-2 py-24 mx-auto  text-gray-900 rounded-lg md:px-40">
      <div className="flex flex-col justify-center">
        <div>
          <h2 className="text-2xl md:text-5xl font-bold leading-tight font-timesnew">
            Let&apos;s <span className="text-[#ff6000] mr-2">Connect</span>& <br />
            <span className="text-[#ff6000]">Collaborate</span>
          </h2>
          <div className="text-gray-700 mt-8">
            Hate forms? Send us an{' '}
            <a className="underline" href="mailto:someone@gmail.com">
              email
            </a>{' '}
            instead.
          </div>
        </div>
        <div className="md:mt-12 text-center"></div>
      </div>
      <form className="bg-[#f1f1f1] px-2 md:px-8 py-8 rounded-3xl ">
        <div className="md:space-x-4 px-auto ">
          <input
            className="max-lg:w-full text-sm text-gray-600 font-semibold bg-white  mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-indigo-400"
            type="text"
            placeholder="First Name*"
            required
          />
          <input
            className="max-lg:w-full  text-sm text-gray-600 font-semibold bg-white  mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-indigo-400"
            type="text"
            placeholder="Last Name*"
            required
          />
        </div>
        <div className="md:space-x-4">
          <input
            className="max-lg:w-full text-sm text-gray-600 font-semibold bg-white  mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-indigo-400"
            type="email"
            placeholder="Email*"
            required
          />
          <input
            className="max-lg:w-full text-sm text-gray-600 font-semibold bg-white  mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-indigo-400"
            type="password"
            placeholder="Password*"
            required
          />
        </div>
        <div className="mt-8">
          <input
            className="w-full bg-white font-semibold text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-indigo-400"
            type="text"
            placeholder="Subject*"
            required
          />
        </div>

        <div className="mt-8">
          <span className="uppercase text-sm text-gray-600 font-bold"></span>
          <textarea
            className="w-full h-32 bg-white font-semibold text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-indigo-400"
            placeholder="Enter your Message"
            required
          ></textarea>
        </div>
        <div className="mt-8 ">
          <div className="space-x-8  mt-10 flex flex-row  relative">
            <div className="flex items-center pl-2">
              <button className="bg-[#3D3F3C] absolute left-0 top-0 px-20 rounded-3xl md:pb-4 py-6 z-10"></button>
              <Image src={arrow} alt={''} className="md:w-8 w-10 flex justify-center items-center z-20" />
              <button className="rounded-3xl bg-[#FF6000] relative ml-4 justify-end z-10">
                <div className="text-white font-medium px-4 py-4 md:py-3 text-xs md:text-xs">Send Message</div>
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}
