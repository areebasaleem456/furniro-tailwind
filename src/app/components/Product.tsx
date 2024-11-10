import Image from "next/image";

function Product() {
  return (
    <div>
      <div>
        <h1 className="text-4xl font-bold flex justify-center text-center underline m-4">
          OUR PRODUCTS
        </h1>
      </div>
      <div className="flex justify-evenly">
        <Image
          className="m-6 border-2"
          src={"/product1.jpg"}
          height={0}
          width={300}
          alt="sofa"
        ></Image>
        <Image
          className="m-6 border-black border-2"
          src={"/product2.jpg"}
          height={0}
          width={300}
          alt="chair"
        ></Image>
        <Image
          className="m-6 border-black border-2"
          src={"/product3.jpg"}
          height={0}
          width={300}
          alt="tvstand"
        ></Image>
      </div>
      <div>
        <span className="text-2xl font-semibold underline ml-[130px] ">
          LUXURY SOFA $236
        </span>
        <span className="text-2xl font-semibold underline ml-[200px] ">
          DINING TABLE $294
        </span>
        <span className="text-2xl font-semibold underline ml-[190px] ">
          BOOK SHELVES $385
        </span>
      </div>
      <div>
        <button className="border-2 border-black rounded-sm text-xl font-medium px-8 py-2 bg-amber-900 mt-7 ml-[140px]">
          Add To Cart
        </button>
        <button className="border-2 border-black rounded-sm text-xl font-medium px-8 py-2 bg-amber-900 mt-7 ml-[250px]">
          Add To Cart
        </button>
        <button className="border-2 border-black rounded-sm text-xl font-medium px-8 py-2 bg-amber-900 mt-7 ml-[230px]">
          Add To Cart
        </button>
      </div>
      <div className="flex justify-evenly">
        <Image
          className="m-8 border-black border-2"
          src={"/product4.jpg"}
          height={0}
          width={300}
          alt="product3"
        ></Image>
        <Image
          className="m-8 border-black border-2"
          src={"/product5.jpg"}
          height={0}
          width={300}
          alt="product4"
        ></Image>
        <Image
          className="m-8 border-black border-2"
          src={"/product6.jpg"}
          height={0}
          width={300}
          alt="product5"
        ></Image>
      </div>
      <div>
        <span className="text-2xl font-semibold underline ml-[130px] ">
          COFFEE TABLE
        </span>
        <span className="text-2xl font-semibold underline ml-[300px] ">
          TV STAND
        </span>
        <span className="text-2xl font-semibold underline ml-[280px] ">
          DRESSING TABLE
        </span>
      </div>
      <div>
        <button className="border-2 border-black rounded-sm text-xl font-medium px-8 py-2 bg-amber-900 mt-7 ml-[120px]">
          Add To Cart
        </button>
        <button className="border-2 border-black rounded-sm text-xl font-medium px-8 py-2 bg-amber-900 mt-7 ml-[270px]">
          Add To Cart
        </button>
        <button className="border-2 border-black rounded-sm text-xl font-medium px-8 py-2 bg-amber-900 mt-7 ml-[250px]">
          Add To Cart
        </button>
      </div>
    </div>
  );
}
export default Product;
