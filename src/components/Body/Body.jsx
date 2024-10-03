import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Qrcode } from "../Qrcode/Qrcode";

function Body(props) {


  return (
    <>
      <Header />
      <div className="relative">
        <div className="fixed flex items-center justify-center bottom-10 right-10 bg-sunset-orange border border-olive-green rounded-full w-[70px] h-[70px] ">
          <Qrcode />
        </div>
        <div className="min-h-screen">{props.children}</div>
      </div>
      <Footer />
    </>
  );
}

export default Body;
