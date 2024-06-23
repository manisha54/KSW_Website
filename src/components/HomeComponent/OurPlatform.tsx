import { NavBar, Footer, PlartformCard } from "../index";

function OurPlatform() {
  return (
    <>
      <NavBar />
      <h1 className="text-center md:text-2xl text-xl font-bold md:mt-4 md:mb-12 mt-2 mb-8">
        Our Plartforms
      </h1>
      <div className="flex flex-wrap justify-center items-center ">
        {/* plartform components */}

        <div className="flex justify-center flex-wrap flex-row space-x-4 md:space-x-8 lg:space-x-12 xl:space-x-16">
          <PlartformCard
            title="Hourly Place"
            desc="Discover diverse spaces on Hourly Place – your platform for booking co-working spaces, video shooting rooms, private libraries, cafes, hotels, and more on an hourly basis. Elevate your work environment or leisure experience with seamless, flexible bookings."
            props="md:ml-3 ml-4"
            imgSrc="https://images.pexels.com/photos/261579/pexels-photo-261579.jpeg?auto=compress&cs=tinysrgb&w=800"
            link="paste link here of product"
          />
          <PlartformCard
            title="The hostel Nepal"
            desc="Discover transparent hostel options for boys, girls, and travelers across Nepal with The Hostel Nepal. Book online hassle-free, offering newcomers the freedom to choose accommodations of their choice."
            props="mr-0 sm:mr-6"
            imgSrc="https://images.pexels.com/photos/4907181/pexels-photo-4907181.jpeg?auto=compress&cs=tinysrgb&w=800"
            link="paste link here of product"
          />
        </div>
        <div className="flex justify-center flex-wrap space-x-4 md:space-x-8 lg:space-x-12 xl:space-x-16 md:mt-12 mt-2">
          <PlartformCard
            title="Ghantaghar.com"
            desc="At Ghantaghar.com, users can seamlessly book diverse services such as cafes, hotels, homestays, and daycations on an hourly basis. Experience convenience and flexibility in your bookings, tailored to your specific time requirements."
            props="md:ml-3 ml-4 "
            imgSrc="https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=800"
            link="paste link here of product"
          />

          <PlartformCard
            title=" KSW Blogs"
            desc="Discover tech, education, and business insights on KSW Blogs by KSW Techzone – your go-to platform for concise and valuable articles."
            props="mr-0 sm:mr-6"
            imgSrc="https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?auto=compress&cs=tinysrgb&w=800"
            link="paste link here of product"
          />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default OurPlatform;
