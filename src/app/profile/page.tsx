import ProfileDataListing from "empyreanui/customComponents/profilepage/ProfileDataListing";
import ProfileDetails from "empyreanui/customComponents/profilepage/ProfileDetails";
import React from "react";

function page() {
  return (
    <div className="pt-16 h-dvh">
      <ProfileDetails />
      <ProfileDataListing />
    </div>
  );
}

export default page;
