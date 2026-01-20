import { memo } from "react";
import { FiMapPin } from "react-icons/fi";
import { HiMapPin } from "react-icons/hi2";
import { FaArrowRight } from "react-icons/fa";

const ContactAddresses = () => {
  const addresses = [
   
    {
      country: "India Address",
      address:
        "20706, Willow Block , IFFG , 13th Phase KPHB , Hyderabad , Telangana, India -500085",
        url:'https://maps.app.goo.gl/QCyN8yV2ywCxDiJH8'
    },
     {
      country: "USA Address",
      address: "5334 Sloan falls ct, Sugar Land Tx 77479",
      url:'https://maps.app.goo.gl/LiB7bsRrA2JamFacA'
    }
  ];

  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-24">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-secondary text-3xl lg:text-4xl text-ink">
            Our Locations
          </h2>
        </div>

        {/* Pillars Grid */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2  gap-8">
          {addresses.map((item, index) => (
            <div
              key={index}
              className="bg-gray-50 border border-border rounded-xl p-8 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-md hover:border-gray-300 flex flex-col gap-1"
            >
              {/* Icon Placeholder */}

              <h3 className="font-secondary text-2xl font-medium text-primary">
                {item.country}
              </h3>

              <p className="mt-1 mb-2 text-sm leading-relaxed text-muted font-primary">
                {item.address}
              </p>

              <a
                href= {item.url}
                target="_blank"
                className="inline-flex w-fit cursor-pointer mt-auto items-center rounded-md bg-transparent text-primary border border-primary px-6 py-2 text-sm font-medium hover:text-white hover:bg-primary transition-all duration-300"
              >
                Visit <FaArrowRight className="ml-2" />
              </a>
            </div>
          ))}
          {/* <div
            className="bg-gray-50 border border-border rounded-xl p-8 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-md hover:border-gray-300
  "
          >
            <h3 className="font-secondary text-lg text-ink">India</h3>

            <p className="mt-3 text-sm leading-relaxed text-muted font-primary">
              20706, Willow Block , IFFG , 13th Phase KPHB , Hyderabad ,
              Telangana, India -500085
            </p>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default memo(ContactAddresses);
