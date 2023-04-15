"use client";

import SliderCards from "@/components/slider/SliderCards";
import { RankingDrInterface } from "@/interfaces/dr/doctor.interface";
import { Avatar, Rating } from "@mui/material";
import Link from "next/link";
import { useState } from "react";
import { SwiperSlide } from "swiper/react";

const DoctorRanking = () => {
  const [ranking, setRanking] = useState<number | null>(2)
  const { doctors }: RankingDrInterface = {
    doctors: [
      {
        name: "Dr. Lorem Ipsum",
        image: "",
        socialNetworks: [{ platform: "facebook", url: "" }],
      },
      {
        name: "Dr. Lorem Ipsum",
        image: "",
        socialNetworks: [{ platform: "facebook", url: "" }],
      },
      {
        name: "Dr. Lorem Ipsum",
        image: "",
        socialNetworks: [{ platform: "facebook", url: "" }],
      },
      {
        name: "Dr. Lorem Ipsum",
        image: "",
        socialNetworks: [{ platform: "facebook", url: "" }],
      },
      {
        name: "Dr. Lorem Ipsum",
        image: "",
        socialNetworks: [{ platform: "facebook", url: "" }],
      },
      {
        name: "Dr. Lorem Ipsum",
        image: "",
        socialNetworks: [{ platform: "facebook", url: "" }],
      },
      {
        name: "Dr. Lorem Ipsum",
        image: "",
        socialNetworks: [{ platform: "facebook", url: "" }],
      },
    ],
  };

  return (
    <div className="w-screen bg-gray-100 flex lg:h-screen ">
      <div className="m-auto py-12 lg:m-auto w-4/5">
        <p className="text-center mb-3 text-sky-600 font-medium">
          Conozca a nuestro equipo
        </p>
        <h2 className="text-4xl text-center w-full mb-16 text-black relative bottom-after-select">
          Médicos especialistas
        </h2>

        <SliderCards>
          {doctors.map((dr) => {
            const { name, image, socialNetworks } = dr;
            return (
              <SwiperSlide key={name}>
                <div className="bg-white flex justify-center items-center p-6">
                  <div className="block">
                    <Avatar
                      src={image}
                      sx={{ width: 180, height: 180 }}
                      className="mb-4 mx-auto"
                      alt={name}
                    />
                    <div className="flex flex-col mx-auto text-center gap-2">
                      <h3 className="text-lg font-bold">{name}</h3>
                      <small className="text-gray-400">
                        Especialidad o Clinica
                      </small>
                      <Rating
                        name="dr-rating"
                        sx={{justifyContent:'center'}}
                        value={ranking}
                        onChange={(event, newValue) => {
                          setRanking(newValue);
                        }}
                      />
                    </div>
                    <div className="flex justify-center items-center gap-4 pt-3">
                      {socialNetworks.map((social) => (
                        <Link key={social.platform} href={social.url}>
                          <i
                            className={`fab fa-${social.platform} text-gray-400`}
                          />
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </SliderCards>
      </div>
    </div>
  );
};

export default DoctorRanking;
