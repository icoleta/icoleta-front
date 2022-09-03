import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import svg from "../assets/recycle_icon.png";

import point from "../assets/point.png";

import pointApi from "./../services/api/points";

function Point() {
  const { id } = useParams();
  const [point, setPoint] = useState(null);

  useEffect(() => {
    pointApi.fetchPoint().then((res) => {
      setPoint(res.data);
      console.log(res.data);
    });
  }, []);

  return <div className="justify-center"></div>;
}

export default Point;
