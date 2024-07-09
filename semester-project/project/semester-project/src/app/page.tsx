import ImageTextComponent from "./components/HomeImageText";

export default function Home() {
  return (
    <div>
      <div className="relative home-background-pic">
        <h2 className="absolute inset-0 flex items-center justify-center text-white text-4xl lg:text-6xl md:text-4xl sm:text-2xl font-cursive text-center w-full p-4 sm:p-2 md:p-4 lg:p-6">
          Indulge your senses in a culinary journey of exquisite flavors at our
          restaurant, where every dish is crafted with passion and perfection.
        </h2>
        <img
          src="img/backgroundPhotoRestourant.webp"
          alt="Restaurant Background"
          className="w-full h-auto object-cover"
        />
      </div>
      <div>
        <ImageTextComponent
          title="Menu"
          description="Indulge in a symphony of exquisite flavors with our meticulously curated menu, featuring culinary masterpieces crafted with the finest ingredients to elevate your dining experience to new heights."
          imageUrl="/img/plate1.jpg"
          reverse
        />
        <ImageTextComponent
          title="Reserve"
          description="Embark on a culinary odyssey and join us at our esteemed restaurant, located at Dioklecijanova 23, Split, where every dish tells a story, and each visit promises an unforgettable gastronomic experience."
          imageUrl="/img/plate2.webp"
        />
      </div>
    </div>
  );
}
