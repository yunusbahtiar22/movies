import { useEffect, useState } from "react";
import Fade from "react-reveal/Fade";

export default function Carousel({ children }) {
  const [current, setCurrent] = useState(0);
  const lastSlide = children.length - 1;
  const handlePrev = () => {
    if (current > 0) {
      setCurrent(current - 1);
    }
  };

  const handleNext = () => {
    if (current === lastSlide) {
      setCurrent(0);
    } else {
      setCurrent(current + 1);
    }
  };

  useInterval(() => setCurrent(current + 1), 5000, [current]);

  return (
    <div className="carousel slide" data-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active" style={{ minHeight: "50vh" }}>
          <Fade>{children[current]}</Fade>
        </div>
      </div>
      <button
        onClick={handlePrev}
        className="carousel-control-prev"
        type="button"
        data-target="#carouselExampleControls"
        data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </button>
      <button
        onClick={handleNext}
        className="carousel-control-next"
        type="button"
        data-target="#carouselExampleControls"
        data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </button>
    </div>
  );
}

const useInterval = (fn, ms, deps = []) => {
  useEffect(() => {
    const interval = setInterval(fn, ms);

    return () => clearInterval(interval);
  }, deps);
};
