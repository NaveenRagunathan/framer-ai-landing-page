
const FeaturesGrid = () => {
  // Feature data
  const features = [
    {
      icon: '📝',
      title: 'Built-in CMS',
      description: 'Easily manage blogs and testimonials without touching code.'
    },
    {
      icon: '📱',
      title: 'Fully Responsive',
      description: 'Perfect experience on any device, from mobile to desktop.'
    },
    {
      icon: '✨',
      title: 'Clean, Modern UI',
      description: 'Professional design that makes your AI product look premium.'
    },
    {
      icon: '🖼️',
      title: 'Built for Framer',
      description: 'No coding required — edit everything visually in Framer.'
    },
    {
      icon: '🎨',
      title: 'Easily Customizable',
      description: 'Change colors, fonts, and content to match your brand.'
    },
    {
      icon: '⚡',
      title: 'Fast-loading',
      description: 'Optimized performance for excellent user experience.'
    }
  ];

  return (
    <section className="py-20 bg-off-white">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="font-jakarta text-3xl md:text-4xl lg:text-5xl font-bold text-soft-black mb-4 text-center">
          Why Choose This Template?
        </h2>
        <p className="text-dark-gray text-xl mb-12 text-center max-w-2xl mx-auto">
          Everything you need to launch your AI product website quickly and professionally.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-xl border border-light-gray shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="font-jakarta text-xl font-semibold mb-2 text-soft-black">
                {feature.title}
              </h3>
              <p className="text-dark-gray">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;
