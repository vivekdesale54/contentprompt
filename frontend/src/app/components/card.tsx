export default function TransformedContent() {
  return (
    <section className="bg-[#f9fbfe] py-16 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
          See Your Content Transformed
        </h2>
        <p className="mt-3 text-gray-500 text-lg">
          Here's how your content gets optimized for each platform
        </p>
      </div>

      <div className="mt-12 space-y-8 max-w-4xl mx-auto">
        {/* LinkedIn */}
        <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6">
          <div className="flex justify-between items-center mb-3">
            <div className="flex items-center gap-2">
              <img
                src="/icons/linkedin.svg"
                alt="LinkedIn"
                className="w-5 h-5"
              />
              <h3 className="text-xl font-semibold text-gray-800">LinkedIn</h3>
            </div>
            <span className="text-xs font-medium bg-gray-100 text-gray-600 px-3 py-1 rounded-full">
              Professional
            </span>
          </div>
          <div className="bg-gray-100 rounded-xl p-4 text-sm text-gray-700 leading-relaxed">
            🚀 Just discovered an incredible insight about AI in content
            marketing... The future of content creation isn't about replacing
            human creativity—it's about amplifying it. Key takeaways: • AI
            handles repetitive tasks • Humans focus on strategy • Better ROI for
            businesses What’s your experience with AI tools? #AI
            #ContentMarketing #DigitalTransformation
          </div>
          <div className="mt-2 text-xs text-right text-gray-400">
            Hashtag optimized
          </div>
        </div>

        {/* Instagram */}
        <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6">
          <div className="flex justify-between items-center mb-3">
            <div className="flex items-center gap-2">
              <img
                src="/icons/instagram.svg"
                alt="Instagram"
                className="w-5 h-5"
              />
              <h3 className="text-xl font-semibold text-gray-800">Instagram</h3>
            </div>
            <span className="text-xs font-medium bg-gray-100 text-gray-600 px-3 py-1 rounded-full">
              Visual
            </span>
          </div>
          <div className="bg-gray-100 rounded-xl p-4 text-sm text-gray-700 leading-relaxed">
            ✨ AI + Creativity = Magic ✨ Swipe to see how AI is changing the
            content game! ☝️ The best part? It's not about replacing us—it's
            about making us BETTER 💪 Who else is excited about this AI
            revolution? Drop a 🤖 in the comments! #AIContent #CreativeAI
            #ContentCreator #DigitalMarketing #TechTrends
          </div>
        </div>

        {/* Twitter */}
        <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6">
          <div className="flex justify-between items-center mb-3">
            <div className="flex items-center gap-2">
              <img src="/icons/twitter.svg" alt="Twitter" className="w-5 h-5" />
              <h3 className="text-xl font-semibold text-gray-800">Twitter</h3>
            </div>
            <span className="text-xs font-medium bg-gray-100 text-gray-600 px-3 py-1 rounded-full">
              Concise
            </span>
          </div>
          <div className="bg-gray-100 rounded-xl p-4 text-sm text-gray-700 leading-relaxed">
            AI isn't replacing creativity—it's amplifying it. 🚀 Let AI do the
            boring work while you create the magic. Thoughts? #AI #Marketing
            #ContentCreation #FutureOfWork
          </div>
        </div>
      </div>
    </section>
  );
}
