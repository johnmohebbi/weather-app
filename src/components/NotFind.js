import React from "react";

const NotFind = () => {
  return (
    <div className="flex justify-center mt-20">
      <section className="flex justify-center items-center w-[95%] xs:w-[85%] sm:w-3/4 bg-zinc-50/20 rounded  text-slate-900 h-64 ">
        <div className="border border-slate-700/10 shadow-md rounded px-2 py-4 w-3/4">
          <h2 className="text-center text-4xl font-semibold">Not found</h2>
          <p className="mt-4 md:text-center text-xl text-slate-700 dark:text-slate-400 text-justify">
            sorry, but nothing matched your search please try different keyword.
          </p>
        </div>
      </section>
    </div>
  );
};

export default NotFind;
