"use client";

import image1 from "@/assets/images/1.webp";
import image2 from "@/assets/images/2.webp";
import image3 from "@/assets/images/3.webp";
import image4 from "@/assets/images/4.webp";
import Image from "next/image";
import { useCallback, useEffect, useRef } from "react";

type SliderProps = {
  controls: boolean;
  autoplay: boolean;
  speed: number;
  interval: number;
};
const Slidershow = ({ controls, autoplay, speed, interval }: SliderProps) => {
  const WEBSITE = "Conecta Salud";
  const slideshow = useRef<HTMLDivElement>(null);
  const intervaloSlideshow: React.MutableRefObject<NodeJS.Timeout | null> =
    useRef(null);

  const prev = () => {
    const countChildren: number = slideshow.current?.children.length ?? 0;

    if (countChildren > 0 && slideshow.current !== null) {
      const index: number = slideshow.current?.children.length - 1;
      const lastElement = slideshow.current?.children[index] as HTMLElement;

      slideshow.current.insertBefore(lastElement, slideshow.current.firstChild);

      slideshow.current.style.transition = "none";
      const sizeSlide = (slideshow.current.children[0] as HTMLElement)
        .offsetWidth;
      slideshow.current.style.transform = `translateX(-${sizeSlide}px)`;

      setTimeout(() => {
        if (slideshow.current !== null) {
          slideshow.current.style.transition = `${speed}ms ease-out all`;
          slideshow.current.style.transform = `translateX(0)`;
        }
      }, 30);
    }
  };

  const next = useCallback(() => {
    const countChildren: number = slideshow.current?.children.length ?? 0;

    if (countChildren > 0 && slideshow.current !== null) {
      const firstElement = slideshow.current?.children[0] as HTMLElement;

      slideshow.current.style.transition = `${speed}ms ease-out all`;

      const sizeSlide: number = (slideshow.current.children[0] as HTMLElement)
        .offsetWidth;

      // Movemos el slideshow
      slideshow.current.style.transform = `translateX(-${sizeSlide}px)`;

      const transicion = () => {
        if (slideshow.current !== null) {
          // Reiniciamos la posicion del Slideshow.
          slideshow.current.style.transition = "none";
          slideshow.current.style.transform = `translateX(0)`;

          // Tomamos el primer elemento y lo mandamos al final.
          slideshow.current.appendChild(firstElement);

          slideshow.current.removeEventListener("transitionend", transicion);
        }
      };

      // Eventlistener para cuando termina la animacion.
      slideshow.current.addEventListener("transitionend", transicion);
    }
  }, [speed]);

  useEffect(() => {
    if (autoplay && slideshow.current !== null) {
      if (intervaloSlideshow.current !== null) {
        clearInterval(intervaloSlideshow.current);
      }
      intervaloSlideshow.current = setInterval(() => {
        next();
      }, interval);

      // Eliminamos los intervalos
      slideshow.current.addEventListener("mouseenter", () => {
        if (intervaloSlideshow.current !== null) {
          clearInterval(intervaloSlideshow.current);
        }
      });

      // Volvemos a poner el intervalo cuando saquen el cursor del slideshow
      slideshow.current.addEventListener("mouseleave", () => {
        if (intervaloSlideshow.current !== null) {
          clearInterval(intervaloSlideshow.current);
          intervaloSlideshow.current = setInterval(() => {
            next();
          }, interval);
        }
      });
    }
  }, [autoplay, interval, next]);

  return (
    <div className="contenedor-principal">
      <div className="contenedor-slideshow" ref={slideshow}>
        <div className="slide">
          <Image src={image1} alt="" />

          <div className="shadow" />
          <div className="text">
            <h2 className="text-sm mb-3 lg:text-5xl font-extrabold lg:mb-4">
              Accesibilidad
            </h2>

            <p className="text-xs md:text-sm lg:text-base">
              {WEBSITE} permite a los pacientes recibir atención médica desde
              cualquier lugar con acceso a Internet.
            </p>
          </div>
        </div>
        <div className="slide">
          <Image src={image2} alt="" />

          <div className="shadow" />
          <div className="text">
            <h2 className="text-sm mb-3 lg:text-5xl font-extrabold lg:mb-4">
              Accesibilidad
            </h2>

            <p className="text-xs md:text-sm lg:text-base">
              {WEBSITE} permite a los pacientes recibir atención médica desde
              cualquier lugar con acceso a Internet.
            </p>
          </div>
        </div>
        <div className="slide">
          <Image src={image3} alt="" />

          <div className="shadow" />
          <div className="text">
            <h2 className="text-sm mb-3 lg:text-5xl font-extrabold lg:mb-4">
              Accesibilidad
            </h2>

            <p className="text-xs md:text-sm lg:text-base">
              {WEBSITE} permite a los pacientes recibir atención médica desde
              cualquier lugar con acceso a Internet.
            </p>
          </div>
        </div>
        <div className="slide">
          <Image src={image4} alt="" />

          <div className="shadow" />
          <div className="text">
            <h2 className="text-sm mb-3 lg:text-5xl font-extrabold lg:mb-4">
              Accesibilidad
            </h2>

            <p className="text-xs md:text-sm lg:text-base">
              {WEBSITE} permite a los pacientes recibir atención médica desde
              cualquier lugar con acceso a Internet.
            </p>
          </div>
        </div>
      </div>
      {controls && (
        <div className="container-buttons">
          <button id="left" onClick={prev}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
            </svg>
          </button>
          <button id="rigth" onClick={next}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
};

export default Slidershow;
