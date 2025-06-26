"use client";
import React, { useContext, useState, useEffect } from "react";
import { UserContext } from "kodebloxui/Providers/user-provider";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "kodebloxui/components/ui/card";
import { Avatar, AvatarFallback } from "kodebloxui/components/ui/avatar";
import { Badge } from "kodebloxui/components/ui/badge";
import { getAvatarInitials } from "kodebloxui/utils";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "kodebloxui/components/ui/sheet";
import { Button } from "kodebloxui/components/ui/button";
import { History } from "lucide-react";
import ProfileDetailsLoading from "./profile-loader";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "kodebloxui/components/ui/accordion";
import ProfileDataListing from "./ProfileDataListing";
import BlogsDataListing from "./BlogsDataListing";

const ProfileDetails = () => {
  const { user } = useContext(UserContext);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user) {
      setLoading(false);
    } else {
      setError("Failed to fetch user data.");
      setLoading(false);
    }
  }, [user]);

  if (loading) return <ProfileDetailsLoading />;

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-[50vh]">
        <p className="text-red-500 font-semibold">{error}</p>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="text-center text-gray-500">No user data available</div>
    );
  }

  const fullName = `${user.firstname || ""} ${user.lastname || ""}`;
  const avatar1 = getAvatarInitials(user.firstname || "U");
  const avatar2 = getAvatarInitials(user.lastname || "N");

  return (
    <div className="max-w-4xl mx-auto p-8 space-y-10">
      {/* Profile Card */}
      <ProfileCard
        fullName={fullName}
        avatar1={avatar1}
        avatar2={avatar2}
        email={user.email}
        username={user.username}
        isVerified={user.is_verified}
        logs={user.user_logs}
      />
    </div>
  );
};

// Profile Card Component
const ProfileCard = ({
  fullName,
  avatar1,
  avatar2,
  email,
  username,
  isVerified,
  logs,
}: {
  fullName: string;
  avatar1: string;
  avatar2: string;
  email: string;
  username: string;
  isVerified: boolean;
  logs: any[];
}) => {
  return (
    <Card className="relative shadow-xl rounded-2xl bg-card p-8 hover:shadow-2xl transition-transform duration-300 hover:scale-105">
      {/* Activity Logs Button */}
      <ActivityLogs logs={logs} />

      <CardHeader className="flex flex-col items-center space-y-6">
        <Avatar className="w-24 h-24 ring-4 ring-primary/20 rounded-full">
          <AvatarFallback>
            {avatar1}
            {avatar2}
          </AvatarFallback>
        </Avatar>
        <div className="text-center space-y-2">
          <CardTitle className="text-3xl font-bold text-primary">
            {fullName}
          </CardTitle>
          <CardDescription className="text-muted-foreground text-lg">
            {email}
          </CardDescription>
          <CardDescription className="text-muted-foreground">
            {username}
          </CardDescription>
        </div>
      </CardHeader>

      {isVerified && (
        <Badge className="absolute -top-4 left-4 bg-green-500 text-white text-xs px-3 py-1 rounded-full shadow-lg">
          Verified
        </Badge>
      )}
    </Card>
  );
};

// Activity Logs Sheet Component
const ActivityLogs = ({ logs }: { logs: any[] }) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          className="absolute right-6 top-6 bg-transparent hover:bg-primary/10 p-2 rounded-full transition duration-300"
          aria-label="View Activity Logs">
          <History className="w-6 h-6 text-primary" />
        </Button>
      </SheetTrigger>
      <SheetContent className="w-96 bg-card shadow-2xl rounded-lg p-6">
        <h2 className="text-2xl font-semibold text-primary mb-4">
          Activity Logs
        </h2>
        <ul className="space-y-4 overflow-y-auto max-h-72">
          {logs?.length > 0 ? (
            logs.map((log) => (
              <li
                key={log._id}
                className="flex justify-between items-center p-4 bg-gray-100 rounded-lg shadow-sm">
                <div>
                  <h4 className="font-semibold text-primary">
                    {log.event || "Event"}
                  </h4>
                  <p className="text-sm text-gray-600">
                    {log.description || "No description"}
                  </p>
                </div>
                <span className="text-xs text-gray-500">
                  {log.time
                    ? new Date(log.time).toLocaleString()
                    : "No time available"}
                </span>
              </li>
            ))
          ) : (
            <li className="text-gray-500">No activity logs available.</li>
          )}
        </ul>
      </SheetContent>
    </Sheet>
  );
};

export default ProfileDetails;
