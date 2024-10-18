import jsQR from "jsqr";
import { BsQrCode } from "react-icons/bs";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Qrcode = () => {
  const fr = new FileReader();
  const navigate = useNavigate();
  const handleUpload = (e) => {
    fr.readAsDataURL(e.target.files[0]);
  };

  fr.onload = function () {
    const image = new Image();
    image.onload = function () {
      const maxDimension = 600; // Define a maximum dimension for the image
      let width = image.width;
      let height = image.height;

      // Calculate new dimensions while maintaining aspect ratio
      if (width > height) {
        if (width > maxDimension) {
          height *= maxDimension / width;
          width = maxDimension;
        }
      } else {
        if (height > maxDimension) {
          width *= maxDimension / height;
          height = maxDimension;
        }
      }

      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      canvas.width = width;
      canvas.height = height;
      ctx?.drawImage(image, 0, 0, width, height);
      const imageData = ctx?.getImageData(0, 0, canvas.width, canvas.height);
      if (!imageData) {
        return;
      }
      const code = jsQR(imageData.data, imageData.width, imageData.height);
      if (code) {
        console.log(code.data);
        navigate(`/descarte/:${code.data}`);
      } else {
        toast.error("Envie um QR Code válido");
      }
    };
    image.src = fr.result;
  };

  return (
    <button className="fixed bottom-10  right-6 bg-white border-2 border-olive-green rounded-full w-16 h-16 lg:w-24 lg:h-24  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300 focus:ring-1 focus:ring-orange-300 shadow-lg">
      <input
        type="file"
        onChange={handleUpload}
        id="file_input"
        hidden
        accept="image/*"
      />
      <label
        htmlFor="file_input"
        className="flex justify-center items-center w-full h-full cursor-pointer relative"
      >
        <p className="absolute -top-14  text-xs text-white w-fit shadow-lg bg-olive-green rounded-md px-2 py-1">
          Ler QR Code
        </p>
        <BsQrCode
          size={window.innerWidth < 768 ? 30 : 32}
          className="text-olive-green"
        />
      </label>
    </button>
  );
};

export default Qrcode;
