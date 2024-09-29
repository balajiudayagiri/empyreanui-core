"use client";
import React, { useContext, useState, useEffect } from "react";
import { UserContext } from "empyreanui/Providers/user-provider";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "empyreanui/components/ui/card";
import { Avatar, AvatarFallback } from "empyreanui/components/ui/avatar";
import { Badge } from "empyreanui/components/ui/badge";
import { getAvatarInitials } from "empyreanui/utils";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "empyreanui/components/ui/sheet";
import { Button } from "empyreanui/components/ui/button";
import { History } from "lucide-react";
import ProfileDetailsLoading from "./profile-loader";

const ProfileDetails = () => {
  const { user } = useContext(UserContext);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      if (user) {
        setLoading(false);
      }
    } catch (err) {
      setError("An error occurred while fetching the user data.");
      setLoading(false);
    }
  }, [user]);

  if (loading) return <ProfileDetailsLoading />;

  if (error) {
    return (
      <div className="flex justify-center items-center h-full">
        <div className="text-red-600 font-semibold">{error}</div>
      </div>
    );
  }

  if (!user) return <div>No user data available</div>;

  const fullName = `${user?.firstname || ""} ${user?.lastname || ""}`;
  const avatar1 = getAvatarInitials(user?.firstname || "U");
  const avatar2 = getAvatarInitials(user?.lastname || "N");

  return (
    <div className="max-w-4xl mx-auto p-4">
      {/* Profile Card */}
      <Card className="shadow-lg rounded-lg bg-card p-4 relative">
        <Sheet>
          <SheetTrigger asChild>
            <Button className="flex items-center space-x-2 absolute right-4 top-4 bg-transparent hover:bg-primary/20">
              <History className="w-5 h-5 text-primary" />
            </Button>
          </SheetTrigger>
          <SheetContent className="w-96 bg-card">
            <h2 className="text-xl text-primary font-semibold mb-4">
              User Activity Logs
            </h2>
            <ul className="space-y-4 p-4 h-[calc(100dvh-71px)] overflow-y-scroll">
              {user?.user_logs?.length > 0 ? (
                user.user_logs.map((log: any) => (
                  <li
                    key={log._id}
                    className="flex items-center justify-between p-3 bg-card-foreground/10 rounded-lg">
                    <div>
                      <h4 className="font-semibold text-primary">
                        {log.event || "Event"}
                      </h4>
                      <p className="text-sm text-gray-500">
                        {log.description || "No description available"}
                      </p>
                    </div>
                    <span className="text-xs text-gray-400">
                      {log.time
                        ? new Date(log.time).toLocaleString()
                        : "Time not available"}
                    </span>
                  </li>
                ))
              ) : (
                <li className="text-gray-500 dark:text-gray-400">
                  No activity logs available.
                </li>
              )}
            </ul>
          </SheetContent>
        </Sheet>
        <CardHeader className="flex flex-col items-center space-y-4">
          <Avatar className="w-24 h-24">
            <AvatarFallback>
              {avatar1}
              {avatar2}
            </AvatarFallback>
          </Avatar>
          <div className="text-center">
            <CardTitle className="text-2xl mb-2 font-bold text-primary">
              {fullName}
            </CardTitle>
            <CardDescription className="text-primary/60">
              {user?.email || "Email not available"}
            </CardDescription>
          </div>
        </CardHeader>

        {/* Profile Details */}
        <CardContent className="bg-card-foreground/20 rounded-md pt-3">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <h3 className="font-semibold text-lg">Username</h3>
              <p className="text-gray-700 dark:text-gray-300">
                {user?.username || "N/A"}
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold text-lg">Total Blogs</h3>
              <p className="text-gray-700 dark:text-gray-300">
                {user?.blog_ids?.length || 0}
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold text-lg">Total Components</h3>
              <p className="text-gray-700 dark:text-gray-300">
                {user?.component_ids?.length || 0}
                {/* {user?.component_ids || null} */}
              </p>
            </div>
          </div>
        </CardContent>
        {user?.is_verified && (
          <Badge className="bg-green-500 text-white text-xs absolute -top-3 left-3 px-3 py-1 rounded-md">
            Verified User
          </Badge>
        )}
      </Card>
    </div>
  );
};

export default ProfileDetails;
