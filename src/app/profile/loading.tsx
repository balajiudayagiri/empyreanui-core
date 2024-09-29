"use client";
import React from "react";
import { Card, CardContent, CardHeader } from "empyreanui/components/ui/card";
import { Skeleton } from "empyreanui/components/ui/skeleton";

const ProfileDetailsLoading = () => {
  return (
    <div className="max-w-4xl mx-auto p-4">
      {/* Profile Card Skeleton */}
      <Card className="shadow-lg rounded-lg bg-white dark:bg-gray-900 border dark:border-gray-800 p-4">
        <CardHeader className="flex flex-col items-center space-y-4">
          <Skeleton className="w-24 h-24 rounded-full" />{" "}
          {/* Avatar Skeleton */}
          <Skeleton className="w-32 h-6 rounded" /> {/* Full Name Skeleton */}
          <Skeleton className="w-48 h-4 rounded" /> {/* Email Skeleton */}
          <Skeleton className="w-24 h-6 rounded" /> {/* Role Badge Skeleton */}
          <Skeleton className="w-24 h-6 rounded" />{" "}
          {/* Verified Badge Skeleton */}
        </CardHeader>

        {/* Profile Details Skeleton */}
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Skeleton className="w-20 h-4 rounded" /> {/* Label */}
              <Skeleton className="w-full h-4 rounded" /> {/* Value */}
            </div>
            <div className="space-y-2">
              <Skeleton className="w-20 h-4 rounded" /> {/* Label */}
              <Skeleton className="w-full h-4 rounded" /> {/* Value */}
            </div>
            <div className="space-y-2">
              <Skeleton className="w-20 h-4 rounded" /> {/* Label */}
              <Skeleton className="w-full h-4 rounded" /> {/* Value */}
            </div>
            <div className="space-y-2">
              <Skeleton className="w-20 h-4 rounded" /> {/* Label */}
              <Skeleton className="w-full h-4 rounded" /> {/* Value */}
            </div>
            <div className="space-y-2">
              <Skeleton className="w-20 h-4 rounded" /> {/* Label */}
              <Skeleton className="w-full h-4 rounded" /> {/* Value */}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Logs Button Skeleton */}
      <div className="mt-8">
        <Skeleton className="w-48 h-10 rounded" /> {/* Logs Button */}
      </div>
    </div>
  );
};

export default ProfileDetailsLoading;
