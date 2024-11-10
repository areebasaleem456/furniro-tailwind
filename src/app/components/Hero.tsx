import Image from "next/image";

function Hero() {
  return (
    <div className="bg-orange-200 h-[450px] flex">
      <div id="left" className="w-6/12">
        <h1 className="text-amber-900 text-4xl font-extrabold mt-[100px] ml-[150px]">
          Furniture
        </h1>
        <h2 className="text-amber-900 text-2xl font-semibold mt-[10px] ml-[150px]">
          Landing Page
        </h2>
        <p className="w-64 mt-[10px] ml-[150px]">
          The E-Commerce website is easy customize,making it even easier for you
          to customize your next website or project and speed up your design
          workflow.
        </p>
      </div>
      <div id="right" className="flex">
        <Image
          className="mt-16 mb-4 mr-0"
          src="/Funiro Landing Page 3.png"
          height={80}
          width={200}
          alt="picture"
        ></Image>
        <Image
          className="m-10 mt-8 -ml-10"
          src="/Funiro Landing Page 4.png"
          height={100}
          width={200}
          alt="pictures"
        ></Image>
      </div>
    </div>
  );
}
export default Hero;
