import React, { useState } from "react";
import { storeData } from "./data";
import ItemCard from "./ItemCard";
import Pagination from "./Pagination";

const ShopItems = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [shopData, setShopData] = useState(storeData);
  const itemsPerPage = 12;

  const indexOfLastPage = currentPage * itemsPerPage;
  const indexOfFirstPage = indexOfLastPage - itemsPerPage;

  const current = shopData.slice(indexOfFirstPage, indexOfLastPage);
  return (
    <div>
      <div className="grid mb-5 grid-cols-1 max-w-8xl mx-auto sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-center justify-center mt-20">
        {current.map((item) => (
          <ItemCard key={item.id} {...item} />
        ))}
      </div>
      <Pagination
        totalItemsInStore={shopData.length}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
        current={current}
      />
    </div>
  );
};
export default ShopItems;
