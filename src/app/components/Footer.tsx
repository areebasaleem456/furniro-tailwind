function Footer(){
    return (
        <div className="bg-black flex text-white justify-evenly items-center h-[200px]">
          <div>
            <h1 className="font-extrabold text-2xl">FURNIRO</h1>
            <ul>
              <li>Subscribe</li>
              <li>Get 10% Off on your first order</li>
              <input type="text" placeholder="Enter Your E-Mail"></input>
            </ul>
          </div>
          <div>
            <h1 className="font-extrabold text-2xl">Support</h1>
            <ul>
              <li>exclusive@gmail.com</li>
              <li>+923123456789</li>
            </ul>
          </div>
          <div>
            <h1 className="font-extrabold text-2xl">Account</h1>
            <ul>
                <li>My Account</li>
                <li>Login/Register</li>
                <li>Cart</li>
                <li>Wishlist</li>
                <li>Shop</li>
            </ul>
          </div>
          <div>
            <h1 className="font-extrabold text-2xl">Quick Link</h1>
            <ul>
                <li>Privacy Policy</li>
                <li>Terms Of Use</li>
                <li>FAQ</li>
                <li>Contact</li>
            </ul>
            </div>
        </div>
      );
}
export default Footer