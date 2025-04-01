"use client"

import Header from "@/components/Header"
import { motion } from "framer-motion"
import Image from "next/image"

const TreatmentsPage = () => {
    const treatments = [
        {
            title: "Chiropractic Care",
            image: "/assets/images/kinesiology.jpg",
            content: [
                "Primary healthcare practitioners specializing in musculoskeletal health",
                "Expertise in spinal adjustments and joint manipulation",
                "Treatment for:",
                "• Acute/chronic pain management",
                "• Posture correction",
                "• Sports injuries",
                "• Preventive care",
                "One-on-one personalized treatment sessions"
            ]
        },
        {
            title: "Physiotherapy",
            image: "/assets/images/physiotherapy.jpg",
            content: [
                "Evidence-based physical rehabilitation",
                "Comprehensive care for:",
                "• Musculoskeletal injuries",
                "• Neurological conditions (stroke, TBI)",
                "• Cardiorespiratory rehabilitation",
                "Treatment modalities include:",
                "✓ Therapeutic exercise",
                "✓ Shockwave therapy",
                "✓ Dry needling",
                "Personalized 1:1 sessions with dedicated therapists"
            ]
        },
        {
            title: "Massage Therapy",
            image: "/assets/images/massage.jpg",
            content: [
                "CMTBC-certified registered massage therapists",
                "Specialized in:",
                "• Deep tissue massage",
                "• Myofascial release",
                "• Sports massage",
                "• Pregnancy massage",
                "Benefits include:",
                "✓ Pain relief",
                "✓ Improved circulation",
                "✓ Stress reduction",
                "✓ Enhanced mobility",
                "Direct billing to ICBC and most insurers"
            ]
        }
    ]

    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    }

    return (

        <main>

            <div className="relative">
                <Header />
                <div className="relative w-full h-auto overflow-hidden">
                    <div className="relative h-[460px] w-full">
                        <Image
                            src="/assets/images/kinesiology.jpg"
                            alt="Contact"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-black/50" />
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4">
                            <h1 className="text-6xl md:text-5xl font-regular mb-4 font-secondary ">
                               Treatments
                            </h1>
                        </div>
                    </div>
                </div>
            </div>


            <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={fadeIn}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">
                        Our Specialized Treatments
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Evidence-based therapies tailored to your unique needs
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {treatments.map((treatment, index) => (
                        <motion.div
                            key={treatment.title}
                            variants={fadeIn}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ delay: index * 0.2 }}
                            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group flex flex-col"
                        >
                            <div className="relative h-64">
                                <Image
                                    src={treatment.image}
                                    alt={treatment.title}
                                    fill
                                    className="object-cover transition-all duration-500"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 via-transparent to-transparent" />
                            </div>

                            <div className="p-6 flex flex-col flex-grow">
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                                    {treatment.title}
                                </h2>
                                <div className="space-y-3 text-gray-600 flex-grow">
                                    {treatment.content.map((item, i) => (
                                        <p key={i} className="flex items-start">
                                            {item.startsWith("✓") && (
                                                <span className="text-green-600 mr-2 mt-1">✓</span>
                                            )}
                                            {item.startsWith("•") ? (
                                                <span className="block ml-2">{item}</span>
                                            ) : (
                                                item
                                            )}
                                        </p>
                                    ))}
                                </div>

                                <button className="mt-6 w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
                                    <span>Book Appointment</span>
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinecap="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Insurance Banner */}
                <motion.div
                    variants={fadeIn}
                    className="mt-16 bg-gradient-to-r from-blue-600 to-green-600 text-white p-8 rounded-2xl text-center max-w-4xl mx-auto"
                >
                    <h3 className="text-2xl font-bold mb-4">Seamless Insurance Processing</h3>
                    <p className="mb-4">We directly bill to ICBC and most major insurers including:</p>
                    <div className="flex flex-wrap justify-center gap-6 items-center">
                        {['ICBC', 'Manulife', 'Sun Life', 'Great-West Life', 'Blue Cross'].map((insurer) => (
                            <span key={insurer} className="bg-white/20 px-4 py-2 rounded-full">
                                {insurer}
                            </span>
                        ))}
                    </div>
                </motion.div>
            </div>
        </main>
    )
}

export default TreatmentsPage