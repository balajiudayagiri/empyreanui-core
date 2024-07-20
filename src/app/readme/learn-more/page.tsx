import { Code, Edit, Paperclip } from "lucide-react";
import React from "react";

const Page: React.FC = () => {
  return (
    <div className="pt-16 bg-gradient-to-r from-blue-500 to-blue-700 min-h-screen flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl w-full space-y-16 text-white">
        <header className="text-center h-[40dvh] flex flex-col justify-center items-center">
          <h1 className="text-5xl font-extrabold sm:text-6xl lg:text-7xl">
            README Editor Tool
          </h1>
          <p className="mt-6 text-lg sm:text-xl max-w-2xl">
            Create, edit, and preview your README files in real-time with ease.
          </p>
        </header>
        <main className="space-y-12">
          <section className="flex flex-col items-center bg-white bg-opacity-20 backdrop-blur-md rounded-lg p-8 shadow-lg">
            <h2 className="text-3xl font-bold mb-6">
              How to Use the README Editor Tool
            </h2>
            <div className="space-y-8 text-gray-900 w-full">
              <StepCard
                icon={<Edit size={40} className="text-blue-600 mb-4" />}
                title="Live Editing"
                content="Start typing in the editor to see a live preview of your README on the right side of the screen. Adjust your content as you type and see changes in real-time."
              />
              <StepCard
                icon={<Code size={40} className="text-blue-600 mb-4" />}
                title="Add Snippets"
                content="Click the menu icon to open the snippet selection panel. Select any snippet to add it to your README quickly, such as acknowledgements, API references, and more."
              />
              <StepCard
                icon={<Paperclip size={40} className="text-blue-600 mb-4" />}
                title="Post as Blog"
                content='Once you are satisfied with your README, click "Post this as a blog" to submit it. Fill in the required details, and your README will be shared as a blog post.'
              />
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

interface StepCardProps {
  icon: React.ReactNode;
  title: string;
  content: string;
}

const StepCard: React.FC<StepCardProps> = ({ icon, title, content }) => (
  <div className="bg-white bg-opacity-75 p-6 rounded-lg shadow-md flex items-center space-x-4">
    <div>{icon}</div>
    <div>
      <h3 className="text-2xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-700">{content}</p>
    </div>
  </div>
);

export default Page;
