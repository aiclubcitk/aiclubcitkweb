"use client";
import { useState, useEffect } from "react";
import styles from "./page.module.css";
import Layout from "@/components/common/Layout";
import { Card, Container } from "react-bootstrap";
import React from "react";
import Image from "next/image";
import  {membersData } from "@/utils/members";

interface Members {
  name: string;
  role: string;
  subtitle: string;
  affil: string;
  image: {
    src: string;
    alt: string;
  };
  url: string;
  linkedin: string;
  score: number;
}

export default function People() {
  const [members, setMembers] = useState<Members[]>([]);

  useEffect(() => {
    // Function to shuffle an array using Fisher-Yates algorithm
    function shuffleArray(array: any[]) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
    }

    // Clone the membersData array to avoid modifying the original data
    const shuffledMembers = [...membersData];
    shuffleArray(shuffledMembers);
    
    setMembers(shuffledMembers);
  }, []);

  return (
    <>
      <Layout>
          <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-extrabold text-gray-900">Members</h2>
              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {members.map((item) => (
                  <div
                    key={item.name}
                    className="flex flex-col items-center space-y-4 "
                  >
                    <div className="relative">
                      <div className="overflow-hidden rounded-full border-4 border-gray-200 h-44 w-44">
                        <Image
                          src={item.image.src}
                          alt={item.image.alt}
                          width={200}
                          height={200}
                          className="rounded-full"
                        />
                      </div>
                      <div className="absolute inset-0 flex justify-center items-center">
                        <div className="bg-gray-900 opacity-0 hover:opacity-75 transition duration-300 rounded-full p-2">
                          <p className="text-white font-semibold text-lg">
                            {item.name}
                          </p>
                          <p className="text-gray-300 text-sm">{item.role}</p>
                        </div>
                      </div>
                    </div>
                    <div className="text-center">
                      <p className="text-lg font-semibold">{item.name}</p>
                      <p className="text-gray-500 text-sm">{item.role}</p>
                      <p className="text-gray-500 text-sm">{item.subtitle}</p>
                      <p className="text-gray-500 text-sm">{item.affil}</p>
                      <div className="flex space-x-4 items-center justify-center">
                        {item.url == "" ? (
                          <div></div>
                        ) : (
                          <a
                            href={item.url}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <p className="text-blue-600 text-sm">Website</p>
                          </a>
                        )}
                        {item.linkedin == "" ? (
                          <div></div>
                        ) : (
                          <a
                            href={item.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center text-gray-500 text-sm hover:text-blue-500"
                          >
                            <img
                              src="/assets/images/logo/others/linkedin.svg"
                              alt="LinkedIn"
                              className="h-6 w-6 mr-2"
                            />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
      </Layout>
    </>
  );
}
