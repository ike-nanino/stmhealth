"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import Header from "@/components/Header"

const TeamPage = () => {
  const teamMembers = [
    // Chiropractors
    { id: 1, name: "Dr. Sarah Johnson", role: "Chiropractor", img: "/assets/images/team/pic1.jpg" },
    { id: 2, name: "Dr. Michael Chen", role: "Chiropractor", img: "/assets/images/team/pic2.jpg" },
    
    // Kinesiologist
    { id: 3, name: "Alexis Thompson", role: "Kinesiologist", img: "/assets/images/team/pic5.jpg" },
    
    // RMTs
    { id: 4, name: "Emily Rodriguez", role: "RMT", img: "/assets/images/team/pic3.jpg" },
    { id: 5, name: "Sophia Nguyen", role: "RMT", img: "/assets/images/team/pic4.jpg" },
    { id: 6, name: "James Wilson", role: "RMT", img: "/assets/images/team/pic6.jpg" },
    { id: 7, name: "Lucia Martin", role: "RMT", img: "/assets/images/team/pic2.jpg" },
    
    // Physiotherapists
    { id: 8, name: "Dr. Olivia Smith", role: "Physiotherapist", img: "/assets/images/team/pic1.jpg" },
    { id: 9, name: "Dr. Etel Brown", role: "Physiotherapist", img: "/assets/images/team/pic5.jpg" },
  ]

  const roleColors = {
    Chiropractor: "bg-blue-100 text-blue-800",
    Kinesiologist: "bg-green-100 text-green-800",
    RMT: "bg-purple-100 text-purple-800",
    Physiotherapist: "bg-orange-100 text-orange-800",
  }

  return (

    <main>

         <div className="relative">
                <Header />
                <div className="relative w-full h-auto overflow-hidden">
                  <div className="relative h-[460px] w-full">
                    <Image
                      src="/assets/images/teampic.jpg"
                      alt="Contact"
                      fill
                      className="object-cover"
                      priority
                    />
                    <div className="absolute inset-0 bg-black/50" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4">
                      <h1 className="text-6xl md:text-5xl font-regular mb-4 font-secondary ">
                        Our Team
                      </h1>
                    </div>
                  </div>
                </div>
              </div>


    <section className=" bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Meet Our Expert Team
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Dedicated professionals committed to your health and wellness journey
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {teamMembers.map((member, index) => (
          <motion.div
            key={member.id}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
          >
            <div className="relative h-72 ">
              <Image
                src={member.img}
                alt={member.name}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105 cursor-pointer"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent" />
              <Badge className={`absolute top-4 right-4 ${roleColors[member.role]}`}>
                {member.role}
              </Badge>
            </div>
            
            <div className="p-6 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{member.name}</h3>
              <div className="flex justify-center space-x-2">
                <button className="text-blue-600 hover:text-blue-800 transition-colors cursor-pointer">
                  View Profile
                </button>
                <span className="text-gray-300">•</span>
                <button className="text-blue-600 hover:text-blue-800 transition-colors cursor-pointer">
                  Book Now
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

    </section>
    </main>
  )
}

export default TeamPage