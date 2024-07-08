import ImageTextComponent from "./components/HomeImageText";

export default function Home() {
  return (
    <div>
      <div className="home-background-pic">
        <h2>
          Indulge your senses in a culinary journey of exquisite flavors at our
          restaurant, where every dish is crafted with passion and perfection.
        </h2>
        <img src="img/backgroundPhotoRestourant.webp" alt="" />
      </div>
      <div>
        <ImageTextComponent
          title="Menu"
          description="Indulge in a symphony of exquisite flavors with our
           meticulously curated menu, featuring culinary masterpieces crafted
            with the finest ingredients to elevate your dining experience to new heights."
          imageUrl="/img/plate1.jpg"
          reverse
        />{" "}
        <ImageTextComponent
          title="Reserve"
          description="Embark on a culinary odyssey and join us at our esteemed restaurant,
           located at Dioklecijanova 23, Split, where every dish tells a story, and each 
           visit promises an unforgettable gastronomic experience."
          imageUrl="/img/plate2.webp"
        />{" "}
      </div>
    </div>
  );
}
