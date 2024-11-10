import Image from "next/image";

function Cart() {
  return (
    <div className="h-[650px] flex">
      <div>
        <Image src={"/sofa1.jpg"} width={500} height={500} alt="/"></Image>
        <Image src={"/sofa2.jpg"} width={400} height={400} alt="/"></Image>
      </div>
      <div className="">
        <h1 className="text-3xl font-bold  ml-[250px] mt-[80px]">
          SUNDAY SOFA
        </h1>
        <p className="text-xl font-semibold  ml-[300px] mt-[10px]">$57.9</p>
      </div>
      <div className="">
        <button className="border-2 border-black bg-white mt-[180px] py-1 px-8 text-4xl font-semibold -ml-56">
          - 1 +
        </button>
        <button className="border-2 border-black bg-white flex -mt-[50px] px-8 py-2 text-xl font-semibold -ml-16">
          Add To Cart
        </button>
        <button className="border-black border-2 bg-amber-900 mt-[50px] text-4xl font-semibold px-12 py-2 -ml-48">
          Buy Now
        </button>
        <p className="w-96 -ml-64 mt-6 font-serif text-lg" >
          Transform your space with our exquisite range of furniture. Handpicked
          designs, premium materials, and affordable prices. Discover the
          perfect piece for your home, office, or outdoor space. Shop now!Bring
          comfort and style to your life with our expertly crafted furniture.
          Explore our extensive collection of sofas, beds, chairs, tables, and
          more. Free shipping, easy returns, and quality guaranteed.
        </p>
      </div>
    </div>
  );
}
export default Cart;
