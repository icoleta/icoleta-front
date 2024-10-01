import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Qrcode } from "../Qrcode/Qrcode";

function Body(props) {


  return (
    <>
      <Header />
      <div className="relative">
        <div className="privada fixed bottom-10 right-10 bg-sunset-orange border border-olive-green rounded-full w-10 h-10 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300 focus:ring-1 focus:ring-orange-300">
          <Qrcode />
        </div>
        <div className="min-h-screen">{props.children}</div>
      </div>
      <Footer />
    </>
  );
}

export default Body;
