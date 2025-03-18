export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-gray-400">
              Your one-stop shop for premium fashion and accessories.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="/products" className="hover:text-blue-400 transition-colors">
                  Products
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-blue-400 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-blue-400 transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="/faq" className="hover:text-blue-400 transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Email: info@buysome.com</li>
              <li>Phone: (123) 456-7890</li>
              <li>Address: 123 Fashion St.</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a 
                  href="https://instagram.com/badboixixi" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-colors"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a 
                  href="https://twitter.com/badboixixi" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-colors"
                >
                  Twitter
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>
            © 2024 BuySome. All rights reserved. | Developed by{" "}
            <a 
              href="https://github.com/Badboixixi77" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 transition-colors font-semibold"
            >
              badboixixi77
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
