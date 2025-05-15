
const HowItWorks = () => {
  // Steps data
  const steps = [
    {
      number: '1',
      title: 'Clone the Template',
      description: 'Get instant access to the template with one click. No waiting, no setup hassle.'
    },
    {
      number: '2',
      title: 'Customize your content',
      description: 'Replace placeholder text and images with your own content using Framer\'s visual editor.'
    },
    {
      number: '3',
      title: 'Publish instantly',
      description: 'Go live with your AI product site in minutes, not days or weeks.'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="font-jakarta text-3xl md:text-4xl lg:text-5xl font-bold text-soft-black mb-4 text-center">
          Get Online in 3 Steps
        </h2>
        <p className="text-dark-gray text-xl mb-16 text-center max-w-2xl mx-auto">
          Launch your AI product website faster than you ever thought possible.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="relative"
            >
              {/* Number badge */}
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-gradient-to-r from-cta-start to-cta-end flex items-center justify-center text-white font-bold text-xl">
                {step.number}
              </div>
              
              {/* Card content */}
              <div className="bg-light-gray p-8 pt-10 rounded-xl text-center">
                <h3 className="font-jakarta text-xl font-semibold mb-3 text-soft-black mt-4">
                  {step.title}
                </h3>
                <p className="text-dark-gray">
                  {step.description}
                </p>
              </div>
              
              {/* Connector line (except for last item) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 left-full w-8 h-0.5 bg-light-gray transform -translate-x-4">
                  <div className="absolute right-0 top-1/2 transform translate-y-1/2 rotate-45 w-2 h-2 border-t-0 border-l-0 border-r border-b border-light-gray"></div>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <a 
            href="#demo" 
            className="inline-block bg-gradient-to-r from-cta-start to-cta-end text-white px-8 py-4 rounded-lg font-medium hover:shadow-lg transition-all duration-300"
          >
            Try the Demo
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
