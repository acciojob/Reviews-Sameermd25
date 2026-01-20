import React, { useState } from "react";
import reviews from "./data";

function Review() {
  const [index, setIndex] = useState(0);
  const { id, name, job, image, text } = reviews[index];

  // Handle index bounds
  const checkIndex = (num) => {
    if (num > reviews.length - 1) return 0;
    if (num < 0) return reviews.length - 1;
    return num;
  };

  const nextPerson = () => {
    setIndex((prev) => checkIndex(prev + 1));
  };

  const prevPerson = () => {
    setIndex((prev) => checkIndex(prev - 1));
  };

  const randomPerson = () => {
    let randomIndex = Math.floor(Math.random() * reviews.length);
    if (randomIndex === index) {
      randomIndex = index + 1;
    }
    setIndex(checkIndex(randomIndex));
  };

  return (
    <article className="review">
      <img src={image} alt={name} className="person-img" />

      <h4 id={`author-${id}`} className="author">
        {name}
      </h4>

      <p className="job">{job}</p>
      <p className="info">{text}</p>

      <div className="button-container">
        <button className="prev-btn" onClick={prevPerson}>
          Prev
        </button>
        <button className="next-btn" onClick={nextPerson}>
          Next
        </button>
      </div>

      <button className="random-btn" onClick={randomPerson}>
        surprise me
      </button>
    </article>
  );
}

export default Review;
