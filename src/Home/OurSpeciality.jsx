import { useTypewriter, Cursor } from "react-simple-typewriter";

const OurSpeciality = () => {
  const [text] = useTypewriter({
    words: ["outword bound", "CULRURE CURIOUS", "Relax"],
    loop: true,
  });
  return (
    <div>
      <div className="my-6 text-center text-xl lg:text-2xl text-orange-400">
        Enjoy
        <span> {text}</span>
        <Cursor cursorStyle="<"></Cursor>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 grid-cols-1">
        <div className="relative mx-4 flex items-center justify-center">
          <img
            src="https://millatsakib.github.io/img-src/Assignment10/extra/lion.jpg"
            className="rounded-lg"
          ></img>
          <span className="absolute text-white font-bold text-3xl md:text-2xl lg:text-4xl">
            {" "}
            OUTWARD BOUND
          </span>
        </div>
        <div className="relative mx-4 flex items-center justify-center">
          <img
            src="https://millatsakib.github.io/img-src/Assignment10/extra/cottage.jpg"
            className="rounded-lg"
          ></img>
          <span className="absolute text-white font-bold text-3xl md:text-2xl lg:text-4xl">
            CULRURE CURIOUS
          </span>
        </div>
        <div className="relative mx-4 flex items-center justify-center">
          <img
            src="https://millatsakib.github.io/img-src/Assignment10/extra/building.jpg"
            className="rounded-lg"
          ></img>
          <span className="absolute text-white font-bold text-3xl md:text-2xl lg:text-4xl">
            RELAX, RELAX RELAX
          </span>
        </div>
      </div>
    </div>
  );
};

export default OurSpeciality;
