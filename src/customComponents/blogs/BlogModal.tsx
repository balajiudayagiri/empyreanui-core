import React, {
  ReactNode,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "kodebloxui/components/ui/dialog";
import { Button } from "kodebloxui/components/ui/button";
import { Loader } from "lucide-react";
import { Input } from "kodebloxui/components/ui/input";
import { Textarea } from "kodebloxui/components/ui/textarea";
import { Blog } from "./Blogtypes";
import { UserContext } from "kodebloxui/Providers/user-provider";

interface PostBlogDialogProps {
  onSubmit: (data: Blog, closeDialog: () => void) => void;
  isLoading: boolean;
  disabled?: boolean;
  children?: ReactNode;
}

const PostBlogDialog: React.FC<PostBlogDialogProps> = ({
  onSubmit,
  isLoading,
  disabled,
  children,
}) => {
  const { user, userToken, setModalInfo } = useContext(UserContext);
  const clickRef = useRef(false);
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [thumbnail, setThumbnail] = useState<string>("");
  const [isThumbnailValid, setIsThumbnailValid] = useState<boolean>(true);
  const btnRef = useRef<HTMLButtonElement | null>(null);

  const handleThumbnailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const base64 = e.target.value;
    setThumbnail(base64);
    setIsThumbnailValid(isValidBase64(base64));
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const base64 = await convertToBase64(file);
      setThumbnail(base64 as string);
      setIsThumbnailValid(isValidBase64(base64 as string));
    }
  };

  const convertToBase64 = (
    file: File
  ): Promise<string | ArrayBuffer | null> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  const isValidBase64 = (str: string) => {
    const base64Regex =
      /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/;
    const base64ImageRegex =
      /^data:image\/(png|jpg|jpeg|gif);base64,(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/;

    return base64Regex.test(str) || base64ImageRegex.test(str);
  };

  const handleSubmit = () => {
    if (isThumbnailValid) {
      onSubmit(
        {
          title,
          content,
          author: `${firstName} ${lastName}`,
          thumbnail,
        },
        () => setIsOpen(false)
      );
    }
  };

  const handlePostBTN = () => {
    clickRef.current = true;
    if (userToken) {
      setIsOpen(true);
    } else {
      setModalInfo({ isOpen: true, modalName: "SIGNIN_MODAL" });
    }
  };

  useEffect(() => {
    if (clickRef.current && Object.keys(user)?.length !== 0) {
      btnRef?.current?.click();
    }

    setFirstName(user?.firstname ?? "");
    setLastName(user?.lastname ?? "");
  }, [user]);

  if (!userToken) {
    return (
      <Button
        onClick={handlePostBTN}
        className="fixed z-50 top-16 right-4 font-bold rounded shadow-md hover:shadow-lg transition duration-300"
        disabled={disabled}>
        Post Code
      </Button>
    );
  }
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild disabled={disabled}>
        {children ? (
          <span
            className="fixed z-50 top-16 right-4 font-bold rounded shadow-md hover:shadow-lg transition duration-300"
            onClick={() => setIsOpen(true)}
            ref={btnRef}>
            {children}
          </span>
        ) : (
          <Button
            disabled={disabled}
            ref={btnRef}
            onClick={() => setIsOpen(true)}
            className="fixed z-50 top-16 right-4 font-bold py-2 px-4 rounded shadow-md hover:shadow-lg transition duration-300">
            Post Blog
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="max-w-lg mx-auto p-6 rounded-lg shadow-lg">
        <DialogTitle className="text-2xl font-bold mb-2">
          Post Your Blog
        </DialogTitle>
        <DialogDescription className=" mb-4">
          Fill in the details to post your code.
        </DialogDescription>
        <form name="blog-post" className="flex flex-col gap-3">
          <div className="flex gap-3">
            <div className="flex-1">
              <label className="required text-sm font-semibold">
                First Name <span className="text-red-500">*</span>
              </label>
              <Input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="First Name"
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div className="flex-1">
              <label className="required text-sm font-semibold">
                Last Name <span className="text-red-500">*</span>
              </label>
              <Input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Last Name"
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
          </div>
          <label className="required text-sm font-semibold">
            Title <span className="text-red-500">*</span>
          </label>
          <Input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <label className="required text-sm font-semibold">
            Description <span className="text-red-500">*</span>
          </label>
          <Textarea
            id="Description"
            placeholder="Type your description here."
            onChange={(e) => setContent(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 h-24"
          />
          <label className="text-sm font-semibold">
            Thumbnail (base64, optional)
          </label>
          <Input
            type="text"
            value={thumbnail}
            onChange={handleThumbnailChange}
            placeholder="Thumbnail (base64)"
            className={`w-full p-2 border ${
              !isThumbnailValid ? "border-red-500" : "border-gray-300"
            } rounded focus:outline-none focus:ring-2 ${
              isThumbnailValid ? "focus:ring-blue-400" : "focus:ring-red-500"
            }`}
          />
          {!isThumbnailValid && (
            <span className="text-red-500 text-xs">
              Please enter a valid base64 string.
            </span>
          )}
          <label className="text-sm font-semibold">Or Upload Image</label>
          <Input
            type="file"
            onChange={handleFileUpload}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <Button
            onClick={handleSubmit}
            disabled={isLoading}
            className="mt-4  font-bold py-2 px-4 rounded shadow-md hover:shadow-lg transition duration-300">
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
            <Button variant="ghost" className="mt-2">
              Cancel
            </Button>
          </DialogClose>
        </form>
      </DialogContent>
      <style jsx>{`
        .required label::after {
          content: "*";
          color: red;
          margin-left: 0.25rem;
        }
      `}</style>
    </Dialog>
  );
};

export default PostBlogDialog;
