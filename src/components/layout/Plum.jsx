import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import options from "@/mock/tsparticlesConfig";
import clsx from "clsx";
import style from "./style.module.css";

export default function Plum() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <div
      className={clsx(
        "pointer-events-none fixed top-0 bottom-0 left-0 right-0 z-[-1]",
        style.mask_image
      )}
    >
      <Particles id="tsparticles" init={particlesInit} options={options} />
    </div>
  );
}
