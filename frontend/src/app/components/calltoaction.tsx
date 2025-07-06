const CallToAction =  () => {
  return (
    <section className="bg-[#fdfdff] text-center py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
          Ready to Transform Your Content?
        </h2>
        <p className="mt-4 text-lg text-gray-500">
          Join thousands of creators who are already repurposing their content with AI
        </p>

        <button className="mt-8 inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-500 to-violet-500 text-white font-semibold rounded-xl shadow-md hover:from-indigo-600 hover:to-violet-600 transition-all">
          Get Started Free
          <span className="text-lg">✨</span>
        </button>
      </div>
    </section>
  );
}

export default CallToAction;