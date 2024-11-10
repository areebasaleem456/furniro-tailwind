import Image from "next/image";

function Account() {
  return (
    <div className="flex">
      <div className="w-6/12" id="left ">
        <h1 className="text-3xl font-bold">Log In To Your Account</h1>
        <p className="text-2xl mt-6 ">
          Check your order status,update your billing info,and review your past
          purchases.
        </p>
        <h1 className="text-2xl mt-4">Email*</h1>
        <input
          className="border-black border-2 px-2 py-1 mt-1"
          type="text"
          placeholder="Enter Your E-mail "
        />
        <br />
        <br />
        <h1 className="text-2xl">Password</h1>
        <input
          className="border-black border-2 px-2 py-1 mt-2 "
          type="password"
          placeholder="Enter Your Password"
        />
        <h3 className="text-lg underline mt-2">Forget Password</h3>
        <button className="border-2 border-black rounded-lg px-10 py-2 text-2xl font-bold text-white bg-black mt-4">
          Log In
        </button>
        <p className="text-lg">
          Don't have an account?
          <span className="hover:underline text-xl">Sign Up</span>
        </p>
      </div>
      <div className="w-6/12" id="right">
        <Image src={"/pic1.jpg"} width={900} height={900} alt="PICTURE"></Image>
      </div>
    </div>
  );
}
export default Account;
