'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="text-2xl font-bold text-blue-600">
            SepticSleuth
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link href="/how-it-works" className="text-gray-700 hover:text-blue-600 transition-colors">
              How It Works
            </Link>
            <Link href="/pricing" className="text-gray-700 hover:text-blue-600 transition-colors">
              Pricing
            </Link>

            {/* Solutions Dropdown */}
            <div className="relative group">
              <button className="text-gray-700 hover:text-blue-600 transition-colors">
                Solutions ▾
              </button>
              <div className="absolute top-full left-0 mt-2 w-64 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                <Link href="/solutions/contractors" className="block px-4 py-3 hover:bg-blue-50 transition-colors">
                  For Contractors
                </Link>
                <Link href="/solutions/construction-firms" className="block px-4 py-3 hover:bg-blue-50 transition-colors">
                  For Construction Firms
                </Link>
                <Link href="/solutions/homeowners" className="block px-4 py-3 hover:bg-blue-50 transition-colors">
                  For Homeowners
                </Link>
                <Link href="/solutions/enterprise" className="block px-4 py-3 hover:bg-blue-50 transition-colors">
                  Enterprise Solutions
                </Link>
              </div>
            </div>

            {/* Resources Dropdown */}
            <div className="relative group">
              <button className="text-gray-700 hover:text-blue-600 transition-colors">
                Resources ▾
              </button>
              <div className="absolute top-full left-0 mt-2 w-56 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                <Link href="/resources/blog" className="block px-4 py-3 hover:bg-blue-50 transition-colors">
                  Blog
                </Link>
                <Link href="/resources/case-studies" className="block px-4 py-3 hover:bg-blue-50 transition-colors">
                  Case Studies
                </Link>
                <Link href="/resources/help-center" className="block px-4 py-3 hover:bg-blue-50 transition-colors">
                  Help Center
                </Link>
                <Link href="/resources/video-library" className="block px-4 py-3 hover:bg-blue-50 transition-colors">
                  Video Library
                </Link>
              </div>
            </div>

            {/* About Dropdown */}
            <div className="relative group">
              <button className="text-gray-700 hover:text-blue-600 transition-colors">
                About ▾
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                <Link href="/about/company" className="block px-4 py-3 hover:bg-blue-50 transition-colors">
                  Company Story
                </Link>
                <Link href="/about/team" className="block px-4 py-3 hover:bg-blue-50 transition-colors">
                  Team
                </Link>
                <Link href="/about/technology" className="block px-4 py-3 hover:bg-blue-50 transition-colors">
                  Technology
                </Link>
                <Link href="/about/contact" className="block px-4 py-3 hover:bg-blue-50 transition-colors">
                  Contact
                </Link>
              </div>
            </div>

            <Link href="/pricing" className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden pb-4">
            <Link href="/how-it-works" className="block py-2 text-gray-700 hover:text-blue-600">
              How It Works
            </Link>
            <Link href="/pricing" className="block py-2 text-gray-700 hover:text-blue-600">
              Pricing
            </Link>
            <div className="py-2">
              <div className="font-semibold text-gray-900 mb-2">Solutions</div>
              <Link href="/solutions/contractors" className="block py-1 pl-4 text-gray-700 hover:text-blue-600">
                For Contractors
              </Link>
              <Link href="/solutions/construction-firms" className="block py-1 pl-4 text-gray-700 hover:text-blue-600">
                For Construction Firms
              </Link>
              <Link href="/solutions/homeowners" className="block py-1 pl-4 text-gray-700 hover:text-blue-600">
                For Homeowners
              </Link>
              <Link href="/solutions/enterprise" className="block py-1 pl-4 text-gray-700 hover:text-blue-600">
                Enterprise Solutions
              </Link>
            </div>
            <div className="py-2">
              <div className="font-semibold text-gray-900 mb-2">Resources</div>
              <Link href="/resources/blog" className="block py-1 pl-4 text-gray-700 hover:text-blue-600">
                Blog
              </Link>
              <Link href="/resources/case-studies" className="block py-1 pl-4 text-gray-700 hover:text-blue-600">
                Case Studies
              </Link>
              <Link href="/resources/help-center" className="block py-1 pl-4 text-gray-700 hover:text-blue-600">
                Help Center
              </Link>
              <Link href="/resources/video-library" className="block py-1 pl-4 text-gray-700 hover:text-blue-600">
                Video Library
              </Link>
            </div>
            <div className="py-2">
              <div className="font-semibold text-gray-900 mb-2">About</div>
              <Link href="/about/company" className="block py-1 pl-4 text-gray-700 hover:text-blue-600">
                Company Story
              </Link>
              <Link href="/about/team" className="block py-1 pl-4 text-gray-700 hover:text-blue-600">
                Team
              </Link>
              <Link href="/about/technology" className="block py-1 pl-4 text-gray-700 hover:text-blue-600">
                Technology
              </Link>
              <Link href="/about/contact" className="block py-1 pl-4 text-gray-700 hover:text-blue-600">
                Contact
              </Link>
            </div>
            <Link href="/pricing" className="block mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg text-center hover:bg-blue-700 transition-colors">
              Get Started
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
