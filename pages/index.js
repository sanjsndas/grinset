import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [email, setEmail] = useState('')

  const featuredPlants = [
    {
      id: 1,
      title: "Monstera Deliciosa",
      desc: "Tropical beauty with iconic split leaves",
      img: "https://images.unsplash.com/photo-1517848568502-d03da31bc149?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      alt: "Large green monstera plant with split leaves in ceramic pot"
    },
    {
      id: 2,
      title: "Fiddle Leaf Fig",
      desc: "Statement tree with large violin-shaped leaves",
      img: "https://images.unsplash.com/photo-1601760561441-16420502c7e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      alt: "Tall fiddle leaf fig tree in bright living room"
    },
    {
      id: 3,
      title: "Snake Plant",
      desc: "Hardy air-purifying succulent",
      img: "https://images.unsplash.com/photo-1593483316242-efb5420596ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      alt: "Group of snake plants in textured pots"
    },
    {
      id: 4,
      title: "Pink Anthurium",
      desc: "Floral tropical for color lovers",
      img: "https://images.unsplash.com/photo-1591273531346-ba8b4ddf7c27?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      alt: "Vibrant pink anthurium flowers with glossy leaves"
    }
  ]

  const services = [
    { 
      id: 1, 
      title: "Plant Delivery", 
      icon: "🚚",
      desc: "Fresh plants shipped safely to your door"
    },
    { 
      id: 2, 
      title: "Landscaping", 
      icon: "🏡",
      desc: "Custom outdoor garden designs"
    },
    { 
      id: 3, 
      title: "Plant Care", 
      icon: "🔍",
      desc: "Expert consultations for your plants"
    }
  ]

  return (
    <>
      <Head>
        <title>GreenWave | Premium Gardening & Plants</title>
        <meta name="description" content="Discover beautiful plants for your home and garden" />
      </Head>

      {/* Modern Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/">
            <div className="flex items-center space-x-2 cursor-pointer">
              <span className="text-3xl font-bold text-green-600">GreenWave</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8 text-gray-700">
            <Link href="/" className="hover:text-green-600 transition font-medium">Home</Link>
            <Link href="/shop" className="hover:text-green-600 transition font-medium">Shop</Link>
            <Link href="/services" className="hover:text-green-600 transition font-medium">Services</Link>
            <Link href="/about" className="hover:text-green-600 transition font-medium">About</Link>
            <Link href="/contact" className="hover:text-green-600 transition font-medium">Contact</Link>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-white py-4 px-4 shadow-lg">
            <nav className="flex flex-col space-y-3">
              <Link href="/" className="hover:text-green-600 transition font-medium">Home</Link>
              <Link href="/shop" className="hover:text-green-600 transition font-medium">Shop</Link>
              <Link href="/services" className="hover:text-green-600 transition font-medium">Services</Link>
              <Link href="/about" className="hover:text-green-600 transition font-medium">About</Link>
              <Link href="/contact" className="hover:text-green-600 transition font-medium">Contact</Link>
            </nav>
          </div>
        )}
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative h-screen max-h-[800px]">
          <Image
            src="https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?ixlib=rb-4.0.3&auto=format&fit=crop&w=1800&q=80"
            alt="Lush indoor jungle with various tropical plants"
            layout="fill"
            objectFit="cover"
            className="brightness-75"
            priority
          />
          <div className="absolute inset-0 flex items-center justify-center text-center px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fadeIn">
                Bring Nature Into Your Home
              </h1>
              <p className="text-xl md:text-2xl text-white mb-8">
                Discover our curated collection of plants perfect for any space
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/shop">
                  <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition shadow-lg">
                    Shop Plants
                  </button>
                </Link>
                <Link href="/services">
                  <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition">
                    Our Services
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Plants */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Featured Plants</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Our most popular plants loved by customers
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {featuredPlants.map((plant) => (
                <div key={plant.id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition duration-300">
                  <div className="relative h-64">
                    <Image
                      src={plant.img}
                      alt={plant.alt}
                      layout="fill"
                      objectFit="cover"
                      className="hover:scale-105 transition duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{plant.title}</h3>
                    <p className="text-gray-600 mb-4">{plant.desc}</p>
                    <Link href={`/shop/${plant.id}`}>
                      <button className="text-green-600 font-semibold hover:text-green-800 transition">
                        View Details →
                      </button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Services</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Everything you need for your plant journey
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service) => (
                <div key={service.id} className="bg-green-50 rounded-lg p-8 text-center hover:bg-green-100 transition duration-300">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-green-700 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Greenify Your Space?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join our community and get 15% off your first order
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-3 rounded-lg text-gray-800 flex-grow"
              />
              <button className="bg-green-800 px-6 py-3 rounded-lg font-semibold hover:bg-green-900 transition">
                Sign Up
              </button>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">What Our Customers Say</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="text-green-500 text-5xl mb-4">"</div>
                <p className="text-gray-700 mb-6">The plants arrived in perfect condition and have transformed my living room!</p>
                <p className="font-semibold">- Sarah J.</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="text-green-500 text-5xl mb-4">"</div>
                <p className="text-gray-700 mb-6">Excellent customer service when I had questions about plant care.</p>
                <p className="font-semibold">- Michael T.</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="text-green-500 text-5xl mb-4">"</div>
                <p className="text-gray-700 mb-6">Beautiful selection and reliable delivery. Will order again!</p>
                <p className="font-semibold">- Emma L.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold text-white mb-4">GreenWave</h3>
              <p className="mb-4">Bringing nature to your doorstep since 2018</p>
              <div className="flex space-x-4">
                <a href="#" className="text-white hover:text-green-400 transition">
                  <i className="fab fa-facebook-f text-lg"></i>
                </a>
                <a href="#" className="text-white hover:text-green-400 transition">
                  <i className="fab fa-instagram text-lg"></i>
                </a>
                <a href="#" className="text-white hover:text-green-400 transition">
                  <i className="fab fa-pinterest-p text-lg"></i>
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Shop</h4>
              <ul className="space-y-2">
                <li><Link href="/shop/indoor" className="hover:text-white transition">Indoor Plants</Link></li>
                <li><Link href="/shop/outdoor" className="hover:text-white transition">Outdoor Plants</Link></li>
                <li><Link href="/shop/pots" className="hover:text-white transition">Pots & Planters</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-2">
                <li><Link href="/about" className="hover:text-white transition">About Us</Link></li>
                <li><Link href="/blog" className="hover:text-white transition">Blog</Link></li>
                <li><Link href="/careers" className="hover:text-white transition">Careers</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Contact</h4>
              <address className="not-italic">
                <p>123 Green St</p>
                <p>Portland, OR 97205</p>
                <p className="mt-2">hello@greenwave.com</p>
                <p>(555) 123-4567</p>
              </address>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center">
            <p>&copy; {new Date().getFullYear()} GreenWave. All rights reserved.</p>
            <div className="mt-2">
              <Link href="/privacy" className="hover:text-white transition text-sm">Privacy Policy</Link> | 
              <Link href="/terms" className="hover:text-white transition text-sm">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
