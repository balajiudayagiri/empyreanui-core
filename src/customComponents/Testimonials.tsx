import React from "react";

const Testimonials: React.FC = () => {
  return (
    <div className="px-4 py-10">
      <h2 className="text-[#101518] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
        What Our Users Are Saying
      </h2>
      <div className="flex flex-col gap-6">
        {/* Testimonial 1 */}
        <div className="flex flex-col gap-3">
          <p className="text-[#5c778a] text-sm font-normal leading-normal">
            &quot;KodeBloxUI has drastically reduced the amount of time we spend
            building UI components. It&apos;s a game-changer for our team!&quot;
          </p>
          <div className="flex items-center gap-3">
            <div
              className="w-10 h-10 rounded-full bg-center bg-cover"
              style={{
                backgroundImage:
                  'url("https://randomuser.me/api/portraits/men/34.jpg")',
              }}></div>
            <p className="text-[#101518] text-sm font-bold">Mark Johnson</p>
          </div>
        </div>
        {/* Testimonial 2 */}
        <div className="flex flex-col gap-3">
          <p className="text-[#5c778a] text-sm font-normal leading-normal">
            &quot;The integration with our existing projects was seamless, and
            the components are incredibly easy to customize. Highly
            recommend!&quot;
          </p>
          <div className="flex items-center gap-3">
            <div
              className="w-10 h-10 rounded-full bg-center bg-cover"
              style={{
                backgroundImage:
                  'url("https://randomuser.me/api/portraits/women/35.jpg")',
              }}></div>
            <p className="text-[#101518] text-sm font-bold">Emily Davis</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
