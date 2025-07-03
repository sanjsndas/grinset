import { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [email, setEmail] = useState('')

  const plants = [
    {
      id: 1,
      name: 'Tropical Monstera',
      description: 'Large leafy plants perfect for indoor spaces',
      image: 'https://images.unsplash.com/photo-1526397751294-331021109fbd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Beautiful monstera deliciosa plant with large split leaves'
    },
    {
      id: 2,
      name: 'Succulent Collection',
      description: 'Low-maintenance plants for busy plant parents',
      image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Assortment of colorful succulents in terracotta pots'
    },
    {
      id: 3,
      name: 'Flowering Beauties',
      description: 'Brighten your space with seasonal blooms',
      image: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Colorful flowering plants in full bloom'
    },
    {
      id: 4,
      name: 'Air Purifying Plants',
      description: 'Clean your air naturally with these varieties',
      image: 'https://images.unsplash.com/photo-1517848568502-d03da31bc149?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Peace lily plant with white flowers growing in indoor pot'
    }
  ]

  const services = [
    {
      id: 1,
      title: 'Plant Subscription',
      description: 'Monthly deliveries of seasonal plants',
      icon: '🌱'
    },
    {
      id: 2,
      title: 'Garden Design',
      description: 'Custom landscaping plans',
      icon: '🎨'
    },
    {
      id: 3,
      title: 'Care Workshops',
      description: 'Learn expert gardening techniques',
      icon: '📚'
    },
    {
      id: 4,
      title: 'Plant Rescue',
      description: 'Revive your struggling plants',
      icon: '🚑'
    }
  ]

  return (
    <>
      <Head>
        <title>Grinset Wave | Vibrant Plant Haven</title>
        <meta name="description" content="Premium plants and gardening services" />
      </Head>

      {/* Vibrant Header */}
      <header className="bg-gradient-to-r from-green-600 to-teal-500 text-white shadow-lg">
        <div className="container mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <Link href="/">
              <div className="flex items-center space-x-2 cursor-pointer">
                <span className="text-3xl font-bold">Grinset Wave</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8 items-center">
              <Link href="/" className="hover:text-green-100 transition font-medium">Home</Link>
              <Link href="/shop" className="hover:text-green-100 transition font-medium">Shop</Link>
              <Link href="/services" className="hover:text-green-100 transition font-medium">Services</Link>
              <Link href="/about" className="hover:text-green-100 transition font-medium">About</Link>
              <Link href="/contact" className="hover:text-green-100 transition font-medium">Contact</Link>
              <Link href="/privacy" className="hover:text-green-100 transition font-medium">Privacy</Link>
              <Link href="/terms" className="hover:text-green-100 transition font-medium">Terms</Link>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-white focus:outline-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-6 space-y-4 pb-4">
              <Link href="/" className="block hover:text-green-100 transition font-medium">Home</Link>
              <Link href="/shop" className="block hover:text-green-100 transition font-medium">Shop</Link>
              <Link href="/services" className="block hover:text-green-100 transition font-medium">Services</Link>
              <Link href="/about" className="block hover:text-green-100 transition font-medium">About</Link>
              <Link href="/contact" className="block hover:text-green-100 transition font-medium">Contact</Link>
              <Link href="/privacy" className="block hover:text-green-100 transition font-medium">Privacy</Link>
              <Link href="/terms" className="block hover:text-green-100 transition font-medium">Terms</Link>
            </div>
          )}
        </div>
      </header>

      <main>
        {/* Hero Section with Unsplash Image */}
        <section className="relative h-screen max-h-[800px] flex items-center">
          <Image
            src="https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?ixlib=rb-4.0.3&auto=format&fit=crop&w=1800&q=80"
            alt="Lush green garden with beautiful foliage plants"
            layout="fill"
            objectFit="cover"
            className="brightness-50"
            priority
          />
          <div className="relative z-10 text-center px-4 w-full">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fadeIn">Cultivate Your Green Oasis</h1>
            <p className="text-xl md:text-2xl text-white mb-8 max-w-2xl mx-auto">
              Discover exotic plants and expert gardening tips to transform your space
            </p>
            <div className="flex gap-4 justify-center">
              <Link href="/shop">
                <button className="bg-white text-green-700 px-8 py-3 rounded-lg font-semibold hover:bg-green-100 transition duration-300 shadow-lg">
                  Shop Plants
                </button>
              </Link>
              <Link href="/services">
                <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-700 transition duration-300">
                  Our Services
                </button>
              </Link>
            </div>
          </div>
        </section>

        {/* Featured Plants Section */}
        <section className="py-16 bg-gradient-to-b from-white to-green-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">Our Premium Collection</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Carefully selected plants that thrive in homes and offices
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {plants.map((plant) => (
                <div key={plant.id} className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                  <div className="relative h-64">
                    <Image
                      src={plant.image}
                      alt={plant.alt}
                      layout="fill"
                      objectFit="cover"
                      className="hover:scale-105 transition duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-green-800 mb-2">{plant.name}</h3>
                    <p className="text-gray-600 mb-4">{plant.description}</p>
                    <Link href={`/shop/${plant.id}`}>
                      <button className="text-green-600 font-semibold hover:text-green-800 transition flex items-center">
                        View Details <span className="ml-1">→</span>
                      </button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-green-700 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Start Your Plant Journey?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join our community of plant lovers and get exclusive tips and offers
            </p>
            <form className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-3 rounded-lg flex-grow text-gray-800"
                required
              />
              <button 
                type="submit"
                className="bg-green-900 px-6 py-3 rounded-lg font-semibold hover:bg-green-800 transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">Our Gardening Services</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Comprehensive solutions for all your plant needs
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service) => (
                <div key={service.id} className="bg-green-50 rounded-xl p-6 hover:bg-green-100 transition duration-300">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold text-green-800 mb-2">{service.title}</h3>
                  <p className="text-gray-700 mb-4">{service.description}</p>
                  <Link href={`/services#${service.id}`}>
                    <button className="text-green-600 font-semibold hover:text-green-800 transition">
                      Learn more →
                    </button>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-16 bg-gradient-to-b from-green-50 to-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-green-800 mb-12">Plant Inspiration</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="overflow-hidden rounded-xl shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1598880940087-52d0a30949d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Modern indoor plant arrangement in a bright living room"
                  width={800}
                  height={600}
                  className="hover:scale-105 transition duration-500"
                />
              </div>
              <div className="overflow-hidden rounded-xl shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1597997547876-c1a1ffffec53?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Tropical greenhouse with diverse plant species"
                  width={800}
                  height={600}
                  className="hover:scale-105 transition duration-500"
                />
              </div>
              <div className="overflow-hidden rounded-xl shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1463320726281-696a485928c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Plant care workshop with people learning potting techniques"
                  width={800}
                  height={600}
                  className="hover:scale-105 transition duration-500"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Enhanced Footer */}
      <footer className="bg-gray-900 text-gray-300 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Grinset Wave</h3>
              <p className="mb-4">Bringing nature closer to your home since 2018</p>
              <div className="flex space-x-4">
                <a href="#" className="text-white hover:text-green-400 transition">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="text-white hover:text-green-400 transition">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" className="text-white hover:text-green-400 transition">
                  <i className="fab fa-pinterest-p"></i>
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link href="/shop" className="hover:text-white transition">Shop Plants</Link></li>
                <li><Link href="/services" className="hover:text-white transition">Our Services</Link></li>
                <li><Link href="/about" className="hover:text-white transition">About Us</Link></li>
                <li><Link href="/blog" className="hover:text-white transition">Plant Care Blog</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Information</h4>
              <ul className="space-y-2">
                <li><Link href="/privacy" className="hover:text-white transition">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-white transition">Terms of Service</Link></li>
                <li><Link href="/shipping" className="hover:text-white transition">Shipping Policy</Link></li>
                <li><Link href="/returns" className="hover:text-white transition">Returns & Exchanges</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Contact Us</h4>
              <address className="not-italic">
                <p className="mb-2">123 Greenway Blvd</p>
                <p className="mb-2">Portland, OR 97205</p>
                <p className="mb-2">hello@grinsetwave.com</p>
                <p>(555) 123-4567</p>
              </address>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p>&copy; {new Date().getFullYear()} Grinset Wave. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 1s ease-out forwards;
        }
      `}</style>
    </>
  )
}
