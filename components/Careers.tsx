"use client"

import { motion } from "framer-motion"
import { Briefcase, HeartPulse, Users, Gem, Dumbbell, Send } from "lucide-react"

const Careers = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  }

  return (
    <section className="py-16 px-4 md:px-8 lg:py-24 bg-white">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-blue-600">
              Careers at Strength Through Motion
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Where we take care of you, the clinician, as well as our patients.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Column */}
          <div className="space-y-12">
            <motion.div variants={fadeIn} className="p-6 bg-gray-50 rounded-xl">
              <div className="flex items-center gap-3 mb-4">
                <Briefcase className="w-8 h-8 text-green-600" />
                <h2 className="text-2xl font-semibold text-gray-900">Our Philosophy</h2>
              </div>
              <p className="text-gray-600">
                We are not a factory/volume style clinic. We provide experienced-based care 
                through a one-to-one model. Join us in delivering personalized rehabilitation 
                and wellness services.
              </p>
            </motion.div>

            <motion.div variants={fadeIn} className="p-6 bg-gray-50 rounded-xl">
              <div className="flex items-center gap-3 mb-4">
                <Users className="w-8 h-8 text-blue-600" />
                <h2 className="text-2xl font-semibold text-gray-900">Current Openings</h2>
              </div>
              <div className="grid gap-3">
                {['Physiotherapists', 'Chiropractors', 'Registered Massage Therapists'].map((role) => (
                  <div key={role} className="flex items-center gap-2 p-3 bg-white rounded-lg">
                    <HeartPulse className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700">{role}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="space-y-12">
            <motion.div variants={fadeIn} className="p-6 bg-gray-50 rounded-xl">
              <div className="flex items-center gap-3 mb-4">
                <Gem className="w-8 h-8 text-purple-600" />
                <h2 className="text-2xl font-semibold text-gray-900">Why Choose STM?</h2>
              </div>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start gap-2">
                  <Dumbbell className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span>Access to 5000sqft gym facility with premium equipment</span>
                </li>
                <li className="flex items-start gap-2">
                  <Users className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  <span>Multidisciplinary team collaboration & learning</span>
                </li>
                <li className="flex items-start gap-2">
                  <Send className="w-5 h-5 text-purple-600 flex-shrink-0" />
                  <span>1:1 patient care model - no cookie-cutter treatments</span>
                </li>
              </ul>
            </motion.div>

            <motion.div variants={fadeIn} className="p-6 bg-gray-50 rounded-xl">
              <div className="flex items-center gap-3 mb-4">
                <Send className="w-8 h-8 text-blue-600" />
                <h2 className="text-2xl font-semibold text-gray-900">Join Our Team</h2>
              </div>
              <p className="text-gray-600 mb-4">
                New grad or experienced - all are welcome! We're looking for positive,
                energetic professionals who value quality patient care.
              </p>
              <a
                href="mailto:careers@stmhealth.ca"
                className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
              >
                <Send className="w-4 h-4" />
                Apply Now
              </a>
            </motion.div>
          </div>
        </div>

        <motion.div variants={fadeIn} className="mt-16 text-center text-gray-600">
          <p>Job Types: Full-time, Part-time, Permanent</p>
          <p className="mt-2">Cover letters appreciated but not required</p>
        </motion.div>
      </div>
    </section>
  )
}

export default Careers