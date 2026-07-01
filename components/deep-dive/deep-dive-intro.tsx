import { Files, FileSearch, Plus } from "lucide-react";
import Image from "next/image";

export default function DeepDiveIntro() {
  return (
    <section className="flex flex-col relative z-10 w-full max-w-5xl mx-auto gap-8">
      <h1 className="text-4xl font-extrabold custom-text mb-2">
        DeepDive
      </h1>

      <div className="flex gap-3">
        <div className="w-full flex flex-col gap-5 custom-text">
          <p className="text-2xl">
            We can generate briefings from various file
            formats, and support multi-file content
            summarization along with report and presentation
            slide document creation.
          </p>
          <p>
            When attaching files, please ensure they do not
            violate laws or infringe on third-party
            rights(intellectual property, personal
            information, portrait rights, etc).
          </p>
          <p className="text-sm">
            Click "Choose File" to upload, or drag and drop.
            Allowed file types: pdf, txt, doc, docx, md, pptx,
            mht, eml. FIle number limit: 50. File size limit:
            pdf, doc, docx, pptx 30MB/ txt, md 3MB / mht, eml
            10MB
          </p>
        </div>
          <div>
            <Files size={250} className="text-slate-400 dark:text-gray-500" />
          </div>

      </div>

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
    </section>
  );
}
