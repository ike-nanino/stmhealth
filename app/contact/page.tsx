
import Image from "next/image";

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import Header from '@/components/Header';
import GoogleMapComponent from '@/components/GoogleMapsComponent';



function Contact() {

    

  return (
    <div>
        <div className="relative">
        <Header />
        <div className="relative w-full h-auto overflow-hidden">
          <div className="relative h-[460px] w-full">
            <Image
              src="/assets/images/massage.jpg"
              alt="Contact"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/50" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4">
              <h1 className="text-6xl md:text-5xl font-regular mb-4 font-secondary ">
                Contact Us
              </h1>
            </div>
          </div>
        </div>
      </div>



      <div className="w-full py-10 px-4 md:px-10 overflow-hidden">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          <div className='xl:h-[54%] order-2 xl:order-none'>
            <form className='flex flex-col gap-6 p-4 md:p-10 bg-gold rounded-xl'>
              <h3 className='text-4xl text-black text-center'>Secure Your Spot, Ask Us Anything</h3>
              <p className='text-black/85 text-center'> Reach Out To Us</p>

              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <Input name="firstName" type='text' placeholder='First Name' required />
                <Input name="lastName" type='text' placeholder='Last Name' required />
                <Input name="email"  type='email' placeholder='Email Address' required />
                <Input name="phone"  type='text' placeholder='Phone Number' />
              </div>

              <Textarea name="message"  className='h-[200px]' placeholder='Type your message here' required />

              <Button type='submit' size='sm' className='max-w-32 bg-green-400 p-4' >
                Submit
              </Button>

            </form>
          </div>
        </div>
      </div>

      {/* <div className="my-6">
        <GoogleMapComponent />
      </div> */}
      
    </div>
  )
}

export default Contact;