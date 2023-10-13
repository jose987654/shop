import React from "react";
import { Link } from "react-router-dom";
import RightArrow from "./icons/RightArrow";

export default function BreadCrumbs() {
  return (
    <div className="flex gap-x-6">
      <Link to={"/"}>
        <p className="text-slate-500">Home</p>
      </Link>
      <RightArrow />
      <Link to={"/"}>
        <p className="text-slate-500">Shop</p>
      </Link>
      <RightArrow />
      <p>Asgard Sofa</p>
    </div>
  );
}
