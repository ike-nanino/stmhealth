import Link from 'next/link'


export default function Footer() {
  return (
    <footer className="bg-black text-gray-200 py-12">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 text-center lg:text-left">
        {/* Address Section */}
        <div className='mx-auto'>
          <h3 className="text-green-600 font-semibold uppercase mb-4">Address</h3>
          <p>Strength Through Motion | STM</p>
          <p>#150-2251 No. 5 Road Richmond, BC V6X2S8</p>
          <p className="mt-4">admin@stmhealth.ca</p>
          <a href="tel:+1604-630-8815" className='hover:text-green-600 transition-colors duration-300'>604-630-8815</a>
        </div>

        {/* Services Section */}
        <div className='text-center'>
          <h3 className="text-green-600 font-semibold uppercase mb-4">Treatments</h3>
          <ul className="space-y-2">

            <li>
              <Link href='/treatments' className='hover:text-green-600 transition-colors duration-300'>
                Chiropatic
              </Link>
            </li>


            <li>
              <Link href='/treatments' className='hover:text-green-600 transition-colors duration-300 '>
                Kinesiology
              </Link>
            </li>


            <li>
              <Link href='/treatments' className='hover:text-green-600 transition-colors duration-300'>
                Physiotherapy
              </Link>
            </li>


            <li>
              <Link href='/treatments' className='hover:text-green-600 transition-colors duration-300'>
                Massage Therapy
              </Link>
            </li>


          </ul>
        </div>

        {/* Working Hours Section */}
        <div>
          <h3 className="text-green-600 font-semibold uppercase mb-4">Working Hours</h3>
          <p>Monday - Friday 08.00AM - 09.00PM</p>
          <p>Saturdays and Public Holidays - On Appointment</p>
          <div className="mt-4">
            <Link
              href='/contact'
            >
              <button className="px-4 py-2 bg-green-700 text-white rounded hover:bg-green-800 transition">
                Contact Us
              </button>
            </Link>

          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-700 mt-12 pt-6 text-center">
        <p>Copyright © 2025</p>
      </div>
    </footer>
  );
}
