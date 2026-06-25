import { Plus } from "lucide-react";

export default function DeepDiveIntro() {
  return (
    <div className="flex flex-col items-center my-12 p-8 relative z-10 w-full max-w-3xl mx-auto gap-8">
      {/* Centered Large Text */}
      <h1 className="text-6xl font-extrabold text-center mb-2">
        DeepDive
      </h1>

      {/* Left-aligned Text Paragraphs */}
      <div className="w-full flex flex-col gap-5 text-left text-gray-300 text-lg leading-relaxed">
        <p>
          Welcome to DeepDive, your ultimate playground for
          advanced project exploration and deep technical
          insights. Dive into complex architectures and
          unlock new levels of understanding.
        </p>
        <p>
          Start your journey today. Configure your
          environment, bring in your data, and collaborate
          with your team to build something extraordinary
          from the ground up.
        </p>
      </div>

      {/* Create Project Button */}
      <div className="flex w-full gap-3">
          <button className="flex w-fit  items-center gap-1 mt-6 px-8 py-3 bg-blue-500 hover:bg-blue-600 cursor-pointer text-white font-semibold rounded-xl">
            <Plus size={24} />
            <p>Create Project</p>
          </button>
          <button className="flex w-fit  items-center gap-1 mt-6 px-8 py-3 bg-blue-500 hover:bg-blue-600 cursor-pointer text-white font-semibold rounded-xl">
            <Plus size={24} />
            <p>Create Report</p>
          </button>
          <button className="flex w-fit  items-center gap-1 mt-6 px-8 py-3 bg-blue-500 hover:bg-blue-600 cursor-pointer text-white font-semibold rounded-xl">
            <Plus size={24} />
            <p>Create Slide</p>
          </button>
      </div>
    </div>
  );
}
