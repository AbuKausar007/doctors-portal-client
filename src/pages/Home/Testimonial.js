import React from "react";
import quote from "../../assets/icons/quote.svg";
import Reviews from "./Reviews";
import people1 from "../../assets/images/people1.png";
import people2 from "../../assets/images/people2.png";
import people3 from "../../assets/images/people3.png";

const Testimonial = () => {
  const reviews = [
    {
      _id: 1,
      name: "John Moxly",
      img: people1,
      location: "California",
      description:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      rating: "",
    },
    {
      _id: 2,
      name: "Roman Reigns",
      img: people2,
      location: "New York",
      description:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      rating: "",
    },
    {
      _id: 3,
      name: "Seth Rollins",
      img: people3,
      location: "Los Angeles",
      description:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      rating: "",
    },
  ];
  return (
    <section className="lg:px-10 px-4 lg:py-28 py-16">
      <div className="flex justify-between">
        <div>
          <h3 className="text-2xl text-primary font-bold">Testimonials</h3>
          <h1 className="text-4xl font-bold">What Our Patients Says</h1>
        </div>
        <div>
          <img className="w-24 lg:w-48" src={quote} alt="" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:pt-20 pt-16">
        {reviews.map((review) => (
          <Reviews key={review._id} review={review}></Reviews>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
