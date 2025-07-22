'use client'

import Link from "next/link"
import { robotomono } from "../fonts"
import seshData from './sesh-data.json'
import { ExternalLink, Heart, Maximize2, X } from 'lucide-react'
import { useState } from 'react'

export default function SeshPage() {
  const [expandedImage, setExpandedImage] = useState<string | null>(null);

  return (
    <div className="fixed inset-0 bg-slate-950 text-slate-50 overflow-y-auto">
      {/* Full-width header */}
      <header className="w-full px-6 py-6 sticky top-0 bg-slate-950/90 backdrop-blur-sm z-40">
        <div className="flex items-center justify-between">
          <nav className="ml-auto text-sm font-medium space-x-6 uppercase">
            <Link href="/" className="navItem">Home</Link>
            <Link href="/blog" className="navItem">Blog</Link>
            <Link href="/sesh" className="navItem">Sesh</Link>
          </nav>
        </div>
      </header>
      
      {/* Full-width main content */}
      <main className="w-full max-w-7xl mx-auto px-6 pb-12">
      {/* Header Section */}
      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-4 mb-6">
          <img 
            src="/sesh/sesh-logo.png" 
            alt="Sesh Logo" 
            className="w-16 h-16"
          />
          <h1 className="text-5xl font-bold" style={{ color: '#4eff3d' }}>
            Sesh
          </h1>
        </div>
        <div className="text-lg text-slate-300 leading-relaxed max-w-3xl mx-auto">
          <p className="mb-4">
            Press <span className="font-bold" style={{ color: '#92ff07' }}>Option + S (Mac)</span> or{' '}
            <span className="font-bold" style={{ color: '#92ff07' }}>Alt + S (Windows)</span> to open the popup.
          </p>
          <p className="mb-4">
            Sesh is 2 things:<br/>
            <span className="font-bold" style={{ color: '#92ff07' }}>1. A New Tab Page</span> that's your own personal dashboard, 
            with a customizable layout and a bunch of widgets to help you get things done.<br/>
            <span className="font-bold" style={{ color: '#92ff07' }}>2. A popup on the browser toolbar</span> that helps you 
            manage your tabs, windows, and bookmarks with an intuitive interface that keeps you organized and focused.
          </p>
        </div>
      </div>

      {/* Filter out the noise section */}
      <div className="mb-16 text-center">
        <h2 className="text-3xl font-bold mb-6" style={{ color: '#92ff07' }}>
          Filter out the noise.
        </h2>
        <p className="text-slate-300 leading-relaxed max-w-3xl mx-auto">
          Use the <span style={{ color: '#92ff07' }}>Sessions widget</span> on either the new tab page, 
          or the browser toolbar, to organize your browsing sessions, create custom folders, and quickly 
          access your most important resources,{' '}
          <span style={{ color: '#92ff07' }}>all by simply dragging and dropping stuff.</span>{' '}
          No more cluttered bookmarks bars or lost tabs - everything you need is just a click away.
        </p>
      </div>

      {/* Feature Screenshots */}
      <div className="space-y-20">
        {seshData.features.map((feature, index) => (
          <div 
            key={index} 
            className={`flex flex-col lg:flex-row items-center gap-8 ${
              index % 2 === 1 ? 'lg:flex-row-reverse' : ''
            }`}
          >
            {/* Screenshot */}
            <div className="flex-1 max-w-4xl">
              <div className="w-full aspect-video bg-gray-800 rounded-2xl shadow-2xl border border-gray-700 relative overflow-hidden group">
                {/* Maximize button */}
                <button
                  onClick={() => setExpandedImage(feature.screenshot)}
                  className="absolute top-4 right-4 z-20 bg-black/50 hover:bg-black/70 text-white p-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                  title="Expand image"
                >
                  <Maximize2 className="w-5 h-5" />
                </button>
                
                {/* Actual screenshot */}
                <img
                  src={feature.screenshot}
                  alt={feature.title}
                  className="w-full h-full object-cover rounded-2xl"
                  loading="lazy"
                />
              </div>
            </div>
            
            {/* Text Content */}
            <div className="flex-1 space-y-4">
              <h3 className="text-2xl font-bold" style={{ color: '#92ff07' }}>
                {feature.title}
              </h3>
              <div 
                className={`text-slate-300 leading-relaxed space-y-3 ${robotomono.className}`}
                dangerouslySetInnerHTML={{ __html: feature.description }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Support Section */}
      <div className="mt-24 pt-16 border-t border-gray-700 text-center">
        <h2 className="text-2xl font-bold mb-6 flex items-center justify-center gap-2">
          <span>Support the project</span>
          <Heart className="w-6 h-6 text-red-500" />
        </h2>
        
        <p className="text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
          If you find Sesh helpful and would like to support its development, your support helps 
          keep the project alive and enables me to add cool new features and improvements.
        </p>
        
        {/* Coffee Button */}
        <div className="flex justify-center mb-8">
          <a 
            href="https://coff.ee/fevertrip" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg shadow-md text-lg"
          >
            <Heart className="w-5 h-5" />
            Buy me a coffee
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
        
        <p className="text-slate-300">
          If you'd like to sponsor the project, reach out to me at{' '}
          <a href="mailto:fvrtrp@gmail.com" style={{ color: '#92ff07' }} className="hover:underline">
            fvrtrp@gmail.com
          </a>
          .<br/>
          You will see your name here, and on{' '}
          <a href="https://fvrtrp.com/sesh" style={{ color: '#92ff07' }} className="hover:underline">
            the website
          </a>
          .
        </p>
      </div>
      </main>

      {/* Expanded Image Modal */}
      {expandedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setExpandedImage(null)}
        >
          {/* Close button */}
          <button
            onClick={() => setExpandedImage(null)}
            className="absolute top-6 right-6 z-60 bg-black/50 hover:bg-black/70 text-white p-3 rounded-lg transition-colors"
            title="Close"
          >
            <X className="w-6 h-6" />
          </button>
          
          {/* Expanded image container */}
          <div 
            className="relative max-w-[90vw] max-h-[90vh] rounded-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={expandedImage}
              alt="Expanded screenshot"
              className="w-full h-full object-contain rounded-2xl"
              style={{ maxWidth: '90vw', maxHeight: '90vh' }}
            />
          </div>
        </div>
      )}
    </div>
  )
} 