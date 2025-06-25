import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Users, BookOpen, Music, Award, X, ZoomIn } from 'lucide-react';
import image1 from "./assets/1.jpeg"
import image2 from "./assets/2.jpeg"
import image3 from "./assets/3.jpeg"
import image4 from "./assets/4.jpeg"
import image5 from "./assets/5.jpeg"
import image6 from "./assets/6.jpeg"
import image7 from "./assets/7.jpeg"
import image8 from "./assets/8.jpeg"

const ETwinningWebsite = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalCurrentImage, setModalCurrentImage] = useState(0);

  // Örnek resimler - gerçek projede bunlar değiştirilecek
  const images = [
    { id: 1, url: image1, caption: "Konferans Etkinliği", description: "Çocuk hakları konferansında öğrenciler ve uzmanlar bir araya geldi" },
    { id: 2, url: image2, caption: "Öğrenciler ve Öğretmenler", description: "Projemize katılan tüm öğrenci ve öğretmenlerimiz" },
    { id: 3, url: image3, caption: "Origami Çalışmaları", description: "Sadako kitabından ilhamla origami turna kuşu çalışmaları" },
    { id: 4, url: image4, caption: "Turna Kuşu Yapımı", description: "Barış ve umut sembolü turna kuşlarımız" },
    { id: 5, url: image5, caption: "Rap Şarkısı Çalışması", description: "Çocuk hakları temalı rap şarkımızın hazırlanması" },
    { id: 6, url: image6, caption: "Proje Sunumu", description: "The Voice of the Future proje sunumumuz" },
    { id: 7, url: image7, caption: "Çocuk Hakları Farkındalığı", description: "Çocuk haklarına dair farkındalık çalışmalarımız" },
    { id: 8, url: image8, caption: "Geleceğin Sesi", description: "Projemizin final sunumu ve değerlendirmesi" }
  ];

  useEffect(() => {
    if (isAutoPlaying && !isModalOpen) {
      const interval = setInterval(() => {
        setCurrentImage((prev) => (prev + 1) % images.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, isModalOpen, images.length]);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
    setIsAutoPlaying(false);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
    setIsAutoPlaying(false);
  };

  const goToImage = (index) => {
    setCurrentImage(index);
    setIsAutoPlaying(false);
  };

  const openModal = (index) => {
    setModalCurrentImage(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const nextModalImage = () => {
    setModalCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevModalImage = () => {
    setModalCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  // Modal için klavye kontrolü
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isModalOpen) return;
      
      if (e.key === 'Escape') {
        closeModal();
      } else if (e.key === 'ArrowRight') {
        nextModalImage();
      } else if (e.key === 'ArrowLeft') {
        prevModalImage();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isModalOpen]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-md shadow-md sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-6 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center shadow-md">
                <Award className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-extrabold text-gray-900">e-Twinning Projesi</h1>
                <p className="text-sm text-gray-600">The Voice of the Future</p>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-6 text-sm text-gray-600 select-none">
              <div className="flex items-center space-x-1">
                <Users className="w-4 h-4" />
                <span>Polatlı B.H.N. Mıhcıoğlu İlkokulu</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-8">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
              The Voice of the Future
            </h2>
            <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Çocuk Haklarına Güçlü Bir Ses!
            </p>
          </div>

          {/* Compact Gallery Preview */}
          <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden mb-6">
            <div className="relative h-64 md:h-80 cursor-pointer group" onClick={() => openModal(currentImage)}>
              <img
                src={images[currentImage].url}
                alt={images[currentImage].caption}
                className="w-full h-full object-cover transition-all duration-700 ease-in-out"
              />
              
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="bg-white/90 rounded-full p-3 transform scale-90 group-hover:scale-100 transition-transform duration-300">
                  <ZoomIn className="w-8 h-8 text-gray-700" />
                </div>
              </div>
              
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              
              {/* Caption */}
              <div className="absolute bottom-4 left-6 right-6">
                <h3 className="text-white text-lg md:text-xl font-semibold mb-1">
                  {images[currentImage].caption}
                </h3>
                <p className="text-white/80 text-sm">
                  Fotoğrafı büyütmek için tıklayın • {currentImage + 1} / {images.length}
                </p>
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={(e) => {e.stopPropagation(); prevImage();}}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 transition-all duration-200"
              >
                <ChevronLeft className="w-5 h-5 text-white" />
              </button>
              
              <button
                onClick={(e) => {e.stopPropagation(); nextImage();}}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 transition-all duration-200"
              >
                <ChevronRight className="w-5 h-5 text-white" />
              </button>
            </div>

            {/* Thumbnail Grid */}
            <div className="p-4 bg-gray-50">
              <div className="grid grid-cols-4 md:grid-cols-8 gap-2">
                {images.map((image, index) => (
                  <button
                    key={image.id}
                    onClick={() => goToImage(index)}
                    className={`relative aspect-square rounded-lg overflow-hidden transition-all duration-200 ${
                      index === currentImage
                        ? 'ring-2 ring-blue-500 scale-105'
                        : 'hover:scale-105 hover:shadow-md'
                    }`}
                  >
                    <img
                      src={image.url}
                      alt={image.caption}
                      className="w-full h-full object-cover"
                    />
                    {index === currentImage && (
                      <div className="absolute inset-0 bg-blue-500/20"></div>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="pb-8">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg p-8 md:p-12">
            {/* Project Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
              <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                <Users className="w-9 h-9 text-blue-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Konferans</h3>
                <p className="text-sm text-gray-600">Uzman profesörler ve öğretmenlerle</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                <BookOpen className="w-9 h-9 text-green-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Kitap Okuma</h3>
                <p className="text-sm text-gray-600">Sadako ve Bin Turna Kuşu</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                <Music className="w-9 h-9 text-purple-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Rap Şarkısı</h3>
                <p className="text-sm text-gray-600">Çocuk hakları temalı</p>
              </div>
            </div>

            {/* Main Content */}
            <div className="prose prose-lg max-w-none text-gray-800 leading-relaxed">
              <p className="text-xl font-semibold text-gray-900 mb-6">
                Polatlı Bedriye Halil Naci Mıhcıoğlu İlkokulu olarak, çocukların sesi olmaya devam ediyoruz!
              </p>

              <p className="mb-6">
                İngilizce öğretmenimiz <strong>Özge Kılıç</strong> rehberliğinde yürütülen eTwinning projemiz
                "The Voice of the Future – Geleceğin Sesi", çocuk haklarına dikkat çekmeyi hedefleyen
                çok yönlü bir etkinlik dizisine dönüştü.
              </p>

              <p className="mb-6">
                Projemiz kapsamında, çocuk haklarının önemini vurgulamak amacıyla bir konferans düzenlendi.
                Bu değerli etkinliğe alanında uzman birçok profesör, öğretmen ve öğrencilerimiz katılım sağladı.
                Çocukların sesi daha gür çıksın diye hep birlikte düşündük, konuştuk ve farkındalık yarattık.
              </p>

              <p className="mb-6">
                Proje sürecinde öğrencilerimizle birlikte <strong>"Sadako ve Kâğıttan Bin Turna Kuşu"</strong>
                kitabını okuyarak empati, barış ve insan hakları temalarını derinlemesine ele aldık.
                Kitaplardan ilhamla, origami çalışmaları gerçekleştirerek turna kuşu yaptık.
                Her bir turna, barışa ve çocukların daha iyi bir geleceğe sahip olmasına dair umutlarımızı temsil etti.
              </p>

              <p className="mb-6">
                Ayrıca öğrencilerimizle birlikte, çocuk haklarını yaratıcı bir dille ifade edebilmek adına
                bir <strong>rap şarkısı</strong> da yazdık. Bu şarkıyla hem öğrencilerimizin yaratıcılığı desteklendi
                hem de çocuk hakları konusundaki duyarlılıklarını ifade etme fırsatı buldular.
              </p>

              <p className="text-lg font-semibold text-blue-700 bg-blue-50 p-5 rounded-xl">
                "The Voice of the Future" projesi, çocukların sadece bugününü değil,
                yarınlarını da şekillendirme vizyonuyla ilerlemeye devam ediyor.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-8">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center space-y-2">
            <h3 className="text-2xl font-semibold mb-1">The Voice of the Future</h3>
            <p className="text-blue-100 mb-3">Geleceğin Sesi - eTwinning Projesi</p>
            <p className="text-blue-200 text-sm select-text">
              Polatlı Bedriye Halil Naci Mıhcıoğlu İlkokulu • Rehber Öğretmen: Özge Kılıç
            </p>
          </div>
        </div>
      </footer>

      {/* Full Screen Modal Gallery */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center">
          {/* Close Button */}
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-3 transition-all duration-200 z-10"
          >
            <X className="w-6 h-6 text-white" />
          </button>

          {/* Image Counter */}
          <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-sm rounded-full px-4 py-2 z-10">
            <span className="text-white text-sm font-medium">
              {modalCurrentImage + 1} / {images.length}
            </span>
          </div>

          {/* Main Image */}
          <div className="relative w-full h-full flex items-center justify-center p-4">
            <img
              src={images[modalCurrentImage].url}
              alt={images[modalCurrentImage].caption}
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
            />

            {/* Navigation Arrows */}
            <button
              onClick={prevModalImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-4 transition-all duration-200"
            >
              <ChevronLeft className="w-8 h-8 text-white" />
            </button>
            
            <button
              onClick={nextModalImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-4 transition-all duration-200"
            >
              <ChevronRight className="w-8 h-8 text-white" />
            </button>
          </div>

          {/* Image Info */}
          <div className="absolute bottom-4 left-4 right-4 bg-black/50 backdrop-blur-sm rounded-xl p-4 max-w-2xl mx-auto">
            <h3 className="text-white text-xl font-semibold mb-2">
              {images[modalCurrentImage].caption}
            </h3>
            <p className="text-white/80 text-sm">
              {images[modalCurrentImage].description}
            </p>
            <p className="text-white/60 text-xs mt-2">
              ESC tuşu ile çıkış • Ok tuşları ile gezinme
            </p>
          </div>

          {/* Thumbnail Strip */}
          
        </div>
      )}
    </div>
  );
};

export default ETwinningWebsite;