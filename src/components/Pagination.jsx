export default function Pagination({
  itemsPerPage,
  totalItemsInStore,
  currentPage,
  current,
  setCurrentPage,
}) {
  const pageNumbers = [];

  //gets the maximum amount of buttons to be displayed
  const buttonLimit = Math.ceil(totalItemsInStore / itemsPerPage);

  //pushes a number sequntially to the pageNumbers array for each instance i is less the btn limit
  for (let i = 1; i <= buttonLimit; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="flex gap-x-2 mt-5 mx-auto justify-center my-4">
      <button
        className="border border-slate-700 rounded-md px-2 py-1 hover:bg-slate-700 hover:text-white duration-150 transition-all"
        disabled={currentPage <= 1}
        onClick={() => setCurrentPage(currentPage - 1)} //fires the previous button function
      >
        Prev
      </button>

      {pageNumbers.map((btnNum) => (
        <button
          key={btnNum}
          className={`${
            currentPage === btnNum
              ? "py-1.5 px-3 bg-[#FBEBB5] border border-slate-800 rounded-md"
              : "py-1.5 px-3 bg-[#FBEBB5] rounded-md"
          }`}
          onClick={() => setCurrentPage(btnNum)} //switches between pages and updates the current page state
        >
          {btnNum}
        </button>
      ))}

      <button
        className="border border-slate-700 rounded-md px-2 py-1 hover:bg-slate-700 hover:text-white duration-150 transition-all"
        disabled={current.length < 5}
        onClick={() => setCurrentPage(currentPage + 1)} //fires the next button function handler
      >
        Next
      </button>
    </div>
  );
}
