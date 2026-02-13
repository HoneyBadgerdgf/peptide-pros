export default function Home() {
  const phoneNumber = "7025551234"; // Placeholder - will be updated with real number
  const smsLink = `sms:${phoneNumber}`;

  return (
    <div className="min-h-screen bg-cream">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-cream to-accent py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold text-primary mb-4">
              PEPTIDE PROS
            </h1>
            <p className="text-xl md:text-2xl text-secondary font-medium mb-2">
              PEPTIDES ARE FOR EVERYONE ✦
            </p>
          </div>
          
          <p className="text-lg md:text-xl text-primary max-w-2xl mx-auto mb-8">
            Clear education. Local support. Real conversations.
          </p>
          
          <p className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto mb-12">
            Peptide Pros is a Las Vegas based education and sourcing company helping adults 
            explore peptide research responsibly and confidently.
          </p>
          
          <p className="text-lg font-semibold text-primary mb-8">
            Have a question? Text us directly.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <a
              href={smsLink}
              className="bg-secondary hover:bg-opacity-90 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all transform hover:scale-105 shadow-lg"
            >
              Text a Local Nurse
            </a>
            <a
              href="#how-it-works"
              className="bg-white hover:bg-gray-50 text-primary font-bold py-4 px-8 rounded-lg text-lg transition-all border-2 border-primary"
            >
              Learn the Basics
            </a>
          </div>
          
          <p className="text-sm text-gray-600 italic">
            Fast responses. Real conversation. No pressure.
          </p>
        </div>
      </section>

      {/* Why Peptide Pros */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-8 text-center">
            Why Peptide Pros
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
            <p>
              Most peptide websites are anonymous and transactional. At Peptide Pros, 
              you speak with a real local nurse before making decisions.
            </p>
            <p>
              We educate you about what compounds are, how they are discussed in research, 
              and what questions you should be asking.
            </p>
            <p className="font-semibold text-primary">
              No pressure. No hype. Just clarity.
            </p>
            <p>
              Have questions? Text us anytime.
            </p>
          </div>
          <div className="text-center mt-10">
            <a
              href={smsLink}
              className="inline-block bg-secondary hover:bg-opacity-90 text-white font-bold py-3 px-8 rounded-lg text-lg transition-all transform hover:scale-105 shadow-lg"
            >
              Start a Conversation by Text
            </a>
          </div>
        </div>
      </section>

      {/* Who We Work With */}
      <section className="py-20 px-4 bg-cream">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-12 text-center">
            Who We Work With
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-primary mb-3">Active Adults</h3>
              <p className="text-gray-700">
                Gym members and CrossFit athletes exploring recovery conversations.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-primary mb-3">Busy Professionals</h3>
              <p className="text-gray-700">
                Energy and focus discussions.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-primary mb-3">Parents 30 to 55</h3>
              <p className="text-gray-700">
                Balancing life, work, and wellness.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-primary mb-3">Wellness Curious</h3>
              <p className="text-gray-700">
                Exploring longevity and emerging research.
              </p>
            </div>
          </div>
          <p className="text-center text-lg text-primary font-semibold mt-10">
            If that sounds like you, text us.
          </p>
        </div>
      </section>

      {/* Popular Compounds */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-8 text-center">
            Popular Compounds in Our Community
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-10">
            {['BPC 157', 'CJC 1295 + Ipamorelin', 'Tesamorelin', 'Semax', 'Selank', 'Epitalon', 'GHK Cu', 'MOTS C', 'NAD+'].map((compound) => (
              <div key={compound} className="bg-accent bg-opacity-30 p-4 rounded-lg text-center hover:bg-opacity-50 transition-all cursor-pointer border-2 border-accent">
                <p className="font-semibold text-primary">{compound}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-700 mb-8">
            Each compound has its own educational page.
            <br />
            <span className="font-semibold">Not sure where to start?</span> Text us your question.
          </p>
          <div className="text-center">
            <a
              href={smsLink}
              className="inline-block bg-secondary hover:bg-opacity-90 text-white font-bold py-3 px-8 rounded-lg text-lg transition-all transform hover:scale-105 shadow-lg"
            >
              Text Us Now
            </a>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 px-4 bg-cream">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-16 text-center">
            How It Works
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center text-white text-3xl font-bold mx-auto mb-6">
                1
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">Learn</h3>
              <p className="text-gray-700">
                Explore our education library.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center text-white text-3xl font-bold mx-auto mb-6">
                2
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">Text</h3>
              <p className="text-gray-700">
                Reach out and speak directly with a local nurse.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center text-white text-3xl font-bold mx-auto mb-6">
                3
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">Source Locally</h3>
              <p className="text-gray-700">
                Transparent pricing. Same day local delivery in Las Vegas.
              </p>
            </div>
          </div>
          <p className="text-center text-xl font-semibold text-primary mt-16">
            Simple. Clear. Human.
          </p>
          <p className="text-center text-lg text-gray-700 mt-4">
            Text inquiries welcome.
          </p>
        </div>
      </section>

      {/* Transparency Matters */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-8">
            Transparency Matters
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            We prioritize education, transparency, and responsible conversations.
          </p>
          <p className="text-xl font-semibold text-primary mb-8">
            Before you purchase anything, make sure you understand it.
            <br />
            That is our standard.
          </p>
          <p className="text-lg text-gray-700 mb-8">
            Have a question right now? Text us.
          </p>
          <a
            href={smsLink}
            className="inline-block bg-secondary hover:bg-opacity-90 text-white font-bold py-3 px-8 rounded-lg text-lg transition-all transform hover:scale-105 shadow-lg"
          >
            Text Us
          </a>
        </div>
      </section>

      {/* About the Founder */}
      <section className="py-20 px-4 bg-cream">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-8 text-center">
            About the Founder
          </h2>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <p className="text-lg text-gray-700 mb-4">
              Peptide Pros was founded by a Las Vegas registered nurse who believes people 
              deserve clarity before making decisions.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              After years in healthcare, I saw how confusing emerging research compounds can be.
            </p>
            <p className="text-xl font-semibold text-primary mb-6">
              My goal is simple: educate first, source responsibly, and keep it local.
            </p>
            <p className="text-lg text-gray-700">
              Text me directly with your questions.
            </p>
          </div>
        </div>
      </section>

      {/* Value Props Banner */}
      <section className="py-12 px-4 bg-primary text-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8 text-center">
          <div>
            <p className="text-2xl font-bold mb-2">✓</p>
            <p className="font-semibold">Boost Energy & Vitality</p>
          </div>
          <div>
            <p className="text-2xl font-bold mb-2">✓</p>
            <p className="font-semibold">Lose Fat & Build Muscle</p>
          </div>
          <div>
            <p className="text-2xl font-bold mb-2">✓</p>
            <p className="font-semibold">Improve Recovery & Longevity</p>
          </div>
          <div>
            <p className="text-2xl font-bold mb-2">✓</p>
            <p className="font-semibold">Feel Your Best</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-secondary text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            LOCALLY OWNED & BASED IN LAS VEGAS
          </h2>
          <p className="text-4xl md:text-5xl font-bold mb-6">
            (702) 555-1234
          </p>
          <p className="text-xl mb-8">
            www.peptidepros.com
          </p>
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <div className="bg-white bg-opacity-20 p-6 rounded-lg">
              <p className="text-2xl font-bold mb-2">📍 LOCAL DELIVERY</p>
              <p>Convenient same-day delivery right to your door</p>
            </div>
            <div className="bg-white bg-opacity-20 p-6 rounded-lg">
              <p className="text-2xl font-bold mb-2">🏷️ PRICE MATCH GUARANTEE</p>
              <p>Get the best prices on the highest quality peptides</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-primary text-white text-center">
        <p className="text-sm mb-4">
          Educational information only. Not medical advice.
          <br />
          Always consult a licensed healthcare professional regarding medical decisions.
        </p>
        <p className="text-lg font-semibold">
          Text us: (702) 555-1234
        </p>
        <p className="text-xs mt-4 text-gray-400">
          © {new Date().getFullYear()} Peptide Pros. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
