
const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-hero-start to-hero-end py-20">
      <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center">
        {/* Left column - Text content */}
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="font-jakarta text-5xl md:text-6xl lg:text-7xl font-bold text-soft-black mb-6 leading-tight">
            Launch Your AI SaaS in Minutes
          </h1>
          <p className="text-dark-gray text-xl md:text-2xl mb-8 max-w-lg">
            A modern Framer template designed for AI founders who want to move fast.
          </p>
          <div className="flex flex-wrap gap-4">
            <a 
              href="#demo" 
              className="bg-gradient-to-r from-cta-start to-cta-end text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-300 flex items-center"
            >
              <span className="mr-2">→</span> Try Live Demo
            </a>
            <a 
              href="#clone" 
              className="bg-white border border-elite-gold text-dark-gray px-6 py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-300"
            >
              Clone Template
            </a>
          </div>
        </div>
        
        {/* Right column - Image */}
        <div className="md:w-1/2">
          <div className="relative">
            {/* Placeholder for AI app mockup */}
            <div className="bg-white rounded-xl shadow-2xl overflow-hidden border border-light-gray">
              <div className="h-8 bg-light-gray flex items-center px-4">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
              </div>
              <div className="p-4 bg-gradient-to-br from-white to-light-gray h-80 flex items-center justify-center">
                <p className="text-center text-dark-gray">AI SaaS Application Interface</p>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-elite-gold opacity-20 rounded-full blur-xl"></div>
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-deep-navy opacity-20 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
