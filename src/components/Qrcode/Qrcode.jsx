import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import { IconButton, SvgIcon } from "@mui/material";
import { MdOutlineQrCodeScanner } from "react-icons/md";
import { QRCodeDialog } from "../QRCodeDialog";

const Root = styled("div")(() => ({
  [`& @global`]: {
    "*": {
      boxSizing: "border-box",
      margin: 0,
      padding: 0,
    },
    html: {
      height: "100%",
      width: "100%",
    },
    body: {
      height: "100%",
      width: "100%",
    },
    "#root": {
      height: "100%",
      width: "100%",
    },
  },
}));

export function Qrcode() {
  const [code, setCode] = useState("");
  const [openQrCodeReader, setOpenQrCodeReader] = useState(false);

  if (!code) {
    console.log("Código não escaneado");
  }

  const handleOpenQrCodeReader = () => {
    setOpenQrCodeReader(true);
  };

  return (
    <Root>
      <IconButton onClick={handleOpenQrCodeReader}>
        <SvgIcon >
          <MdOutlineQrCodeScanner style={{ color: 'white'}} />
        </SvgIcon>
      </IconButton>
        
      <QRCodeDialog
        open={openQrCodeReader}
        setOpen={setOpenQrCodeReader}
        setCode={setCode}
      />
    </Root>
  );
}
