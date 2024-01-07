import TypeIt from "typeit-react";

let OPTIONS = {
  breakLines: true,
  loop: true,
  loopDelay: 30000,
};

const TypeItText = ({ children, options }) => {

  return (
    <>
      <TypeIt options={OPTIONS}>
        <strong className="py-4 leading-tight text-black font-light font-mono dark:text-[#bbb]">
          {children}
        </strong>
      </TypeIt>
    </>
  );
};

export default TypeItText;
