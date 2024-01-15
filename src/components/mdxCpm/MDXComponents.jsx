import Image from "next/image";

import CustomCode, { Pre } from "../customCpm/CustomCode";
import CustomLink from "../customCpm/CustomLink";

const MDXComponents = {
  a: CustomLink,
  Image,
  pre: Pre,
  code: CustomCode,
};

export default MDXComponents;
