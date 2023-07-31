import Image from "next/image";

import CustomCode, { Pre } from "@/components/customCpm/CustomCode";
import CustomLink from "@/components/customCpm/CustomLink";

const MDXComponents = {
  a: CustomLink,
  Image,
  pre: Pre,
  code: CustomCode,
};

export default MDXComponents;
