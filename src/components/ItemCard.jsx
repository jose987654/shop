import React from "react";
import { Link } from "react-router-dom";

const ItemCard = (item) => {
  return (
    <Link to={`/${item.id}`}>
      <div className="flex flex-col mt-5">
        <div className="h-[280px]">
          <img
            className="object-cover object-center"
            src={item.image}
            alt={item.des}
          />
        </div>

        <div className="basis-2/4 space-y-3">
          <p className="text-base">{item.des}</p>
          <div>
            <p className="text-lg font-bold">{item.price}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ItemCard;
