"use client";
import { useState, useEffect } from "react";
import styles from "./page.module.css";
import Layout from "@/components/common/Layout";
import { Card, Container } from "react-bootstrap";
import Image from "next/image";
import { facultyMentorData } from "@/utils/faculty";

interface Faculty {
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
}
export default function About() {
  const [faculty, setFaculty] = useState<Faculty[]>([]);
  useEffect(() => {
    setFaculty(facultyMentorData);
  }, []);
  return (
    <>
      <Layout>
          <div className="bg-gray-100 py-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center">
                <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                  About AI Club
                </h2>
                <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
                  We are a community of AI enthusiasts, researchers, and
                  professionals who are passionate about advancing the field of
                  artificial intelligence and making it accessible to everyone.
                </p>
              </div>
              <div className="mt-10">
                <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                        <svg
                          className="h-6 w-6"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M21 12.268v-.536a9 9 0 00-2.227-5.845l-1.495 1.495a6 6 0 11-8.485 0l-1.495-1.495A9 9 0 003 11.732v.536a9 9 0 002.227 5.845l1.495-1.495a6 6 0 118.485 0l1.495 1.495A9 9 0 0021 12.268z"
                          />
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M12 14l9-5-9-5-9 5 9 5z"
                          />
                        </svg>
                      </div>
                    </div>

                    <div className="ml-4">
                      <dt className="text-lg leading-6 font-medium text-gray-900">
                        Our Mission
                      </dt>
                      <dd className="mt-2 text-base text-gray-500">
                        Our mission is to promote and facilitate the
                        understanding, development, and application of
                        artificial intelligence for the betterment of society.
                      </dd>
                    </div>
                  </div>

                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                        <svg
                          className="h-6 w-6"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M7 20h10a2 2 0 002-2V6a2 2 0 00-2-2H7a2 "
                          />

                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M15 10l-3-3m0 0L9 10m3-3v8m0-8l3 3M9 10l3 3"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <dt className="text-lg leading-6 font-medium text-gray-900">
                        Our Values
                      </dt>
                      <dd className="mt-2 text-base text-gray-500">
                        We value diversity, inclusivity, collaboration, and
                        ethical practices in all aspects of our work.
                      </dd>
                    </div>
                  </div>

                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                        <svg
                          className="h-6 w-6"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M13 10V3L4 14h7v7l9-11h-7z"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <dt className="text-lg leading-6 font-medium text-gray-900">
                        Our Activities
                      </dt>
                      <dd className="mt-2 text-base text-gray-500">
                        We organize regular events, workshops, and seminars to
                        share knowledge, discuss ideas, and foster collaboration
                        among members.
                      </dd>
                    </div>
                  </div>

                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                        <svg
                          className="h-6 w-6"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M17 11a4 4 0 11-8 0 4 4 0 018 0z"
                          />
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M15 20v-1a3 3 0 00-3-3H7a3 3 0 00-3 3v1"
                          />
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M23 20v-1a3 3 0 00-2-2.83M19 13a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2z"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <dt className="text-lg leading-6 font-medium text-gray-900">
                        Join Us
                      </dt>
                      <dd className="mt-2 text-base text-gray-500">
                        We welcome all AI enthusiasts to join our club and
                        contribute to our community. You can become a member by
                        filling out the registration form on our website or by
                        attending one of our events.
                      </dd>
                    </div>
                  </div>
                </dl>
              </div>
            </div>
          </div>
            <section className="py-16 bg-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 justify-center">
                <h2 className="text-3xl font-extrabold text-gray-900 text-center">
                  Faculty Incharge
                </h2>
                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 justify-center">
                  {faculty.map((item) => (
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
                          <a
                            href={item.url}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <p className="text-blue-600 text-sm">Website</p>
                          </a>
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
