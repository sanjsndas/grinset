import Head from 'next/head'
import Image from 'next/image'

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact Us | Grinset Wave</title>
      </Head>

      <div className="min-h-screen bg-green-50">
        {/* Hero Section */}
        <div className="relative h-64 bg-green-600 flex items-center justify-center text-white">
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1600585152220-90363fe7e115?ixlib=rb-4.0.3&auto=format&fit=crop&w=1800&q=80"
              alt="Gardening tools and potted plants on a wooden table"
              layout="fill"
              objectFit="cover"
              className="opacity-40"
            />
          </div>
          <div className="relative z-10 text-center px-4">
            <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl">We'd love to hear from you</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="max-w-4xl mx-auto py-16 px-4">
          <div className="bg-white rounded-xl shadow-md p-8 md:p-12">
            <h2 className="text-3xl font-bold text-green-800 mb-6">Send Us a Message</h2>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-gray-700 mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
                <textarea
                  id="message"
                  rows="6"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>
          
          {/* Contact Info */}
          <div className="mt-16 bg-white rounded-xl shadow-md p-8">
            <h3 className="text-2xl font-bold text-green-800 mb-6">Our Contact Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex items-start">
                <div className="bg-green-100 p-3 rounded-full mr-4">
                  <i className="fas fa-map-marker-alt text-green-600 text-xl"></i>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Address</h4>
                  <p>123 Greenway Blvd</p>
                  <p>Portland, OR 97205</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-green-100 p-3 rounded-full mr-4">
                  <i className="fas fa-phone-alt text-green-600 text-xl"></i>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Phone</h4>
                  <p>(555) 123-4567</p>
                  <p>Mon-Fri: 9am-5pm</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-green-100 p-3 rounded-full mr-4">
                  <i className="fas fa-envelope text-green-600 text-xl"></i>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Email</h4>
                  <p>hello@grinsetwave.com</p>
                  <p>support@grinsetwave.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
