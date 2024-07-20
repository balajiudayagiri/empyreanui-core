"use client";
import React, { useState } from "react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "empyreanui/components/ui/dialog";
import { Button } from "empyreanui/components/ui/button";
import { Loader } from "lucide-react";
import { Input } from "empyreanui/components/ui/input";
import { Label } from "@radix-ui/react-select";
import { Textarea } from "empyreanui/components/ui/textarea";

interface User {
  firstName: string;
  lastName: string;
}

export interface PostData {
  user: User;
  componentName: string;
  componentCategory: string;
  description: string;
}

interface PostCodeDialogProps {
  onSubmit: (data: PostData, closeDialog: () => void) => void;
  isLoading: boolean;
  disabled?: boolean;
}

const PostCodeDialog: React.FC<PostCodeDialogProps> = ({
  onSubmit,
  isLoading,
  disabled,
}) => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [componentName, setComponentName] = useState<string>("");
  const [componentCategory, setComponentCategory] = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [description, setDescription] = useState<string>("");
  const handleSubmit = () => {
    onSubmit(
      {
        user: {
          firstName,
          lastName,
        },
        componentName,
        componentCategory,
        description,
      },
      () => setIsOpen(false)
    );
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild disabled={disabled}>
        <Button disabled={disabled} onClick={() => setIsOpen(true)}>
          Post Code
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogTitle>Post Your Code</DialogTitle>
        <DialogDescription>
          Fill in the details to post your code.
        </DialogDescription>
        <form name="post-code-form" className="flex flex-col gap-2 mt-4">
          <Input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="First Name"
            className="w-full mt-2"
          />
          <Input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Last Name"
            className="w-full mt-2"
          />
          <Input
            type="text"
            value={componentName}
            onChange={(e) => setComponentName(e.target.value)}
            placeholder="Component Name"
            className="w-full mt-2"
          />
          <Input
            type="text"
            value={componentCategory}
            onChange={(e) => setComponentCategory(e.target.value)}
            placeholder="Component Category"
            className="w-full mt-2"
          />
          <label htmlFor="Description">Description</label>
          <Textarea
            id="Description"
            placeholder="Type your description here."
            onChange={(e) => setDescription(e.target.value)}
          />
          <Button onClick={handleSubmit} disabled={isLoading} className="mt-4">
            {isLoading ? (
              <span className="flex items-center gap-2">
                <Loader className="animate-spin" size={16} />
                <span>Posting...</span>
              </span>
            ) : (
              "Submit"
            )}
          </Button>
          <DialogClose asChild>
            <Button variant="ghost" className="mt-4">
              Cancel
            </Button>
          </DialogClose>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default PostCodeDialog;
