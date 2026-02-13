'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

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
  const phoneNumber = "7025551234"; // Placeholder
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
      research: "Preclinical studies show BPC-157 promotes mucosal integrity, enhances growth hormone receptor expression in tendon fibroblasts, and demonstrates cytoprotective and anti-inflammatory effects.",
      icon: "🛡️"
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
      research: "Clinical trials show sustained, dose-dependent increases in GH and IGF-I levels in healthy adults. Ipamorelin induces GH secretion at biologically effective levels with peak concentration within one hour.",
      icon: "⚡"
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
      research: "Published in NEJM: Tesamorelin significantly decreases visceral adiposity in clinical trials. Improves fat quality independent of changes in total fat quantity.",
      icon: "🎯"
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
      research: "Research demonstrates Semax stimulates learning and memory formation in humans, promotes neuronal survival during hypoxia, and reduces anxiety in stress conditions.",
      icon: "🧠"
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
      research: "Clinical studies show Selank effectively reduces elevated anxiety levels. It modulates neurotransmitters, boosts mood by inhibiting enkephalin-degrading enzymes.",
      icon: "🌿"
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
      research: "Human clinical studies show Epitalon significantly increased telomere lengths in blood cells of patients aged 60-80. One of the broadest-reaching peptides in longevity science.",
      icon: "⏳"
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
      research: "Research shows GHK-Cu enhances collagen synthesis, improves extracellular matrix organization, and accelerates wound healing in both healthy and diabetic subjects.",
      icon: "✨"
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
      research: "Studies show MOTS-C targets skeletal muscle, enhances glucose metabolism, regulates energy homeostasis, and plays important roles in cardiovascular health and aging.",
      icon: "🔋"
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
      research: "NAD+ levels decline with age. Supplementation activates sirtuins, supports cellular energy and metabolism, and helps maintain healthy DNA to promote healthy cellular aging.",
      icon: "💎"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-cream via-white to-accent">
      
      {/* Hero Section - Modernized */}
      <motion.section 
        initial="initial"
        animate="animate"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Background with subtle overlay */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-cream via-white/95 to-accent/30 z-10" />
          <div className="absolute inset-0 opacity-20">
            <div className="w-full h-full bg-[url('/hero-flyer.jpg')] bg-cover bg-center blur-sm scale-110" />
          </div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 text-center">
          <motion.div {...fadeInUp}>
            <h1 className="text-6xl md:text-8xl font-bold text-primary mb-6 tracking-tight">
              PEPTIDE PROS
            </h1>
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-secondary/10 rounded-full mb-8">
              <span className="text-secondary text-xl md:text-2xl font-semibold">
                PEPTIDES ARE FOR EVERYONE
              </span>
              <span className="text-2xl">✦</span>
            </div>
          </motion.div>

          <motion.p 
            {...fadeInUp}
            transition={{ delay: 0.2 }}
            className="text-2xl md:text-3xl text-primary max-w-3xl mx-auto mb-6 font-light"
          >
            Clear education. Local support. Real conversations.
          </motion.p>
          
          <motion.p 
            {...fadeInUp}
            transition={{ delay: 0.3 }}
            className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            Peptide Pros is a <span className="font-semibold text-primary">Las Vegas based</span> education and sourcing company helping adults explore peptide research <span className="font-semibold text-secondary">responsibly and confidently</span>.
          </motion.p>
          
          <motion.div 
            {...fadeInUp}
            transition={{ delay: 0.4 }}
            className="mb-12"
          >
            <p className="text-xl font-semibold text-primary mb-8">
              Have a question? Text us directly.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <motion.a
                href={smsLink}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-10 py-5 bg-secondary text-white font-bold text-lg rounded-xl overflow-hidden shadow-2xl transition-all"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  💬 Text a Local Nurse
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.a>
              
              <motion.a
                href="#compounds"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 bg-white text-primary font-bold text-lg rounded-xl border-2 border-primary hover:bg-primary hover:text-white transition-all shadow-lg"
              >
                Learn the Basics
              </motion.a>
            </div>
            
            <p className="text-sm text-gray-600 italic">
              Fast responses. Real conversation. No pressure.
            </p>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="text-secondary"
          >
            <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </div>
      </motion.section>

      {/* Why Section - Redesigned */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl md:text-6xl font-bold text-primary mb-6 text-center">
              Why Peptide Pros
            </h2>
            <div className="w-24 h-1 bg-secondary mx-auto mb-12" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <p className="text-xl text-gray-700 leading-relaxed">
                Most peptide websites are <span className="line-through text-gray-400">anonymous and transactional</span>.
              </p>
              <p className="text-xl text-primary font-semibold leading-relaxed">
                At Peptide Pros, you speak with a real local nurse before making decisions.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                We educate you about what compounds are, how they are discussed in research, and what questions you should be asking.
              </p>
              <div className="flex gap-4 items-center py-6">
                <div className="flex-shrink-0 w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center text-3xl">
                  🎓
                </div>
                <div>
                  <p className="font-bold text-primary text-lg">Education First</p>
                  <p className="text-gray-600">No pressure. No hype. Just clarity.</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-secondary/10 to-primary/10">
                <div className="w-full h-full bg-[url('/hero-flyer.jpg')] bg-cover bg-center opacity-90" />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white px-8 py-4 rounded-2xl shadow-xl border-2 border-secondary">
                <p className="text-sm font-semibold text-gray-600">Locally Owned</p>
                <p className="text-2xl font-bold text-primary">Las Vegas, NV</p>
              </div>
              <div className="absolute top-6 left-6 bg-secondary text-white px-4 py-2 rounded-full text-sm font-bold">
                Registered Nurse
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-center mt-16"
          >
            <motion.a
              href={smsLink}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-8 py-4 bg-secondary text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-2xl transition-all"
            >
              Start a Conversation by Text →
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Who We Work With - Cards */}
      <section className="py-24 px-4 bg-gradient-to-br from-cream to-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-bold text-primary mb-6 text-center">
              Who We Work With
            </h2>
            <div className="w-24 h-1 bg-secondary mx-auto mb-16" />
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              { icon: "💪", title: "Active Adults", desc: "Gym members and CrossFit athletes exploring recovery conversations." },
              { icon: "💼", title: "Busy Professionals", desc: "Energy and focus discussions." },
              { icon: "👨‍👩‍👧", title: "Parents 30 to 55", desc: "Balancing life, work, and wellness." },
              { icon: "🌱", title: "Wellness Curious", desc: "Exploring longevity and emerging research." }
            ].map((audience, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all border-2 border-transparent hover:border-secondary cursor-pointer"
              >
                <div className="text-5xl mb-4">{audience.icon}</div>
                <h3 className="text-2xl font-bold text-primary mb-3">{audience.title}</h3>
                <p className="text-gray-700 leading-relaxed">{audience.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-center text-xl text-primary font-semibold mt-12"
          >
            If that sounds like you, text us.
          </motion.p>
        </div>
      </section>

      {/* Compounds Section - Educational Cards */}
      <section id="compounds" className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-bold text-primary mb-6 text-center">
              Popular Compounds
            </h2>
            <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-4">
              Research-backed compounds discussed in our community
            </p>
            <div className="w-24 h-1 bg-secondary mx-auto mb-16" />
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {compounds.map((compound, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                whileHover={{ y: -5 }}
                onClick={() => setSelectedCompound(compound.name)}
                className="group bg-gradient-to-br from-white to-accent/10 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all cursor-pointer border-2 border-transparent hover:border-secondary"
              >
                <div className="text-5xl mb-4">{compound.icon}</div>
                <div className="inline-block px-3 py-1 bg-secondary/10 text-secondary text-xs font-bold rounded-full mb-3">
                  {compound.category}
                </div>
                <h3 className="text-2xl font-bold text-primary mb-2">{compound.name}</h3>
                <p className="text-sm text-secondary font-semibold mb-3">{compound.title}</p>
                <p className="text-gray-700 mb-4 leading-relaxed">{compound.description}</p>
                <div className="text-primary font-semibold group-hover:translate-x-2 transition-transform inline-flex items-center gap-2">
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
              whileTap={{ scale: 0.95 }}
              className="inline-block px-8 py-4 bg-secondary text-white font-bold text-lg rounded-xl shadow-lg"
            >
              Text Us Now →
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Compound Detail Modal */}
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
            className="bg-white rounded-3xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-8"
          >
            {compounds.find(c => c.name === selectedCompound) && (
              <>
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <div className="text-6xl mb-4">{compounds.find(c => c.name === selectedCompound)!.icon}</div>
                    <h3 className="text-4xl font-bold text-primary mb-2">{selectedCompound}</h3>
                    <p className="text-xl text-secondary font-semibold">{compounds.find(c => c.name === selectedCompound)!.title}</p>
                  </div>
                  <button
                    onClick={() => setSelectedCompound(null)}
                    className="text-gray-400 hover:text-gray-600 text-3xl"
                  >
                    ×
                  </button>
                </div>

                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  {compounds.find(c => c.name === selectedCompound)!.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-xl font-bold text-primary mb-4">Discussed Benefits:</h4>
                  <ul className="space-y-2">
                    {compounds.find(c => c.name === selectedCompound)!.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="text-secondary text-xl">✓</span>
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-accent/20 p-6 rounded-xl mb-6">
                  <h4 className="text-lg font-bold text-primary mb-3">📚 Research Summary:</h4>
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
                    className="block w-full text-center px-6 py-4 bg-secondary text-white font-bold rounded-xl"
                  >
                    Text Us Your Questions →
                  </motion.a>
                </div>
              </>
            )}
          </motion.div>
        </motion.div>
      )}

      {/* How It Works */}
      <section className="py-24 px-4 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-bold text-primary mb-6 text-center">
              How It Works
            </h2>
            <div className="w-24 h-1 bg-secondary mx-auto mb-16" />
          </motion.div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              { num: "1", title: "Learn", desc: "Explore our education library and research summaries." },
              { num: "2", title: "Text", desc: "Speak directly with a local registered nurse." },
              { num: "3", title: "Source Locally", desc: "Transparent pricing. Same-day delivery in Las Vegas." }
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="text-center"
              >
                <div className="relative inline-block mb-6">
                  <div className="w-24 h-24 bg-gradient-to-br from-secondary to-primary rounded-full flex items-center justify-center text-white text-4xl font-bold shadow-xl">
                    {step.num}
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent rounded-full animate-pulse" />
                </div>
                <h3 className="text-3xl font-bold text-primary mb-4">{step.title}</h3>
                <p className="text-lg text-gray-700 leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="text-center mt-16 space-y-4"
          >
            <p className="text-2xl font-bold text-primary">Simple. Clear. Human.</p>
            <p className="text-lg text-gray-600">Text inquiries welcome.</p>
          </motion.div>
        </div>
      </section>

      {/* Value Props Banner */}
      <section className="py-16 px-4 bg-gradient-to-r from-primary via-secondary to-primary text-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
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
                className="space-y-2"
              >
                <div className="text-4xl">✓</div>
                <p className="font-semibold text-lg">{benefit}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 px-4 bg-gradient-to-br from-secondary to-primary text-white">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-block px-8 py-3 bg-white/20 rounded-full mb-8">
              <p className="text-sm font-bold tracking-wide">LOCALLY OWNED & BASED IN LAS VEGAS</p>
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
            <div className="bg-white/10 backdrop-blur p-8 rounded-2xl">
              <div className="text-5xl mb-4">📍</div>
              <p className="text-2xl font-bold mb-3">LOCAL DELIVERY</p>
              <p className="opacity-90">Convenient same-day delivery right to your door</p>
            </div>
            <div className="bg-white/10 backdrop-blur p-8 rounded-2xl">
              <div className="text-5xl mb-4">🏷️</div>
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
              whileTap={{ scale: 0.95 }}
              className="inline-block px-12 py-5 bg-white text-primary font-bold text-xl rounded-xl shadow-2xl"
            >
              Start Your Journey →
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-primary text-white text-center">
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
