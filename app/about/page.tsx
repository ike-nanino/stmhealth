"use client"

import Header from "@/components/Header";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import Image from "next/image";
import { useState } from "react";

export default function AboutSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);


const faqData = [
    {
      question: "How do I book an appointment?",
      answer:
        "You can book online or give us a call at 604-630-8815",
    },
    {
      question: "What can I expect for my first treatment/follow-ing treatments?",
      answer:
        "If it is your first treatment, your practitioner will go through an initial assessment of your symptoms and complaints. Specific questions and tests will help determine a treatment plan to follow. Pain can sometimes be normal in early sessions depending on the severity of your symptoms. Your practitioner will discuss and address any questions and concerns and obtain consent from you before starting any type of treatment.",
    },
    {
      question: "Do you do direct billing?",
      answer:
        "We do for most major insurances and for most practices but you may need to check your insurance provider.",
    },
    {
      question: "Can you bill to my friend's extended benefits?",
      answer:
        "No, we cannot do this.",
    },
    {
      question:
        "How do I find your clinic?",
      answer:
        "We are located inside of Richmond Sports and Fitness gym (RSF) at 150- 2215 No.5 Rd Richmond BC. There is free parking in the parking lot and street parking on either side of No.5 Rd.",
    },

  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <main>

         <div className="relative">
                <Header />
                <div className="relative w-full h-auto overflow-hidden">
                  <div className="relative h-[460px] w-full">
                    <Image
                      src="/assets/images/about.jpg"
                      alt="Contact"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/50" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4">
                      <h1 className="text-6xl md:text-5xl font-regular mb-4 font-secondary ">
                        About Us
                      </h1>
                    </div>
                  </div>
                </div>
              </div>



    <section className="py-16 px-4 md:px-8 lg:py-24 bg-gray-50">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
          About Strength Through Motion
        </h2>

        <Tabs defaultValue="vision" className="w-full">
          <TabsList className="grid w-full grid-cols-2  p-2 rounded-lg">
            <TabsTrigger 
              value="vision"
              className="data-[state=active]:bg-white data-[state=active]:shadow-sm rounded-md py-3 transition-all"
            >
              Our Vision
            </TabsTrigger>
            <TabsTrigger 
              value="mission"
              className="data-[state=active]:bg-white data-[state=active]:shadow-sm rounded-md py-3 transition-all"
            >
              Our Mission
            </TabsTrigger>
          </TabsList>

          {/* Vision Content */}
          <TabsContent value="vision" className="mt-8">
            <div className="space-y-6 text-gray-600">
              <p className="leading-relaxed">
                Here at Strength Through Motion our philosophy appreciates the trifecta of health – 
                the mental, physical, and social health, they all feed off and impact each other.
              </p>

              <p className="leading-relaxed">
                Strength Through Motion is a way of life. We build physical strength through training, 
                which allows us to excel in our physical activities – essentially, allowing us to be 
                in motion. However, when in motion, not only do our bodies benefit physically, but 
                mentally and socially as well.
              </p>

              <p className="leading-relaxed">
                Exercise produces positive emotions and helps lower the body’s stress levels. Setting 
                and achieving our goals increases our self-confidence and happiness. When we are in motion, 
                in all aspects of our life, by moving forward towards our goals, we continually strengthen 
                our mental and social health. Furthering our education and skills, meeting new people, 
                joining a recreational team, stepping out of our comfort zone – all of it makes us stronger! 
                By being in motion we build strength, by building our strength we allow ourselves to be in 
                motion – it is a powerful force that thrives off itself.
              </p>
            </div>
          </TabsContent>

          {/* Mission Content */}
          <TabsContent value="mission" className="mt-8">
            <div className="space-y-6 text-gray-600">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  Our Commitment
                </h3>
                <p className="leading-relaxed">
                  Our mission is to share the movement that is Strength Through Motion. To motivate 
                  and spread positivity to others and have them push and better themselves in every 
                  capacity. We want our members of the STM movement to break through their comfort 
                  zones and experience the growth in their self-discipline, self-confidence, and 
                  self-esteem.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  Our Services
                </h3>
                <p className="leading-relaxed">
                  Strength Through Motion provides health and fitness services to Metro Vancouver. 
                  Our staff are experienced in injury prevention and injury rehabilitation. If you 
                  have an injury that is affecting your daily life or would like to increase your 
                  level of performance in your sport or physical activity, our team at STM can help 
                  you with your goals.
                </p>
                <p className="leading-relaxed">
                  Our primary aim is to provide a positive experience for you, focusing on your needs 
                  and helping you better yourself with our experience, knowledge, and professionalism. 
                  We take pride in our work and we will continue to evaluate your progress and tailor 
                  your program as your goals evolve.
                </p>
                <p className="leading-relaxed font-medium text-gray-800">
                  We look forward to being a part of your journey.
                </p>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>


    <div className="container mx-auto px-4 py-12">
        <h1
          className="text-4xl text-center mb-8">
          Frequently Asked Questions
        </h1>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqData.map((faq, index) => (
            <div key={index} className="border border-gold rounded-sm">
              <button
                className="w-full flex justify-between items-center p-4 text-left hover:bg-gray-50"
                onClick={() => toggleFaq(index)}
              >
                <span className="text-lg">{faq.question}</span>
                <span
                  className="text-base transition-transform duration-200"
                  style={{
                    transform:
                      openIndex === index ? "rotate(180deg)" : "rotate(0deg)",
                  }}
                >
                  ˅
                </span>
              </button>
              <div
                className="px-4 overflow-hidden transition-all duration-200"
                style={{
                  maxHeight: openIndex === index ? "200px" : "0",
                  opacity: openIndex === index ? 1 : 0,
                  padding: openIndex === index ? "0 1rem 1rem 1rem" : "0 1rem",
                }}
              >
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}