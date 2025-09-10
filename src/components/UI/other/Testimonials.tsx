import React from "react";
import boy1 from "./../../../assets/boy1.jpg";
import boy2 from "./../../../assets/boy2.jpeg";
import girl from "./../../../assets/girl.jpg";

const Testimonials: React.FC = () => {
  return (
    <section className="w-full px-5 md:px-10">
      <h1 className="pt-2 text-center text-3xl font-semibold text-gray-600 md:text-4xl">
        Testimonial
      </h1>
      <div className="flex w-full flex-col gap-4 p-1 md:flex-row md:p-5">
        <div className="flex h-full w-full items-center gap-3 rounded-xl border-1 border-blue-500 bg-blue-50 p-5 md:w-1/3">
          <img
            className="h-25 rounded-full border-1 border-black"
            src={boy1}
            alt=""
          />
          <i className="my-2 text-[12px] leading-4 font-medium text-gray-500 md:text-sm">
            "Our team uses DriveX to store and share resources across multiple
            departments. The speed and reliability are unmatched."
            <br />
            <span>
              - by{" "}
              <span className="text-blue-500">
                Avnit Kashyap, Graphic Designer
              </span>
            </span>
          </i>
        </div>
        <div className="flex h-full w-full items-center gap-3 rounded-xl border-1 border-blue-500 bg-blue-50 p-5 md:w-1/3">
          <img
            className="h-25 rounded-full border-1 border-black"
            src={girl}
            alt=""
          />
          <i className="my-2 text-[12px] leading-4 font-medium text-gray-500 md:text-sm">
            "As a freelancer, I need to send large project files daily. DriveX
            saves me hours by giving me quick links that just work—no limits, no
            delays."
            <br />
            <span>
              - by{" "}
              <span className="text-blue-500">
                Akansha Salwan, React Developer
              </span>
            </span>
          </i>
        </div>
        <div className="flex h-full w-full items-center gap-3 rounded-xl border-1 border-blue-500 bg-blue-50 p-5 md:w-1/3">
          <img
            className="h-25 rounded-full border-1 border-black"
            src={boy2}
            alt=""
          />
          <i className="my-2 text-[12px] leading-4 font-medium text-gray-500 md:text-sm">
            "DriveX made file sharing so effortless! I uploaded a 2GB file and
            shared it in seconds. Definitely the fastest storage solution I’ve
            tried."
            <br />
            <span>
              - by{" "}
              <span className="text-blue-500">
                Mritunjay Sahani, Backend Developer
              </span>
            </span>
          </i>
        </div>
      </div>
    </section>
  );
};
export default Testimonials;
