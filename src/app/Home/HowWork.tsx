export default function HowItWorks() {
    const steps = [
      {
        id: "01",
        title: "Training",
        description:
          "Our training programs, tailored to each subject matter and specialized courses, last at least 3 months and take place in our physical venues. Access to all course materials will be provided through the Bulipe App/repository, ensuring a comprehensive learning experience for all participants.",
        color: "bg-[#0E2B3C]",
      },
      {
        id: "02",
        title: "Certification",
        description:
          "Upon completion of your desired course and training, each trainee must attend a central examination at their respective geographical headquarters of Bulipe. Upon passing, trainee graduates receive industry-recognized certifications trusted by employers globally.",
        color: "bg-[#F4511E]",
      },
      {
        id: "03",
        title: "Employment",
        description:
          "We guarantee confirmed job prospects and a base salary of BDT 30,000 for all Bulipe trainee graduates through our vast alumni network, partnerships with 350+ global businesses across Europe, America, Asia, and Africa.",
        color: "bg-[#2AB7C9]",
      },
    ];
  
    return (
      <section className="bg-gray-100 py-16 text-black">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">How does it Work?</h2>
          <div className="w-16 h-1 bg-[#F4511E] mx-auto mt-2"></div>
        </div>
  
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
          {steps.map((step) => (
            <div
              key={step.id}
              className="bg-white rounded-lg shadow-lg p-6 text-center relative"
            >
              {/* Paper Clip Number */}
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                <div
                  className={`${step.color} text-white text-lg font-bold px-4 py-2 rounded-md relative shadow-md`}
                >
                  {step.id}
                  <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-black"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7V3a1 1 0 011-1h6a1 1 0 011 1v4"
                      />
                    </svg>
                  </div>
                </div>
              </div>
  
              <h3 className="text-xl font-semibold mt-8">{step.title}</h3>
              <p className="text-gray-600 mt-2 text-sm">{step.description}</p>
  
              {/* Bottom Divider */}
              <div className={`w-10 h-1 ${step.color} mx-auto mt-4 rounded-full`}></div>
            </div>
          ))}
        </div>
      </section>
    );
  }
  