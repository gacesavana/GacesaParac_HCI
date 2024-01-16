"use client";
import Link from "next/link";
import menuData from "@/app/enum/MenuData";
import Image from "next/image";
import { useState } from "react";

export default function MenuData() {
  const [search, setSearch] = useState("");

  const filteredmenuData = menuData.filter((menuData) =>
    menuData.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="flex flex-col items-center bg-[#070505] text-white">
      <div className="flex flex-col pt-4 md:p-12">
        <form>
          <input
            className="w-96 md:w-1/2 flex items-center p-2 rounded-xl mx-auto text-black mt-10 mb-12 md:mb-24 outline-none"
            placeholder="Search for dinner (e.g. Epic Crispy Quinoa Burgers)"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          ></input>
        </form>
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-3 md:gap-6 mx-5">
          {filteredmenuData.map((menuData) => (
            <div
              key={menuData.id}
              className="rounded-xl overflow-hidden shadow-md bg-[#070505] mb-3"
            >
              <div className="relative h-40 sm:h-52">
                <Image
                  className="object-cover rounded-t-xl"
                  layout="fill"
                  src={menuData.img}
                  alt={menuData.name}
                />
              </div>
              <div className="p-4">
                <p className="font-bold text-lg sm:text-xl mt-2 mb-1 text-[#FFFFFF]">
                  {menuData.name}
                </p>
                <p className="text-sm md:text-base">{menuData.info}</p>
                <Link href={`menu/${menuData.id}`}>
                  <button className="mt-3 md:mt-4 px-3 py-1 md:px-4 md:py-2 bg-[#86A7DF] rounded-lg text-[#FFFFFF] hover:bg-[#5482d2]">
                    More info
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
