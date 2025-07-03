import Head from 'next/head'
import { useState } from 'react'
import Image from 'next/image'

export default function Home() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false)
  const [email, setEmail] = useState('')

  const plants = [
    {
      id: 1,
      name: 'Tropical Foliage',
      description: 'Lush greenery that thrives in humid conditions',
      src: 'https://placehold.co/600x400',
      alt: 'Collection of tropical plants with large green leaves in a modern home setting'
    },
    {
      id: 2,
      name: 'Desert Succulents',
      description: 'Low-maintenance plants perfect for sunny spots',
      src: 'https://placehold.co/600x400',
      alt: 'Assortment of colorful succulents arranged in terracotta pots'
    },
    {
      id: 3,
      name: 'Flowering Varieties',
      description: 'Seasonal blooms to brighten your space',
      src: 'https://placehold.co/600x400',
      alt: 'Beautiful flowering plants with pink and white blooms in a garden setting'
    }
  ]

  const testimonials = [
    {
      id: 1,
      quote: "Grinset Wave transformed my balcony into an urban oasis!",
      author: "Sarah J.",
      role: "Urban Gardener"
    },
    {
      id: 2,
      quote: "The plant selection is incredible and their care guides are so helpful.",
      author: "Michael T.",
      role: "Plant Enthusiast"
    },
    {
      id: 3,
      quote: "I've never kept plants alive before - now my home is full of thriving greenery!",
      author: "Emma L.",
      role: "Beginner Gardener"
    }
  ]

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(`Thank you for subscribing with ${email}! We'll send gardening tips to your inbox.`)
    setEmail('')
  }

  return (
    <>
      <Head>
        <title>Grinset Wave | Cultivate Your Green Space</title>
        <meta name="description" content="Discover premium plants and gardening supplies at Grinset Wave" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="bg-green-700 text-white">
        <div className="container mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <span className="text-2xl font-bold">Grinset Wave</span>
            </div>
            
            <nav className="hidden md:flex space-x-8">
              <a href="#plants" className="hover:text-green-200 transition">Plants</a>
              <a href="#about" className="hover:text-green-200 transition">About</a>
              <a href="#testimonials" className="hover:text-green-200 transition">Stories</a>
              <a href="#contact" className="hover:text-green-200 transition">Contact</a>
            </nav>

            <button 
              className="md:hidden text-white focus:outline-none"
              onClick={() => setMobileNavOpen(!mobileNavOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>

          {mobileNavOpen && (
            <div className="md:hidden mt-4 space-y-3 pb-4">
              <a href="#plants" className="block hover:text-green-200 transition">Plants</a>
              <a href="#about" className="block hover:text-green-200 transition">About</a>
              <a href="#testimonials" className="block hover:text-green-200 transition">Stories</a>
              <a href="#contact" className="block hover:text-green-200 transition">Contact</a>
            </div>
          )}
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative h-96 md:h-screen max-h-screen flex items-center justify-center">
          <div className="absolute inset-0 bg-green-600">
            <Image 
              src="https://placehold.co/1920x1080" 
              alt="Lush green garden with diverse plants and flowers"
              layout="fill"
              objectFit="cover"
              className="opacity-70"
              priority
            />
          </div>
          <div className="relative z-10 text-center px-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Cultivate Your Green Haven</h1>
            <p className="text-xl md:text-2xl text-white mb-8 max-w-2xl mx-auto">Premium plants and expert gardening advice for your home oasis</p>
            <button className="bg-white text-green-700 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition duration-300">
              Explore Collection
            </button>
          </div>
        </section>

        {/* Featured Plants */}
        <section id="plants" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Our Featured Plants</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {plants.map((plant) => (
                <div key={plant.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-2">
                  <div className="relative h-64">
                    <Image 
                      src={plant.src}
                      alt={plant.alt}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{plant.name}</h3>
                    <p className="text-gray-600 mb-4">{plant.description}</p>
                    <button className="text-green-600 font-medium hover:text-green-800 transition">
                      Learn More →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
                <h2 className="text-3xl font-bold mb-6">Our Green Mission</h2>
                <p className="text-gray-700 mb-4">
                  At Grinset Wave, we believe everyone deserves to connect with nature, no matter their space or experience level. 
                </p>
                <p className="text-gray-700 mb-6">
                  Founded in 2020, our team of horticultural experts curates each plant collection to ensure they thrive in your unique environment while providing expert support through every step of your gardening journey.
                </p>
                <button className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition">
                  Meet Our Team
                </button>
              </div>
              <div className="md:w-1/2 h-96 relative rounded-lg overflow-hidden">
                <Image 
                  src="https://placehold.co/800x600" 
                  alt="Team members tending to plants in a greenhouse environment"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonials" className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Green Stories</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="bg-white p-8 rounded-lg shadow-sm relative">
                  <div className="absolute top-4 left-4 text-green-500 text-5xl opacity-20">"</div>
                  <p className="text-gray-700 mb-6 relative z-10">{testimonial.quote}</p>
                  <div className="border-t border-gray-100 pt-4">
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-gray-500 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section id="contact" className="py-16 bg-green-700 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Get Gardening Tips Directly</h2>
            <p className="text-green-100 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter for seasonal planting guides, care tips, and exclusive offers
            </p>
            
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row justify-center max-w-md mx-auto gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="px-4 py-3 rounded-md text-gray-800 flex-grow focus:outline-none"
                required
              />
              <button 
                type="submit" 
                className="bg-green-800 px-6 py-3 rounded-md hover:bg-green-900 transition font-medium"
              >
                Subscribe
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Grinset Wave</h3>
              <p>Cultivating green spaces since 2020</p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Shop</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition">All Plants</a></li>
                <li><a href="#" className="hover:text-white transition">New Arrivals</a></li>
                <li><a href="#" className="hover:text-white transition">Plant Care</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition">About Us</a></li>
                <li><a href="#" className="hover:text-white transition">Careers</a></li>
                <li><a href="#" className="hover:text-white transition">Blog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Connect</h4>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-white transition">
                  <span className="sr-only">Facebook</span>
                  <i className="fab fa-facebook"></i>
                </a>
                <a href="#" className="hover:text-white transition">
                  <span className="sr-only">Instagram</span>
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" className="hover:text-white transition">
                  <span className="sr-only">Twitter</span>
                  <i className="fab fa-twitter"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            <p>&copy; {new Date().getFullYear()} Grinset Wave. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  )
}
