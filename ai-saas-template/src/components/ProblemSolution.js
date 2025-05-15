
const ProblemSolution = () => {
  return (
    <section className="bg-light-gray py-20">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-jakarta text-3xl md:text-4xl lg:text-5xl font-bold text-soft-black mb-12 text-center">
            Tired of wasting hours building your site?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Pain Point 1 */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
              <div className="text-4xl mb-4">❌</div>
              <h3 className="font-jakarta text-xl font-semibold mb-2">Coding from scratch</h3>
              <p className="text-dark-gray">
                Spending weeks writing code instead of focusing on your AI product's core value.
              </p>
            </div>
            
            {/* Pain Point 2 */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
              <div className="text-4xl mb-4">❌</div>
              <h3 className="font-jakarta text-xl font-semibold mb-2">Designer costs</h3>
              <p className="text-dark-gray">
                Paying thousands for custom designs when you're still validating your idea.
              </p>
            </div>
            
            {/* Pain Point 3 */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
              <div className="text-4xl mb-4">❌</div>
              <h3 className="font-jakarta text-xl font-semibold mb-2">Poor mobile performance</h3>
              <p className="text-dark-gray">
                Losing potential users because your site isn't optimized for all devices.
              </p>
            </div>
          </div>
          
          <div className="text-center">
            <div className="inline-block bg-gradient-to-r from-cta-start to-cta-end p-px rounded-xl">
              <div className="bg-white px-8 py-6 rounded-xl">
                <p className="text-xl md:text-2xl font-jakarta font-semibold">
                  This template is built to get your AI product online today.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
