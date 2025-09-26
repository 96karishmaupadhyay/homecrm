import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import zoho from "../../assets/zoho.svg"
import maac from "../../assets/maac.webp"
import razorpay from "../../assets/razorpay.svg"
import shopify from "../../assets/shopify.svg"
function Partners() {
 const settings = {
  dots: false,
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  speed: 5000,               // Longer speed = smoother
  autoplaySpeed: 0,          // No delay between scrolls
  cssEase: "linear",
  arrows: false,
  pauseOnHover: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: { slidesToShow: 3 }
    },
    {
      breakpoint: 768,
      settings: { slidesToShow: 2 }
    },
    {
      breakpoint: 480,
      settings: { slidesToShow: 1 }
    }
  ]
};


  return (
    <div className="py-12 px-4 bg-white-100 border-t-1 border-gray-100 pb-8 border-b-1 h-[60vh]"> 
      <h2 className="text-center text-6xl font-bold mb-12 text-gray-800">Our Partners</h2>
      <div className="max-w-6xl mx-auto  ">
        <Slider {...settings}>
          <div className="flex items-center justify-center p-4">
            <img src={zoho}alt="Zoho" className="h-16 object-contain" />
          </div>
          <div className="flex items-center justify-center p-4">
            <img src={maac} alt="MAAC" className="h-16 object-contain" />
          </div>
          <div className="flex items-center justify-center p-4">
            <img src={razorpay} alt="Razorpay" className="h-16 object-contain" />
          </div>
          <div className="flex items-center justify-center p-4">
            <img src={shopify} alt="Shopify" className="h-16 object-contain" />
          </div>
          <div className="flex items-center justify-center p-4">
            <img src={zoho} alt="Logo" className="h-16 object-contain" />
          </div>
          <div className="flex items-center justify-center p-4">
            <img src={shopify} alt="Cashfree" className="h-16 object-contain" />
          </div>
          <div className="flex items-center justify-center p-4">
            <img src={razorpay} alt="Bobcat" className="h-16 object-contain" />
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default Partners;
