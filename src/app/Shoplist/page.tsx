// this page is render when we click the footer on 'pages'
 
import Image from "next/image"
import Props4 from "@/components/Props4"

const page = () => {
  return (
    <div>
      <div className="w-full h-[286px] bg-[#F6F5FF]">
        <h1 className="text-4xl relative left-24 top-16 text-blue-950 font-bold">
          Shop List
        </h1>
        <p className="font-medium text-base text-blue-950 relative left-24 top-16">
          Home Shop <span className="text-pink-700">Shop Grid Default</span>
        </p>
      </div>

      <div className="flex gap-4">
        <div>
          <h2 className="text-xl text-blue-900 font-bold pl-28 pt-24">
            Ecommerce Accessories & Fashion items
          </h2>
          <p className="text-gray-500 pl-28 pb-24">
            About 9,620 results (0.62 seconds)
          </p>
        </div>
      </div>

      {/* Products List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-1 gap-6 mx-6 md:mx-28">
        <Props4
          Image1="/a1.png"
          heading="Accumsan tincidunt"
          price="$26.00"
          para="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo."
          Image2="/3icon.png"
        />
        <Props4
          Image1="/a2.png"
          heading="Accumsan tincidunt"
          price="$26.00"
          para="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo."
          Image2="/3icon.png"
        />
        <Props4
          Image1="/a3.png"
          heading="Accumsan tincidunt"
          price="$26.00"
          para="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo."
          Image2="/3icon.png"
        />
        <Props4
          Image1="/a4.png"
          heading="Accumsan tincidunt"
          price="$26.00"
          para="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo."
          Image2="/3icon.png"
        />
        <Props4
          Image1="/a5.png"
          heading="Accumsan tincidunt"
          price="$26.00"
          para="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo."
          Image2="/3icon.png"
        />
        <Props4
          Image1="/a6.png"
          heading="Accumsan tincidunt"
          price="$26.00"
          para="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo."
          Image2="/3icon.png"
        />
        <Props4
          Image1="/a7.png"
          heading="Accumsan tincidunt"
          price="$26.00"
          para="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo."
          Image2="/3icon.png"
        />
      </div>

      <div>
        <Image
          src={"/last.png"}
          alt="last"
          height={93}
          width={904}
          className="relative bottom-12 ml-16 pt-12 pb-12"
        />
      </div>
    </div>
  )
}

export default page
