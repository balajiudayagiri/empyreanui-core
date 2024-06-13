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

interface User {
  firstName: string;
  lastName: string;
}

export interface PostData {
  user: User;
  componentName: string;
  componentCategory: string;
}

interface PostCodeDialogProps {
  onSubmit: (data: PostData, closeDialog: () => void) => void;
  isLoading: boolean;
}

const PostCodeDialog: React.FC<PostCodeDialogProps> = ({
  onSubmit,
  isLoading,
}) => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [componentName, setComponentName] = useState<string>("");
  const [componentCategory, setComponentCategory] = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleSubmit = () => {
    onSubmit(
      {
        user: {
          firstName,
          lastName,
        },
        componentName,
        componentCategory,
      },
      () => setIsOpen(false)
    );
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button onClick={() => setIsOpen(true)}>Post Code</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogTitle>Post Your Code</DialogTitle>
        <DialogDescription>
          Fill in the details to post your code.
        </DialogDescription>
        <div className="flex flex-col gap-2 mt-4">
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="First Name"
            className="w-full mt-2"
          />
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Last Name"
            className="w-full mt-2"
          />
          <input
            type="text"
            value={componentName}
            onChange={(e) => setComponentName(e.target.value)}
            placeholder="Component Name"
            className="w-full mt-2"
          />
          <input
            type="text"
            value={componentCategory}
            onChange={(e) => setComponentCategory(e.target.value)}
            placeholder="Component Category"
            className="w-full mt-2"
          />
          <Button onClick={handleSubmit} disabled={isLoading} className="mt-4">
            {isLoading ? "Posting..." : "Submit"}
          </Button>
          <DialogClose asChild>
            <Button variant="ghost" className="mt-4">
              Cancel
            </Button>
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PostCodeDialog;
