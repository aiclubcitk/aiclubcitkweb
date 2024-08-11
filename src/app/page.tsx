"use client";
import { useState } from "react";
import styles from "./page.module.css";
import Layout from "@/components/common/Layout";
import { Container } from "react-bootstrap";
import Image from "next/image";
import ImageCarousel from "@/components/common/ImageCarousel";
import { featuredData } from "@/utils/featured";
import { Card } from "@/interfaces/card";
import Notices from "@/components/notices";
export default function Home() {
  return (
    <>
      <Layout>
      <div className="flex flex-col sm:flex-row h-auto mt-5 items-center justify-center ">
  <div className="w-full sm:w-2/3  ">
    <ImageCarousel />
  </div>

  <div className="w-full sm:w-1/3 sm:pr-40 ">
    <Notices />
  </div>
</div>

          <div className="flex justify-center flex-col sm:flex-row ">
            {featuredData.map((card, index) => (
              <div key={index} className="m-5">
                <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                  <a href={card.link}>
                    <Image
                      className="rounded-t-lg"
                      src={card.imageSrc}
                      alt=""
                      width={500}
                      height={500}
                    />
                  </a>
                  <div className="p-5">
                    <a href={card.link}>
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {card.title}
                      </h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      {card.description}
                    </p>
                    {card.link == "" ? (
                      <div></div>
                    ) : (
                      <a
                        href={card.link}
                        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      >
                        Read more
                        {/* ...SVG icon */}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
      </Layout>
    </>
  );
}
