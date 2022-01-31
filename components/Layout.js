import React from "react";
import Link from "next/link";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className=" mb-8 py-4 flex justify-center">
        <Link href="/">
          <a className="text-center text-purple-500">Dark Mode </a>
        </Link>
        <button
          type="button"
          class="bg-purple-500 text-white text-sm leading-6 font-medium py-2 px-3 rounded-lg ml-5"
        ></button>
      </header>

      <main className="container mx-auto flex-1">{children}</main>

      <footer className=" mt-8 py-4 text-gray-400 center">
        <div className="container mx-auto text-center mb-3 ">
          You can see my work in <span className="text-gray-600">Github</span>{" "}
          and <span className="text-gray-600">Behance</span> or see many tweets
          in my <p className="text-gray-600">Tweeter</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
