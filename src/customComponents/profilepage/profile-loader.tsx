"use client";
import React from "react";
import { Card, CardContent, CardHeader } from "empyreanui/components/ui/card";
import { Skeleton } from "empyreanui/components/ui/skeleton";
import { Button } from "empyreanui/components/ui/button";
import { History } from "lucide-react";

const ProfileDetailsLoading = () => {
  return (
    <div className="max-w-4xl mx-auto p-4">
      {/* Profile Card */}
      <Card className="shadow-lg rounded-lg bg-card p-4 relative">
        {/* Skeleton for Activity Logs Button */}
        <Button className="flex items-center space-x-2 absolute right-4 top-4 bg-transparent hover:bg-primary/20">
          <History className="w-5 h-5 text-primary" />
        </Button>

        <CardHeader className="flex flex-col items-center space-y-4">
          {/* Avatar Skeleton */}
          <Skeleton className="w-24 h-24 rounded-full" />{" "}
          {/* Circular skeleton for avatar */}
          {/* Full Name Skeleton */}
          <Skeleton className="w-32 h-6 rounded" />{" "}
          {/* Skeleton for full name */}
          {/* Email Skeleton */}
          <Skeleton className="w-48 h-4 rounded" /> {/* Skeleton for email */}
          {/* Badge Skeleton */}
          <Skeleton className="w-24 h-6 rounded" />{" "}
          {/* Skeleton for verified badge */}
        </CardHeader>

        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Skeletons for Profile Details */}
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
    </div>
  );
};

export default ProfileDetailsLoading;
