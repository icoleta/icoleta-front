import jsQR from "jsqr";
import { BsQrCode } from "react-icons/bs";
import { toast } from "react-toastify";

const Qrcode = () => {
  const fr = new FileReader();

  const handleUpload = (e) => {
    fr.readAsDataURL(e.target.files[0]);
  };

  fr.onload = function () {
    const image = new Image();
    image.onload = function () {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      canvas.width = image.width;
      canvas.height = image.height;
      ctx?.drawImage(image, 0, 0);
      const imageData = ctx?.getImageData(0, 0, canvas.width, canvas.height);
      if (!imageData) {
        return;
      }
      const code = jsQR(imageData.data, imageData.width, imageData.height);
      if (code) {
        console.log(code.data);
      } else {
        toast.error("Envie um QR Code válido");
      }
    };
    image.src = fr.result;
  };

  return (
    <button className="fixed bottom-14 cursor-pointer right-10 bg-white border-2 border-olive-green rounded-full w-16 h-16 lg:w-24 lg:h-24  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300 focus:ring-1 focus:ring-orange-300 shadow-lg">
      <input
        type="file"
        onChange={handleUpload}
        id="file_input"
        hidden
        accept="image/*"
      />
      <label
        htmlFor="file_input"
        className="flex justify-center items-center w-full h-full cursor-pointer"
      >
        <BsQrCode
          size={window.innerWidth < 768 ? 32 : 48}
          className="text-olive-green"
        />
      </label>
    </button>
  );
};

export default Qrcode;
