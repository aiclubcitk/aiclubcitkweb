"use client";
import { useState, useEffect } from "react";
import Layout from "@/components/common/Layout"; // Reuse the existing layout component
import styles from "./page.module.css";

interface Activity {
  id: number;
  title: string;
  description: string;
  images: { src: string; alt: string }[];
  // Add other activity properties if necessary
}

export default function Projects() {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [selectedActivity, setSelectedActivity] = useState<Activity | null>(
    null
  );

  useEffect(() => {
    // Replace with actual data fetching if needed
    const fetchedActivities: Activity[] = []; // Dummy array for example
    setActivities(fetchedActivities.sort((a, b) => b.id - a.id));
  }, []);

  return (
    <Layout>
      <div className={styles.main}>
        {/* Activities Section */}
        <section className="bg-white py-16">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Activities
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Discover our student activities.
            </p>
            <div className="mt-16 grid gap-8 lg:grid-cols-3">
              {activities.map((activity) => (
                <div
                  key={activity.id}
                  className="flex flex-col overflow-hidden rounded-lg shadow-lg"
                  onClick={() => setSelectedActivity(activity)}
                >
                  <img
                    className="object-cover w-full h-48"
                    src={activity.images[0].src}
                    alt={activity.images[0].alt}
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900">
                      {activity.title}
                    </h3>
                    <p className="mt-3 text-gray-500">
                      {activity.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Activity Modal */}
        {selectedActivity && (
          <div className="fixed z-10 inset-0 overflow-y-auto">
            <div className="flex items-center justify-center min-h-screen">
              <div className="fixed inset-0 bg-gray-500 opacity-75"></div>
              <div className="bg-white rounded-lg shadow-xl p-6 z-20">
                <h3 className="text-lg font-bold">{selectedActivity.title}</h3>
                <p className="mt-4">{selectedActivity.description}</p>
                <button
                  onClick={() => setSelectedActivity(null)}
                  className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}
