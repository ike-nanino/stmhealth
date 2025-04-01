import Image from "next/image";

 function BlogCard() {
  return (

    <section className="grid grid-cols-1 md:grid-cols-3 gap-6 px-8 mb-4">
    <div className="w-full md:max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
     
      <div className="p-4">
     
        <span className="inline-block bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full">
        LeapBodies Grand Opening


        </span>

   
        <h2 className="mt-4 text-xl font-semibold text-gray-900 leading-snug">
        "Our Community is stronger when we work together" We had the honour of setting up a pop-up clinic at the Grand Opening of Chewy and...
        </h2>

   
        <p className="mt-2 text-sm text-gray-500">stmstaffjn</p>
      </div>

   
      <div className="relative w-full h-44">
        <Image
          src="/assets/images/blog3.jpg"
          alt="Fintech illustration"
          fill
          className="object-cover"
        />
      </div>
    </div>

    <div className="w-full md:max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
   
      <div className="p-4">
      
        <span className="inline-block bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full">
        Cam Wong Physio- YouTube Channel


        </span>

      
        <h2 className="mt-4 text-xl font-semibold text-gray-900 leading-snug">
        Our very own Cam Wong has a very informative YouTube Channel about everything and anything to do with Physiotherapy! Strength Through...
        </h2>

      
        <p className="mt-2 text-sm text-gray-500">stmstaffjn</p>
      </div>

    
      <div className="relative w-full h-44">
        <Image
          src="/assets/images/blog2.jpg"
          alt="Fintech illustration"
          fill
          className="object-cover"
        />
      </div>
    </div>

    <div className="w-full md:max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
 
      <div className="p-4">
  
        <span className="inline-block bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full">
        ICBC Enhanced Care
        </span>


        <h2 className="mt-4 text-xl font-semibold text-gray-900 leading-snug">
        Here's what you need to know for your medical care after your car accident! On May 1, 2021 ICBC implemented a new care-based insurance...
        </h2>

    
        <p className="mt-2 text-sm text-gray-500">stmstaffjn</p>
      </div>

      <div className="relative w-full h-44">
        <Image
          src="/assets/images/blog1.jpg"
          alt="Toronto illustration"
          fill
          className="object-cover"
        />
      </div>
    </div>

    </section>
   
  );
}
export default BlogCard