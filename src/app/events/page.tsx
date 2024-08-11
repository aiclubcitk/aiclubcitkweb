"use client";
import { useState, useEffect } from "react";
import { eventsData, activitiesData } from "@/utils/events";
import Layout from "@/components/common/Layout";
import { Container } from "react-bootstrap";
import styles from "./page.module.css";

interface Events {
  id: number;
  title: string;
  shortdescription: string;
  description: string;
  abstract: string;
  eventincharge: string;
  date: string;
  days: string;
  venue: string;
  report: string;
  speaker: string;
  aboutspeaker: string;
  speakerdesignation: string;
  speakerimage: string;
  sponsors: {
    name: string;
    logo: string;
  }[];
  images: {
    src: string;
    alt: string;
  }[];
}
interface Activities {
  id: number;
  title: string;
  description: string;
  abstract: string;
  activityincharge: string;
  date: string;
  days: string;
  report: string;
  images: {
    src: string;
    alt: string;
  }[];
}

function Projects() {
  const [events, setEvents] = useState<Events[]>([]);
  const [selectedEvent, setSelectedEvent] = useState<Events | null>(null);

  const handleEventClick = (event: Events) => {
    setSelectedEvent(event);
  };

  const handleCloseModalEvent = () => {
    setSelectedEvent(null);
  };

  const [activities, setActivities] = useState<Activities[]>([]);
  const [selectedActivity, setSelectedActivity] = useState<Activities | null>(
    null
  );

  const handleActivityClick = (activity: Activities) => {
    setSelectedActivity(activity);
  };

  const handleCloseModalActivity = () => {
    setSelectedActivity(null);
  };

  useEffect(() => {
    const data = eventsData[0];
    // setEvents(data.events);
    //sort evennt with reverse order using id
    setEvents(data.events.sort((a, b) => b.id - a.id));
    const dataActivity = activitiesData[0];
    // setActivities(dataActivity.activities);
    //sort evennt with reverse order using id
    setActivities(dataActivity.activities.sort((a, b) => b.id - a.id));
  }, []);

  return (
    <>
      <Layout>
        <div className={styles.main}>
          <section className=" bg-white">
            <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
              <div className="max-w-xl mx-auto">
                <h2 className="text-3xl font-extrabold text-gray-900">
                  Events
                </h2>
                <p className="mt-4 text-lg text-gray-500">
                  Check out some of the awesome Events that our students have
                  been working on!
                </p>
              </div>
              <div className="mt-16 grid gap-8 lg:grid-cols-3 lg:max-w-none">
                {events.map((event) => (
                  <div
                    key={event.id}
                    className="flex flex-col overflow-hidden rounded-lg shadow-lg"
                    onClick={(evnt) => {
                      evnt.preventDefault();
                      handleEventClick(event);
                    }}
                  >
                    <div className="flex-shrink-0">
                      <img
                        className="object-cover w-full h-48"
                        src={event.images[0].src}
                        alt={event.images[0].alt}
                      />
                    </div>
                    <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                      <div className="flex-1">
                        <a href="#" className="block mt-2">
                          <p className="text-xl font-extrabold text-gray-900">
                            {event.title}
                          </p>
                          <p className="mt-3 text-base text-gray-500">
                            {event.shortdescription}
                          </p>
                          Click to view more.
                        </a>
                    
                      </div>
                      <div className="mt-6 flex items-center">
                        <div className="ml-3">
                          <p className="text-sm font-medium text-gray-900">
                            <b>Event Incharge:</b> {event.eventincharge}
                          </p>
                          {event.speaker.length > 0 && (
                            <div className="flex space-x-1 text-sm text-gray-900">
                              <h5 className="text-sm font-medium text-gray-900">
                                <b>Speaker :</b> {event.speaker}
                              </h5>
                            </div>
                          )}
                          <div className="flex space-x-1 text-sm text-gray-900">
                            <time dateTime="2020-03-16">
                              <b>Date:</b> {event.date}
                            </time>
                            <span aria-hidden="true">&middot;</span>
                            <span>
                              <b>Days:</b> {event.days}
                            </span>
                          </div>
                          <div></div>
                          {event.sponsors.length > 0 && (
                            <div className="flex space-x-1 text-sm text-gray-900">
                              <h5 className="text-sm font-medium text-gray-900">
                                <b>Sponsors :</b>
                              </h5>
                              <div className="flex space-x-1 text-sm text-gray-900">
                                {event.sponsors.map((sponsor) => (
                                  <div
                                    key={sponsor.name}
                                    className="flex flex-col overflow-hidden rounded-lg shadow-lg "
                                  >
                                    <img
                                      className="object-cover w-full h-24"
                                      src={sponsor.logo}
                                      alt={sponsor.name}
                                    />
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="bg-white">
            <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
              <div className="max-w-xl mx-auto">
                <h2 className="text-3xl font-extrabold text-gray-900">
                  Student Activities
                </h2>
                <p className="mt-4 text-lg text-gray-500">
                  Check out some of the awesome Activities that our students
                  have been working on!
                </p>
              </div>
              <div className="mt-16 grid gap-8 lg:grid-cols-3 lg:max-w-none">
                {activities.map((activity) => (
                  <div
                    key={activity.id}
                    className="flex flex-col overflow-hidden rounded-lg shadow-lg"
                    onClick={(event) => {
                      event.preventDefault();
                      handleActivityClick(activity);
                    }}
                  >
                    <div className="flex-shrink-0">
                      <img
                        className="object-cover w-full h-48"
                        src={activity.images[0].src}
                        alt={activity.images[0].alt}
                      />
                    </div>
                    <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                      <div className="flex-1">
                        <a href="#" className="block mt-2">
                          <p className="text-xl font-extrabold text-gray-900">
                            {activity.title}
                          </p>
                          <p className="mt-3 text-base text-gray-500">
                            {activity.description}
                          </p>
                        </a>
                      </div>
                      <div className="mt-6 flex items-center">
                        <div className="ml-3">
                          <p className="text-sm font-medium text-gray-900">
                            {activity.activityincharge}
                          </p>
                          <div className="flex space-x-1 text-sm text-gray-500">
                            <time dateTime="2020-03-16">{activity.date}</time>
                            <span aria-hidden="true">&middot;</span>
                            <span>{activity.days}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
          {selectedEvent && (
            <div className="fixed z-10 top-20 bottom-0 left-0 right-0 overflow-y-auto">
              <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                <div className="fixed inset-0 transition-opacity">
                  <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                </div>
                <div
                  className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
                  role="dialog"
                  aria-modal="true"
                  aria-labelledby="modal-headline"
                >
                  <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                    <span className="flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto">
                      <button
                        type="button"
                        className="inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 bg-blue-600 text-base leading-6 font-medium text-white shadow-sm hover:bg-blue-500 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue transition ease-in-out duration-150 sm:text-sm sm:leading-5"
                        onClick={() => handleCloseModalEvent()}
                      >
                        Close
                      </button>
                    </span>
                  </div>
                  <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                    <div className="sm:flex sm:items-start">
                      <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                        <h3
                          className="text-lg leading-6 font-medium text-gray-900"
                          id="modal-headline"
                        >
                          {selectedEvent.title}
                        </h3>
                        <div className="mt-2">
                          <p className="text-sm leading-5 text-gray-500">
                            {selectedEvent.description}
                          </p>
                        </div>
                        {/* <div className="mt-2">
                          <p className="text-sm leading-5 text-gray-500">
                            Abstract: {selectedEvent.abstract}
                          </p>
                        </div> */}
                        <div className="mt-2">
                          <p className="text-sm leading-5 text-gray-500">
                            Event Incharge: {selectedEvent.eventincharge}
                          </p>
                        </div>
                        <div className="mt-2">
                          <p className="text-sm leading-5 text-gray-500">
                            Date: {selectedEvent.date}
                            <br />
                            Days: {selectedEvent.days}
                          </p>
                        </div>
                        <div className="mt-2">
                          <p className="text-sm leading-5 text-gray-500">
                            Venue: {selectedEvent.venue}
                          </p>
                        </div>
                        {selectedEvent.speaker && (
                          <div className="mt-2">
                            <p className="text-sm leading-5 text-gray-500">
                              Speaker: {selectedEvent.speaker}
                            </p>
                            <p className="text-sm leading-5 text-gray-500">
                              Speaker Designation:{" "}
                              {selectedEvent.speakerdesignation}
                            </p>
                            <p>About : {selectedEvent.aboutspeaker}</p>
                            <img
                              src={selectedEvent.speakerimage}
                              alt={selectedEvent.speaker}
                            />
                          </div>
                        )}

                        <div className="mt-2">
                          <div className="grid grid-cols-3 gap-4">
                            {selectedEvent.images.map((image, index) => (
                              <img
                                key={index}
                                className="object-cover h-48 w-full"
                                src={image.src}
                                alt={image.alt}
                              />
                            ))}
                          </div>
                        </div>

                        {selectedEvent.sponsors.length > 0 && (
                          <div className="mt-2">
                            <p className="text-sm leading-5 text-gray-500">
                              Sponsors:
                            </p>
                            <div className="grid grid-cols-3 gap-4">
                              {selectedEvent.sponsors.map((sponsor, index) => (
                                <img
                                  key={index}
                                  className="object-contain h-48 w-full"
                                  src={sponsor.logo}
                                  alt={sponsor.name}
                                />
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {selectedActivity && (
            <div className="fixed z-10 top-20 bottom-0 left-0 right-0 overflow-y-auto">
              <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                <div className="fixed inset-0 transition-opacity">
                  <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                </div>
                <div
                  className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
                  role="dialog"
                  aria-modal="true"
                  aria-labelledby="modal-headline"
                >
                  <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                    <span className="flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto">
                      <button
                        type="button"
                        className="inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 bg-blue-600 text-base leading-6 font-medium text-white shadow-sm hover:bg-blue-500 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue transition ease-in-out duration-150 sm:text-sm sm:leading-5"
                        onClick={() => handleCloseModalActivity()}
                      >
                        Close
                      </button>
                    </span>
                  </div>
                  <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                    <div className="sm:flex sm:items-start">
                      <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                        <h3
                          className="text-lg leading-6 font-medium text-gray-900"
                          id="modal-headline"
                        >
                          {selectedActivity.title}
                        </h3>
                        <div className="mt-2">
                          <p className="text-sm leading-5 text-gray-500">
                            {selectedActivity.description}
                          </p>
                        </div>
                        <div className="mt-2">
                          <p className="text-sm leading-5 text-gray-500">
                            Abstract: {selectedActivity.abstract}
                          </p>
                        </div>
                        <div className="mt-2">
                          <p className="text-sm leading-5 text-gray-500">
                            Activity Incharge:{" "}
                            {selectedActivity.activityincharge}
                          </p>
                        </div>
                        <div className="mt-2">
                          <p className="text-sm leading-5 text-gray-500">
                            Date: {selectedActivity.date}
                            <br />
                            Days: {selectedActivity.days}
                          </p>
                        </div>
                        <div className="mt-2">
                          <div className="grid grid-cols-3 gap-4">
                            {selectedActivity.images.map((image, index) => (
                              <img
                                key={index}
                                className="object-cover h-48 w-full"
                                src={image.src}
                                alt={image.alt}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </Layout>
    </>
  );
}

export default Projects;
