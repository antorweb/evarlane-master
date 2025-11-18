export default function InfoSection() {
  return (





    <section className="InfoSection">

        <div className="container">




      <div className=" rounded-xl overflow-hidden bg-[#FBFBFB] shadow ">

<div className="flex justify-center gap-[63px] py-[122px] pb-[107px]">
    

        {/* LEFT — Delivery Information */}
        <div className="">
          <h2 className=" text-[32px] font-bold font-main mb-[42px] text-[#03081F]">
            <span>🚚</span> Delivery information
          </h2>

          <ul className="space-y-5">
            <li className="text-[18px] font-normal font-main text-[#000]"><strong className="text-[18px] font-bold font-main text-[#03081F]">Monday:</strong > 12:00 AM–3:00 AM, 8:00 AM–3:00 AM</li>
            <li className="text-[18px] font-normal font-main text-[#000]"><strong className="text-[18px] font-bold font-main text-[#03081F]">Tuesday:</strong > 8:00 AM–3:00 AM</li>
            <li className="text-[18px] font-normal font-main text-[#000]"><strong className="text-[18px] font-bold font-main text-[#03081F]">Wednesday:</strong > 8:00 AM–3:00 AM</li>
            <li className="text-[18px] font-normal font-main text-[#000]"><strong className="text-[18px] font-bold font-main text-[#03081F]">Thursday:</strong > 8:00 AM–3:00 AM</li>
            <li className="text-[18px] font-normal font-main text-[#000]"><strong className="text-[18px] font-bold font-main text-[#03081F]">Friday:</strong > 8:00 AM–3:00 AM</li>
            <li className="text-[18px] font-normal font-main text-[#000]"><strong className="text-[18px] font-bold font-main text-[#03081F]">Saturday:</strong > 8:00 AM–3:00 AM</li>
            <li className="text-[18px] font-normal font-main text-[#000]"><strong className="text-[18px] font-bold font-main text-[#03081F]">Sunday:</strong > 8:00 AM–12:00 AM</li>
          </ul>

          <p className="text-sm mt-3">
            <strong>Estimated time until delivery:</strong> 20 min
          </p>
        </div>

        {/* CENTER — Contact Information */}
        <div className="bg-gray-50 p-6 md:w-1/3 ">
          <h2 className=" text-[32px] font-bold mb-[42px] font-main text-[#03081F]">
            <span>📇</span> Contact information
          </h2>

          <p className="text-sm mb-3 leading-relaxed">
            If you have allergies or other dietary restrictions, please
            contact the restaurant. The restaurant will provide food-specific
            information upon request.
          </p>

          <p className="text-sm mt-4">
            <strong>Phone number</strong><br />
            +934443-43
          </p>

          <p className="text-sm mt-3">
            <strong>Website</strong><br />
            <a href="http://mcdonalds.uk/" className="text-blue-600 underline">
              http://mcdonalds.uk/
            </a>
          </p>
        </div>

        {/* RIGHT — Operational Times */}
        <div className="">
          <h2 className=" text-[32px] font-bold font-main mb-[42px] text-[#03081F]">
            <span>🕒</span> Operational Times
          </h2>

          <ul className=" space-y-5">
            <li className="text-[18px] font-normal font-main text-[#000]"><strong className="text-[18px] font-bold font-main text-[#03081F]">Monday:</strong > 8:00 AM–3:00 AM</li>
            <li className="text-[18px] font-normal font-main text-[#000]"><strong className="text-[18px] font-bold font-main text-[#03081F]">Tuesday:</strong > 8:00 AM–3:00 AM</li>
            <li className="text-[18px] font-normal font-main text-[#000]"><strong className="text-[18px] font-bold font-main text-[#03081F]">Wednesday:</strong > 8:00 AM–3:00 AM</li>
            <li className="text-[18px] font-normal font-main text-[#000]"><strong className="text-[18px] font-bold font-main text-[#03081F]">Thursday:</strong > 8:00 AM–3:00 AM</li>
            <li className="text-[18px] font-normal font-main text-[#000]"><strong className="text-[18px] font-bold font-main text-[#03081F]">Friday:</strong > 8:00 AM–3:00 AM</li>
            <li className="text-[18px] font-normal font-main text-[#000]"><strong className="text-[18px] font-bold font-main text-[#03081F]">Saturday:</strong > 8:00 AM–3:00 AM</li>
            <li className="text-[18px] font-normal font-main text-[#000]"><strong className="text-[18px] font-bold font-main text-[#03081F]">Sunday:</strong > 8:00 AM–3:00 AM</li>
          </ul>
        </div>

</div>


      </div>

        </div>

    </section>
  );
}
