import Link from "next/link";

function Navbar() {
  return (
    <div className="bg-white text-black h-12 w-full flex justify-end gap-5">
      <div>
        <h1 className="text-amber-900 flex justify-start text-3xl font-bold -ml-[920px]">
          Furniro
        </h1>
      </div>
      <ul>
        <li className="flex gap-6">
          <Link className="hover:underline text-2xl" href="#">
            Home
          </Link>
          <Link className="hover:underline text-2xl" href="#">
            Product
          </Link>
          <Link className="hover:underline text-2xl" href="#">
            Cart
          </Link>
          <Link className="hover:underline text-2xl" href="#">
            Account
          </Link>
        </li>
      </ul>
    </div>
  );
}
export default Navbar;
