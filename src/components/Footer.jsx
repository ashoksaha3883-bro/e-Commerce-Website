export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        
        {/* Logo + Description */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">FashionHub</h2>
          <p className="text-sm mb-4">
            Trendy outfits delivered fast. Your trusted online fashion store.
          </p>

          {/* Social Icons (simple SVGs) */}
          <div className="flex space-x-4 mt-4">
            <a className="hover:text-white cursor-pointer">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M22 12c0-5.522-4.477-10-10-10S2 6.478 2 12c0 5.01 3.657 9.163 8.438 9.878v-6.988H7.898v-2.89h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.563v1.873h2.773l-.443 2.89h-2.33V21.88C18.343 21.163 22 17.01 22 12z"/>
              </svg>
            </a>

            <a className="hover:text-white cursor-pointer">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.2c3.18 0 3.58.01 4.85.07 1.17.05 1.96.24 2.42.41a4.9 4.9 0 0 1 1.77 1.15 4.9 4.9 0 0 1 1.15 1.77c.17.46.36 1.25.41 2.42.06 1.27.07 1.67.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.24 1.96-.41 2.42a4.9 4.9 0 0 1-1.15 1.77 4.9 4.9 0 0 1-1.77 1.15c-.46.17-1.25.36-2.42.41-1.27.06-1.67.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.96-.24-2.42-.41a4.9 4.9 0 0 1-1.77-1.15A4.9 4.9 0 0 1 2.68 19c-.17-.46-.36-1.25-.41-2.42C2.21 15.32 2.2 14.92 2.2 11.75s.01-3.58.07-4.85c.05-1.17.24-1.96.41-2.42a4.9 4.9 0 0 1 1.15-1.77A4.9 4.9 0 0 1 5.6 1.75c.46-.17 1.25-.36 2.42-.41C8.29 1.21 8.69 1.2 11.87 1.2h.13z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Shop</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">Men</li>
            <li className="hover:text-white cursor-pointer">Women</li>
            <li className="hover:text-white cursor-pointer">Kids</li>
            <li className="hover:text-white cursor-pointer">Sale</li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Support</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">Help Center</li>
            <li className="hover:text-white cursor-pointer">Shipping</li>
            <li className="hover:text-white cursor-pointer">Returns</li>
            <li className="hover:text-white cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Stay Updated</h3>
          <p className="text-sm mb-3">Get the latest fashion trends & offers.</p>
          <div className="flex flex-col sm:flex-row">
            <input
              type="email"
              placeholder="Email Address"
              className="w-full sm:w-auto px-3 py-2 rounded-l-md  text-gray-900 mb-3 sm:mb-0"
            />
            <button className="bg-blue-600 text-white px-4 py-2 rounded-r-md hover:bg-blue-700 w-full sm:w-auto">
              Join
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Copy */}
      <div className="border-t border-gray-700 mt-10 pt-4 text-center text-sm">
        © {new Date().getFullYear()} FashionHub. All rights reserved.
      </div>
    </footer>
  );
}