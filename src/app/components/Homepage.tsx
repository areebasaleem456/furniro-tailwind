import Image from "next/image";
function Homepage(){
    return (
      <div>
        <Image src={"/top2.jpeg"} height={200} width={1300} alt="picture"></Image>
      </div>
    );
}
export default Homepage