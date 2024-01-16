"use client";
import Link from "next/link";
import menuData from "@/app/enum/MenuData";
import Image from "next/image";

export default function Ingredients({
  params,
}: {
  params: { postId: string };
}) {
  const { postId } = params;

  const meal = menuData.find((dest) => String(dest.id) === postId);

  if (!meal) {
    console.log(meal);
    return (
      <main className="flex flex-col items-center min-h-screen max-w-5xl m-auto p-10 bg-[#070505]">
        <h1 className="text-3xl font-bold p-10">Meal not found</h1>
        <Link href="/menu">
          <span className="mt-3 md:mt-4 px-3 py-1 md:px-4 md:py-2 bg-[#86A7DF] rounded-lg text-[#FFFFFF] hover:bg-[#5482d2]">
            &larr; Back to menu
          </span>
        </Link>
      </main>
    );
  }

  return (
    <div className="flex flex-col items-center bg-[#070505] text-white">
      <div className="relative w-full h-60 sm:h-80">
        <Image
          layout="fill"
          objectFit="cover"
          src={meal.img}
          alt={meal.name}
          className="rounded-xl"
        />
      </div>
      <h1 className="text-3xl font-bold pt-10 capitalize text-[#FFFFFF]">
        Ingredients in {meal.name}
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6 md:gap-8 px-4 sm:px-10 lg:px-20 py-4 md:py-10 ">
        {meal.ingredients.map((ingredient, index) => (
          <div
            className="py-4 rounded-xl overflow-hidden shadow-md bg-[#070505]"
            key={index}
          >
            <h2 className="text-xl font-bold my-3 text-[#FFFFFF]">
              {ingredient.name}
            </h2>
          </div>
        ))}
      </div>
      <Link href="/menu">
        <button className="text-[#FFFFFF] cursor-pointer mt-8 bg-[#86A7DF] my-6 p-2 rounded-xl hover:bg-[#5482d2]">
          &larr; Back to menu
        </button>
      </Link>
    </div>
  );
}
