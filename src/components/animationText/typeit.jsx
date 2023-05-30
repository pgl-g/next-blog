import TypeIt from "typeit-react";

let OPTIONS = {
  breakLines: true,
  loop: true,
  loopDelay: 3000,
};

const TypeItText = ({ child }) => {
  return (
    <>
      <TypeIt options={OPTIONS}>
        <strong className="py-4 leading-tight text-white font-light font-mono">
          {child}
        </strong>
        ;
      </TypeIt>
    </>
  );
};

export default TypeItText;
