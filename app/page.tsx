'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  const phoneNumber = "7025551234";
  const smsLink = `sms:${phoneNumber}`;
  const [selectedCompound, setSelectedCompound] = useState<string | null>(null);

  const compounds = [
    {
      name: "BPC-157",
      title: "Body Protection Compound",
      category: "Recovery & Healing",
      description: "Promotes tissue repair and accelerates healing of muscles, tendons, and ligaments.",
      benefits: [
        "Accelerates wound and tissue healing",
        "Supports tendon and ligament repair",
        "May reduce inflammation",
        "Promotes gut health and mucosal integrity"
      ],
      research: "Preclinical studies show BPC-157 promotes mucosal integrity, enhances growth hormone receptor expression in tendon fibroblasts, and demonstrates cytoprotective and anti-inflammatory effects."
    },
    {
      name: "CJC-1295 + Ipamorelin",
      title: "Growth Hormone Stack",
      category: "Performance & Recovery",
      description: "Synergistic combination that naturally boosts growth hormone production.",
      benefits: [
        "Increases natural GH and IGF-1 levels",
        "Supports muscle growth and fat loss",
        "Improves recovery and sleep quality",
        "Minimal side effects vs traditional GH"
      ],
      research: "Clinical trials show sustained, dose-dependent increases in GH and IGF-I levels in healthy adults. Ipamorelin induces GH secretion at biologically effective levels with peak concentration within one hour."
    },
    {
      name: "Tesamorelin",
      title: "Visceral Fat Reducer",
      category: "Body Composition",
      description: "FDA-approved GHRH analogue that specifically targets abdominal fat.",
      benefits: [
        "Reduces visceral (belly) fat",
        "Improves metabolic markers",
        "Enhances muscle quality",
        "Supports healthy body composition"
      ],
      research: "Published in NEJM: Tesamorelin significantly decreases visceral adiposity in clinical trials. Improves fat quality independent of changes in total fat quantity."
    },
    {
      name: "Semax",
      title: "Cognitive Enhancer",
      category: "Brain & Focus",
      description: "Nootropic peptide that supports brain function, focus, and mental clarity.",
      benefits: [
        "Enhances learning and memory",
        "Supports focus and concentration",
        "Neuroprotective properties",
        "May reduce stress response"
      ],
      research: "Research demonstrates Semax stimulates learning and memory formation in humans, promotes neuronal survival during hypoxia, and reduces anxiety in stress conditions."
    },
    {
      name: "Selank",
      title: "Anxiety & Stress Support",
      category: "Mental Wellness",
      description: "Anxiolytic peptide that helps reduce anxiety without sedation.",
      benefits: [
        "Reduces anxiety and stress",
        "Enhances cognitive function",
        "Mood regulation support",
        "No sedative effects"
      ],
      research: "Clinical studies show Selank effectively reduces elevated anxiety levels. It modulates neurotransmitters, boosts mood by inhibiting enkephalin-degrading enzymes."
    },
    {
      name: "Epitalon",
      title: "Longevity Peptide",
      category: "Anti-Aging",
      description: "Tetrapeptide that activates telomerase to potentially slow cellular aging.",
      benefits: [
        "Increases telomere length",
        "Activates telomerase enzyme",
        "Supports circadian rhythm",
        "May promote longevity"
      ],
      research: "Human clinical studies show Epitalon significantly increased telomere lengths in blood cells of patients aged 60-80. One of the broadest-reaching peptides in longevity science."
    },
    {
      name: "GHK-Cu",
      title: "Copper Peptide",
      category: "Skin & Healing",
      description: "Powerful tissue remodeling and skin rejuvenation compound.",
      benefits: [
        "Accelerates wound healing",
        "Stimulates collagen production",
        "Improves skin texture and firmness",
        "Antioxidant and anti-inflammatory"
      ],
      research: "Research shows GHK-Cu enhances collagen synthesis, improves extracellular matrix organization, and accelerates wound healing in both healthy and diabetic subjects."
    },
    {
      name: "MOTS-C",
      title: "Mitochondrial Peptide",
      category: "Metabolism & Energy",
      description: "Regulates metabolic function and enhances cellular energy production.",
      benefits: [
        "Enhances glucose metabolism",
        "Improves insulin sensitivity",
        "Boosts mitochondrial function",
        "Supports exercise capacity"
      ],
      research: "Studies show MOTS-C targets skeletal muscle, enhances glucose metabolism, regulates energy homeostasis, and plays important roles in cardiovascular health and aging."
    },
    {
      name: "NAD+",
      title: "Cellular Energy Booster",
      category: "Energy & Longevity",
      description: "Essential coenzyme for cellular energy production and DNA repair.",
      benefits: [
        "Boosts cellular energy (ATP production)",
        "Supports DNA repair",
        "Activates longevity genes (sirtuins)",
        "Enhances metabolic function"
      ],
      research: "NAD+ levels decline with age. Supplementation activates sirtuins, supports cellular energy and metabolism, and helps maintain healthy DNA to promote healthy cellular aging."
    }
  ];

  return (
    <div className="min-h-screen bg-[#F5F1EC]">
      
      {/* Decorative Curve - Top */}
      <div className="absolute top-0 left-0 w-full h-64 overflow-hidden pointer-events-none">
        <svg viewBox="0 0 1440 320" className="absolute bottom-0 w-full" preserveAspectRatio="none">
          <path fill="#D4C4B0" fillOpacity="0.3" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,133.3C672,139,768,181,864,181.3C960,181,1056,139,1152,128C1248,117,1344,139,1392,149.3L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
        </svg>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image 
            src="/hero-flyer.jpg" 
            alt="Peptide Pros" 
            fill
            className="object-cover opacity-15"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#F5F1EC]/95 via-white/90 to-[#D4C4B0]/60" />
        </div>

        {/* Decorative Curves */}
        <svg className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none" viewBox="0 0 1440 800" preserveAspectRatio="none">
          <path fill="none" stroke="#6B7655" strokeWidth="3" d="M0,400 Q360,200 720,400 T1440,400" />
          <path fill="none" stroke="#D4C4B0" strokeWidth="2" d="M0,450 Q360,250 720,450 T1440,450" />
        </svg>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 text-center">
          <motion.div {...fadeInUp}>
            <h1 className="text-6xl md:text-8xl font-bold text-[#4A3933] mb-4 tracking-tight">
              PEPTIDE PROS
            </h1>
            <div className="flex items-center justify-center gap-2 mb-8">
              <div className="h-px w-12 bg-[#6B7655]" />
              <p className="text-xl md:text-2xl text-[#6B7655] font-medium uppercase tracking-wider">
                Peptides Are for Everyone
              </p>
              <div className="h-px w-12 bg-[#6B7655]" />
              <span className="text-[#6B7655] text-2xl">✦</span>
            </div>
          </motion.div>

          <motion.p 
            {...fadeInUp}
            transition={{ delay: 0.2 }}
            className="text-2xl md:text-3xl text-[#4A3933] max-w-3xl mx-auto mb-6 font-light"
          >
            Clear education. Local support. Real conversations.
          </motion.p>
          
          <motion.p 
            {...fadeInUp}
            transition={{ delay: 0.3 }}
            className="text-lg text-gray-700 max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            Peptide Pros is a <span className="font-semibold text-[#4A3933]">Las Vegas based</span> education and sourcing company helping adults explore peptide research <span className="font-semibold text-[#6B7655]">responsibly and confidently</span>.
          </motion.p>
          
          <motion.div 
            {...fadeInUp}
            transition={{ delay: 0.4 }}
            className="mb-12"
          >
            <p className="text-xl font-semibold text-[#4A3933] mb-8">
              Have a question? Text us directly.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <motion.a
                href={smsLink}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-10 py-5 bg-[#6B7655] text-white font-bold text-lg rounded-full overflow-hidden shadow-xl"
              >
                <span className="relative z-10">Text a Local Nurse</span>
                <div className="absolute inset-0 bg-[#4A3933] opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.a>
              
              <motion.a
                href="#compounds"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 bg-white text-[#4A3933] font-bold text-lg rounded-full border-2 border-[#D4C4B0] hover:border-[#6B7655] transition-all shadow-lg"
              >
                Learn the Basics
              </motion.a>
            </div>
            
            <p className="text-sm text-gray-600 italic">
              Fast responses. Real conversation. No pressure.
            </p>
          </motion.div>
        </div>

        {/* Bottom Curve */}
        <svg className="absolute bottom-0 left-0 w-full" viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path fill="white" d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,69.3C960,85,1056,107,1152,101.3C1248,96,1344,64,1392,48L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"></path>
        </svg>
      </section>

      {/* Why Section */}
      <section className="py-24 px-6 bg-white relative overflow-hidden">
        <svg className="absolute right-0 top-1/2 -translate-y-1/2 opacity-10" width="400" height="400" viewBox="0 0 400 400">
          <path fill="none" stroke="#D4C4B0" strokeWidth="8" d="M200,50 Q300,100 250,200 T200,350" />
        </svg>

        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-bold text-[#4A3933] mb-4 text-center">
              Why Peptide Pros
            </h2>
            <div className="flex justify-center gap-2 mb-12">
              <div className="w-16 h-1 bg-[#6B7655] rounded-full" />
              <div className="w-16 h-1 bg-[#D4C4B0] rounded-full" />
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <p className="text-xl text-gray-700 leading-relaxed">
                Most peptide websites are anonymous and transactional.
              </p>
              <p className="text-xl text-[#4A3933] font-bold leading-relaxed">
                At Peptide Pros, you speak with a real local nurse before making decisions.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                We educate you about what compounds are, how they are discussed in research, and what questions you should be asking.
              </p>
              <div className="flex gap-4 items-start p-6 bg-[#F5F1EC] rounded-2xl border-l-4 border-[#6B7655]">
                <div className="text-[#4A3933] font-bold text-lg">Education First</div>
              </div>
              <p className="text-lg font-semibold text-[#6B7655]">
                No pressure. No hype. Just clarity.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <Image 
                  src="/hero-flyer.jpg" 
                  alt="Your Local Peptide Consulting Experts"
                  width={600}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-[#6B7655] text-white px-6 py-4 rounded-2xl shadow-xl">
                <p className="text-sm font-semibold uppercase tracking-wide">Locally Owned</p>
                <p className="text-2xl font-bold">Las Vegas</p>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-center mt-16"
          >
            <motion.a
              href={smsLink}
              whileHover={{ scale: 1.05 }}
              className="inline-block px-8 py-4 bg-[#6B7655] text-white font-bold text-lg rounded-full shadow-lg"
            >
              Start a Conversation by Text
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Who We Work With */}
      <section className="py-24 px-6 bg-gradient-to-br from-[#F5F1EC] to-white relative overflow-hidden">
        <svg className="absolute left-0 bottom-0 opacity-10" width="300" height="300" viewBox="0 0 300 300">
          <path fill="none" stroke="#6B7655" strokeWidth="6" d="M50,150 Q100,50 150,150 T250,150" />
        </svg>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-bold text-[#4A3933] mb-4 text-center">
              Who We Work With
            </h2>
            <div className="flex justify-center gap-2 mb-16">
              <div className="w-16 h-1 bg-[#6B7655] rounded-full" />
              <div className="w-16 h-1 bg-[#D4C4B0] rounded-full" />
            </div>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              { title: "Active Adults", desc: "Gym members and CrossFit athletes exploring recovery conversations." },
              { title: "Busy Professionals", desc: "Energy and focus discussions." },
              { title: "Parents 30 to 55", desc: "Balancing life, work, and wellness." },
              { title: "Wellness Curious", desc: "Exploring longevity and emerging research." }
            ].map((audience, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all border-t-4 border-[#6B7655]"
              >
                <h3 className="text-xl font-bold text-[#4A3933] mb-3">{audience.title}</h3>
                <p className="text-gray-700 leading-relaxed">{audience.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-xl text-[#4A3933] font-semibold mt-12"
          >
            If that sounds like you, text us.
          </motion.p>
        </div>
      </section>

      {/* Compounds Grid */}
      <section id="compounds" className="py-24 px-6 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-bold text-[#4A3933] mb-4 text-center">
              Popular Compounds
            </h2>
            <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-4">
              Research-backed compounds discussed in our community
            </p>
            <div className="flex justify-center gap-2 mb-16">
              <div className="w-16 h-1 bg-[#6B7655] rounded-full" />
              <div className="w-16 h-1 bg-[#D4C4B0] rounded-full" />
            </div>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {compounds.map((compound, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                whileHover={{ y: -5 }}
                onClick={() => setSelectedCompound(compound.name)}
                className="group bg-gradient-to-br from-white to-[#F5F1EC] p-6 rounded-2xl shadow-md hover:shadow-xl transition-all cursor-pointer border border-[#D4C4B0] hover:border-[#6B7655]"
              >
                <div className="inline-block px-4 py-1 bg-[#6B7655] text-white text-xs font-bold rounded-full mb-3 uppercase tracking-wide">
                  {compound.category}
                </div>
                <h3 className="text-2xl font-bold text-[#4A3933] mb-2">{compound.name}</h3>
                <p className="text-sm text-[#6B7655] font-semibold mb-3">{compound.title}</p>
                <p className="text-gray-700 mb-4 leading-relaxed text-sm">{compound.description}</p>
                <div className="text-[#6B7655] font-semibold group-hover:translate-x-2 transition-transform inline-flex items-center gap-2 text-sm">
                  Learn More →
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <p className="text-lg text-gray-700 mb-8">
              <span className="font-semibold">Not sure where to start?</span> Text us your question.
            </p>
            <motion.a
              href={smsLink}
              whileHover={{ scale: 1.05 }}
              className="inline-block px-8 py-4 bg-[#6B7655] text-white font-bold text-lg rounded-full shadow-lg"
            >
              Text Us Now
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Compound Modal */}
      {selectedCompound && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setSelectedCompound(null)}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-3xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
          >
            {compounds.find(c => c.name === selectedCompound) && (
              <>
                <div className="bg-gradient-to-r from-[#6B7655] to-[#4A3933] p-8 text-white rounded-t-3xl">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-4xl font-bold mb-2">{selectedCompound}</h3>
                      <p className="text-xl opacity-90">{compounds.find(c => c.name === selectedCompound)!.title}</p>
                    </div>
                    <button
                      onClick={() => setSelectedCompound(null)}
                      className="text-white/80 hover:text-white text-3xl"
                    >
                      ×
                    </button>
                  </div>
                </div>

                <div className="p-8">
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    {compounds.find(c => c.name === selectedCompound)!.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="text-xl font-bold text-[#4A3933] mb-4">Discussed Benefits:</h4>
                    <ul className="space-y-2">
                      {compounds.find(c => c.name === selectedCompound)!.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#6B7655] mt-2" />
                          <span className="text-gray-700">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-[#F5F1EC] p-6 rounded-2xl mb-6 border-l-4 border-[#6B7655]">
                    <h4 className="text-lg font-bold text-[#4A3933] mb-3">Research Summary:</h4>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {compounds.find(c => c.name === selectedCompound)!.research}
                    </p>
                  </div>

                  <div className="border-t pt-6">
                    <p className="text-sm text-gray-600 italic mb-4">
                      Educational information only. Not medical advice. Always consult a licensed healthcare professional.
                    </p>
                    <motion.a
                      href={smsLink}
                      whileHover={{ scale: 1.02 }}
                      className="block w-full text-center px-6 py-4 bg-[#6B7655] text-white font-bold rounded-full"
                    >
                      Text Us Your Questions
                    </motion.a>
                  </div>
                </div>
              </>
            )}
          </motion.div>
        </motion.div>
      )}

      {/* Benefits Banner */}
      <section className="relative py-16 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#4A3933] via-[#6B7655] to-[#4A3933]" />
        <svg className="absolute top-0 left-0 w-full h-full opacity-20" viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path fill="none" stroke="white" strokeWidth="2" d="M0,60 Q360,20 720,60 T1440,60" />
        </svg>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white"
          >
            {[
              "Boost Energy & Vitality",
              "Lose Fat & Build Muscle",
              "Improve Recovery & Longevity",
              "Feel Your Best"
            ].map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="w-3 h-3 bg-white rounded-full mx-auto mb-3" />
                <p className="font-bold text-lg">{benefit}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact CTA - Flyer Style */}
      <section className="py-20 px-6 bg-gradient-to-br from-[#6B7655] to-[#4A3933] text-white relative overflow-hidden">
        <svg className="absolute bottom-0 right-0 opacity-10" width="500" height="500" viewBox="0 0 500 500">
          <path fill="none" stroke="white" strokeWidth="8" d="M100,250 Q200,100 300,250 T500,250" />
        </svg>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-block px-8 py-3 bg-white/10 rounded-full mb-8 backdrop-blur">
              <p className="text-sm font-bold tracking-wide uppercase">Locally Owned & Based in Las Vegas</p>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6">(702) 555-1234</h2>
            <p className="text-2xl mb-12 opacity-90">www.peptidepros.com</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto"
          >
            <div className="bg-[#4A3933] p-8 rounded-2xl">
              <div className="text-4xl mb-4">📍</div>
              <p className="text-2xl font-bold mb-3">LOCAL DELIVERY</p>
              <p className="opacity-90">Convenient same-day delivery right to your door</p>
            </div>
            <div className="bg-[#4A3933] p-8 rounded-2xl">
              <div className="text-4xl mb-4">🏷️</div>
              <p className="text-2xl font-bold mb-3">PRICE MATCH GUARANTEE</p>
              <p className="opacity-90">Best prices on the highest quality peptides</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-12"
          >
            <motion.a
              href={smsLink}
              whileHover={{ scale: 1.05 }}
              className="inline-block px-12 py-5 bg-white text-[#4A3933] font-bold text-xl rounded-full shadow-2xl"
            >
              Start Your Journey
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-[#4A3933] text-white text-center">
        <p className="text-sm mb-4 opacity-80 max-w-2xl mx-auto leading-relaxed">
          Educational information only. Not medical advice.
          <br />
          Always consult a licensed healthcare professional regarding medical decisions.
        </p>
        <p className="text-xl font-semibold mb-6">Text us: (702) 555-1234</p>
        <p className="text-xs opacity-60">
          © {new Date().getFullYear()} Peptide Pros. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
