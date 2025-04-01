"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"

const TeamPage = () => {
  const teamMembers = [
    // Chiropractors
    { id: 1, name: "Dr. Sarah Johnson", role: "Chiropractor", img: "/assets/images/team/pic1.jpg" },
    { id: 2, name: "Dr. Michael Chen", role: "Chiropractor", img: "/assets/images/team/pic1.jpg" },
    
    // Kinesiologist
    { id: 3, name: "Alex Thompson", role: "Kinesiologist", img: "/assets/images/team/pic1.jpg" },
    
    // RMTs
    { id: 4, name: "Emily Rodriguez", role: "RMT", img: "/assets/images/team/pic1.jpg" },
    { id: 5, name: "James Wilson", role: "RMT", img: "/assets/images/team/pic1.jpg" },
    { id: 6, name: "Sophia Nguyen", role: "RMT", img: "/assets/images/team/pic1.jpg" },
    { id: 7, name: "Lucas Martin", role: "RMT", img: "/assets/images/team/pic1.jpg" },
    
    // Physiotherapists
    { id: 8, name: "Dr. Olivia Smith", role: "Physiotherapist", img: "/assets/images/team/pic1.jpg" },
    { id: 9, name: "Dr. Ethan Brown", role: "Physiotherapist", img: "/assets/images/team/pic1.jpg" },
  ]

  const roleColors = {
    Chiropractor: "bg-blue-100 text-blue-800",
    Kinesiologist: "bg-green-100 text-green-800",
    RMT: "bg-purple-100 text-purple-800",
    Physiotherapist: "bg-orange-100 text-orange-800",
  }

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
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
            <div className="relative h-72">
              <Image
                src={member.img}
                alt={member.name}
                fill
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
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
                <button className="text-blue-600 hover:text-blue-800 transition-colors">
                  View Profile
                </button>
                <span className="text-gray-300">•</span>
                <button className="text-blue-600 hover:text-blue-800 transition-colors">
                  Book Now
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Role Filter Tabs */}
      <div className="flex justify-center gap-4 mb-12">
        {Object.keys(roleColors).map((role) => (
          <button
            key={role}
            className={`px-6 py-2 rounded-full font-medium transition-colors ${
              roleColors[role]
            } hover:opacity-90`}
          >
            {role}s
          </button>
        ))}
      </div>
    </div>
  )
}

export default TeamPage