import ProfileDetails from "kodebloxui/customComponents/profilepage/ProfileDetails";
import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "User Profile - KodeBlox UI",
  description:
    "View and manage your profile, activity logs, blogs, and settings on the KodeBlox UI platform.",
  keywords: [
    "User Profile",
    "KodeBlox UI",
    "Settings",
    "Activity Logs",
    "Dashboard",
  ],
  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return (
    <div className="pt-16 h-dvh">
      <ProfileDetails />
    </div>
  );
}
