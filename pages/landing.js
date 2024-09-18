import React from 'react';
import { MessageCircle, BarChart2, BookOpen, Users, Check, Star, ArrowRight, Globe, Calculator, Microscope, UserPlus, Activity, Headphones } from 'lucide-react';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-['Poppins']">
      {/* Header */}
      <header className="py-4 px-6">
        <nav className="flex justify-between items-center">
          <div className="text-2xl font-bold">AIComm</div>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-indigo-600">Product</a>
            <a href="#" className="hover:text-indigo-600">Pricing</a>
            <a href="#" className="hover:text-indigo-600">Company</a>
            <a href="#" className="hover:text-indigo-600">Documentation</a>
          </div>
          <div className="flex items-center space-x-4">
            <a href="#" className="text-indigo-600 hover:text-indigo-800">Log in</a>
            <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700">
              Get started
            </button>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-12">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Left Column */}
          <div className="lg:w-1/2 lg:pr-12">
            <h1 className="text-5xl font-bold mb-6">
              Comprehensive communication for the deaf and mute
            </h1>
            <p className="text-xl mb-8">
              AIComm is an AI-powered tool that integrates into your daily life, helping you communicate effortlessly with confidence.
            </p>
            <div className="flex space-x-4 mb-8">
              <MessageCircle className="text-indigo-600" />
              <span>Real-time sign language interpretation</span>
            </div>
            <div className="flex space-x-4 mb-8">
              <BookOpen className="text-indigo-600" />
              <span>Interactive learning modules</span>
            </div>
            <div className="flex space-x-4 mb-8">
              <BarChart2 className="text-indigo-600" />
              <span>Progress tracking and analytics</span>
            </div>
            <div className="flex space-x-4">
              <button className="bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700">
                Get started for free 🙌
              </button>
              <button className="text-indigo-600 px-6 py-3 rounded-md border border-indigo-600 hover:bg-indigo-50">
                Book a demo
              </button>
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:w-1/2 mt-12 lg:mt-0">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold mb-4">Communication Dashboard</h2>
              <div className="bg-gray-100 p-4 rounded-md mb-4">
                <h3 className="text-lg font-semibold mb-2">Performance</h3>
                <div className="flex justify-between items-center">
                  <span>Sign Language Accuracy</span>
                  <span className="text-green-600">95%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                  <div className="bg-green-600 h-2.5 rounded-full" style={{width: '95%'}}></div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-100 p-4 rounded-md">
                  <h4 className="font-semibold mb-2">Daily Practice</h4>
                  <p className="text-3xl font-bold text-indigo-600">30 min</p>
                </div>
                <div className="bg-gray-100 p-4 rounded-md">
                  <h4 className="font-semibold mb-2">Words Learned</h4>
                  <p className="text-3xl font-bold text-indigo-600">250+</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Features Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Comprehensive Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<MessageCircle className="w-12 h-12 text-indigo-600" />}
              title="Real-time Interpretation"
              description="Instant translation between sign language and text/speech."
            />
            <FeatureCard
              icon={<BookOpen className="w-12 h-12 text-indigo-600" />}
              title="Interactive Learning"
              description="Engaging lessons to improve sign language skills for all users."
            />
            <FeatureCard
              icon={<BarChart2 className="w-12 h-12 text-indigo-600" />}
              title="Progress Tracking"
              description="Monitor your learning journey with detailed analytics and insights."
            />
            <FeatureCard
              icon={<Globe className="w-12 h-12 text-indigo-600" />}
              title="Language Conversion"
              description="Convert text and speech to sign language and vice versa."
            />
            <FeatureCard
              icon={<UserPlus className="w-12 h-12 text-indigo-600" />}
              title="Multi-User Support"
              description="Tailored experiences for students, teachers, parents, and HR professionals."
            />
            <FeatureCard
              icon={<Activity className="w-12 h-12 text-indigo-600" />}
              title="Advanced Analytics"
              description="Detailed reports and insights on learning progress and communication patterns."
            />
          </div>
        </div>
      </section>

      {/* Modules Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Comprehensive Learning Modules</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ModuleCard
              icon={<BookOpen className="w-12 h-12 text-indigo-600" />}
              title="Language Interpretation"
              description="Master Gujarati alphabets, numbers, and basic vocabulary through interactive tutorials and writing practice."
            />
            <ModuleCard
              icon={<MessageCircle className="w-12 h-12 text-indigo-600" />}
              title="Sentence Formation"
              description="Learn to construct sentences in Gujarati with sign language interpretation and practice exercises."
            />
            <ModuleCard
              icon={<Calculator className="w-12 h-12 text-indigo-600" />}
              title="Mathematics"
              description="Study tables, basic arithmetic, and solve math problems with sign language guidance."
            />
            <ModuleCard
              icon={<Microscope className="w-12 h-12 text-indigo-600" />}
              title="Science"
              description="Explore basic science concepts through interactive tutorials and hands-on exercises."
            />
            <ModuleCard
              icon={<Users className="w-12 h-12 text-indigo-600" />}
              title="Parent Support"
              description="Resources to help parents understand and support their children's learning journey."
            />
            <ModuleCard
              icon={<Headphones className="w-12 h-12 text-indigo-600" />}
              title="HR Tools"
              description="Features for interviews and meetings to enhance workplace inclusivity for deaf individuals."
            />
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 md:space-x-8">
            <StepCard number="1" title="Sign Up" description="Create your account and set up your profile." />
            <StepCard number="2" title="Choose Your Path" description="Select your learning goals and communication needs." />
            <StepCard number="3" title="Start Learning" description="Access modules and begin your journey to effective communication." />
            <StepCard number="4" title="Practice & Improve" description="Use AIComm in real-world scenarios and track your progress." />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Users Say</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard
              quote="AIComm has revolutionized how I communicate with my deaf colleagues. It's incredibly intuitive and accurate."
              author="John D., HR Manager"
            />
            <TestimonialCard
              quote="As a deaf individual, AIComm has opened up so many opportunities for me. I feel more confident in my daily interactions."
              author="Sarah L., Student"
            />
            <TestimonialCard
              quote="The learning modules are fantastic! I've made significant progress in learning sign language thanks to AIComm."
              author="Michael R., Teacher"
            />
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Choose Your Plan</h2>
          <div className="flex flex-col lg:flex-row justify-center items-center lg:items-stretch space-y-8 lg:space-y-0 lg:space-x-8">
            <PricingCard
              title="Basic"
              price="Free"
              features={[
                "Real-time sign language interpretation",
                "Basic learning modules",
                "Community forum access"
              ]}
            />
            <PricingCard
              title="Pro"
              price="$9.99/month"
              features={[
                "All Basic features",
                "Advanced learning modules",
                "Progress tracking and analytics",
                "Priority customer support"
              ]}
              highlighted={true}
            />
            <PricingCard
              title="Enterprise"
              price="Custom"
              features={[
                "All Pro features",
                "Custom integration options",
                "Dedicated account manager",
                "Employee training programs"
              ]}
            />
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl font-semibold text-center mb-8">Trusted by</h2>
          <div className="flex justify-center items-center space-x-12 opacity-50">
            <div className="w-24 h-8 bg-gray-400 rounded"></div>
            <div className="w-24 h-8 bg-gray-400 rounded"></div>
            <div className="w-24 h-8 bg-gray-400 rounded"></div>
            <div className="w-24 h-8 bg-gray-400 rounded"></div>
            <div className="w-24 h-8 bg-gray-400 rounded"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }) => (
  <div className="text-center">
    <div className="flex justify-center mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p>{description}</p>
  </div>
);

const ModuleCard = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <div className="flex justify-center mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2 text-center">{title}</h3>
    <p className="text-center">{description}</p>
  </div>
);

const StepCard = ({ number, title, description }) => (
  <div className="text-center">
    <div className="w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center text-xl font-bold mb-4 mx-auto">{number}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p>{description}</p>
  </div>
);

const TestimonialCard = ({ quote, author }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <p className="mb-4 italic">"{quote}"</p>
    <p className="font-semibold">- {author}</p>
  </div>
);

const PricingCard = ({ title, price, features, highlighted = false }) => (
  <div className={`bg-white p-8 rounded-lg shadow-md ${highlighted ? 'border-2 border-indigo-600' : ''}`}>
    <h3 className="text-2xl font-bold mb-4 text-center">{title}</h3>
    <p className="text-4xl font-bold text-center mb-6">{price}</p>
    <ul className="space-y-2 mb-8">
      {features.map((feature, index) => (
        <li key={index} className="flex items-center">
          <Check className="w-5 h-5 text-green-500 mr-2" />
          {feature}
        </li>
      ))}
    </ul>
    <button className={`w-full py-2 rounded-md ${highlighted ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-800'} hover:bg-opacity-90`}>
      Choose Plan
    </button>
  </div>
);

export default LandingPage;
