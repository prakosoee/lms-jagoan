import React from 'react';
import { 
  Building2, 
  Users, 
  Briefcase, 
  GraduationCap, 
  Code, 
  Zap, 
  Globe, 
  Heart,
  ArrowRight,
  ExternalLink
} from 'lucide-react';

const OurEcosystem = () => {
  const ecosystemPartners = [
    {
      category: "Industry Partners",
      icon: Building2,
      color: "from-blue-500 to-blue-600",
      partners: [
        {
          name: "Google Indonesia",
          role: "Technology Partner",
          description: "Menyediakan akses ke Google Cloud Platform dan mentor dari Google engineers",
          logo: "https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=400"
        },
        {
          name: "Microsoft",
          role: "Cloud Partner",
          description: "Azure credits dan certification pathway untuk students",
          logo: "https://images.pexels.com/photos/159304/network-cable-ethernet-computer-159304.jpeg?auto=compress&cs=tinysrgb&w=400"
        },
        {
          name: "Tokopedia",
          role: "Hiring Partner",
          description: "Direct recruitment pathway untuk top performing students",
          logo: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=400"
        }
      ]
    },
    {
      category: "Educational Partners",
      icon: GraduationCap,
      color: "from-green-500 to-green-600",
      partners: [
        {
          name: "Universitas Indonesia",
          role: "Academic Partner",
          description: "Program sertifikasi dan pathway ke program degree",
          logo: "https://images.pexels.com/photos/289740/pexels-photo-289740.jpeg?auto=compress&cs=tinysrgb&w=400"
        },
        {
          name: "ITB",
          role: "Research Partner",
          description: "Kolaborasi research dan akses ke lab terbaru",
          logo: "https://images.pexels.com/photos/5428836/pexels-photo-5428836.jpeg?auto=compress&cs=tinysrgb&w=400"
        },
        {
          name: "Dicoding",
          role: "Content Partner",
          description: "Shared curriculum dan cross-platform learning",
          logo: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=400"
        }
      ]
    },
    {
      category: "Community Partners",
      icon: Users,
      color: "from-purple-500 to-purple-600",
      partners: [
        {
          name: "Indonesia JS",
          role: "Tech Community",
          description: "Monthly meetup dan workshop untuk JavaScript developers",
          logo: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=400"
        },
        {
          name: "React Indonesia",
          role: "Developer Community",
          description: "Knowledge sharing dan networking untuk React developers",
          logo: "https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=600"
        },
        {
          name: "Google Developer Groups",
          role: "Developer Community",
          description: "Technical talks dan hands-on workshops",
          logo: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=600"
        }
      ]
    }
  ];

  const ecosystemBenefits = [
    {
      icon: Briefcase,
      title: "Direct Job Placement",
      description: "91% of our graduates get hired within 3 months through our partner network",
      stat: "91%"
    },
    {
      icon: Code,
      title: "Industry Projects",
      description: "Work on real projects from our industry partners during your learning journey",
      stat: "50+"
    },
    {
      icon: Zap,
      title: "Mentorship Program",
      description: "Get mentored by senior developers from top tech companies",
      stat: "1:5"
    },
    {
      icon: Globe,
      title: "Global Network",
      description: "Access to international opportunities and global tech communities",
      stat: "25+"
    }
  ];

  const successStories = [
    {
      name: "Andi Kurniawan",
      role: "Software Engineer at Gojek",
      story: "Started from zero programming knowledge, now leading a team of 5 developers",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400",
      company: "Gojek"
    },
    {
      name: "Sari Dewi",
      role: "Frontend Developer at Shopee",
      story: "Career switch from marketing to tech, increased salary by 300%",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400",
      company: "Shopee"
    },
    {
      name: "Budi Santoso",
      role: "Full Stack Developer at Traveloka",
      story: "From fresh graduate to senior developer in just 2 years",
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400",
      company: "Traveloka"
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our Ecosystem
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            Kami membangun ekosistem pembelajaran yang kuat dengan berbagai partner industri, 
            institusi pendidikan, dan komunitas teknologi untuk memberikan pengalaman belajar terbaik.
          </p>

          {/* Ecosystem Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {ecosystemBenefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-all duration-200 transform hover:scale-105">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full mb-4">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">{benefit.stat}</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Partners
            </h2>
            <p className="text-xl text-gray-600">
              Berkolaborasi dengan pemimpin industri untuk memberikan pendidikan terbaik
            </p>
          </div>

          <div className="space-y-16">
            {ecosystemPartners.map((category, categoryIndex) => {
              const IconComponent = category.icon;
              return (
                <div key={categoryIndex}>
                  <div className="flex items-center justify-center mb-8">
                    <div className={`inline-flex items-center space-x-3 px-6 py-3 bg-gradient-to-r ${category.color} text-white rounded-full`}>
                      <IconComponent className="h-6 w-6" />
                      <span className="font-semibold text-lg">{category.category}</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {category.partners.map((partner, partnerIndex) => (
                      <div key={partnerIndex} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-200 transform hover:scale-105">
                        <div className="flex items-center mb-4">
                          <img
                            src={partner.logo}
                            alt={partner.name}
                            className="w-12 h-12 rounded-lg object-cover mr-4"
                          />
                          <div>
                            <h3 className="text-lg font-bold text-gray-900">{partner.name}</h3>
                            <p className="text-sm text-gray-600">{partner.role}</p>
                          </div>
                        </div>
                        <p className="text-gray-700 leading-relaxed">{partner.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600">
              Alumni kami yang berhasil berkarier di perusahaan tech terkemuka
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-200 transform hover:scale-105">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <img
                      src={story.image}
                      alt={story.name}
                      className="w-16 h-16 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">{story.name}</h3>
                      <p className="text-blue-600 font-semibold">{story.role}</p>
                      <p className="text-sm text-gray-600">{story.company}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed italic">"{story.story}"</p>
                  <div className="mt-4 flex items-center space-x-2">
                    <Heart className="h-4 w-4 text-red-500" />
                    <span className="text-sm text-gray-600">Success Story</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Ecosystem CTA */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Bergabung dengan Ekosistem Kami
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Jadilah bagian dari komunitas tech terbesar di Indonesia. Akses network, 
            mentorship, dan peluang karier yang tak terbatas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200">
              Mulai Belajar
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="inline-flex items-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-200">
              Jadi Partner
              <ExternalLink className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurEcosystem;