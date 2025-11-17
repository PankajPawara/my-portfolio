import React, {useState} from "react";
import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/legacy/build/pdf.worker.min.mjs`;

const Resume = () => {
  const [numPages, setNumPages] = useState(null);

  return (
    <section className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center px-6 py-16">
      <div className="max-w-4xl w-full text-center">
        {/* Heading */}
        <h1 className="text-4xl font-extrabold text-center text-purple-600 dark:text-purple-500 mb-4">
          My Resume
        </h1>

        {/* Resume Info */}
        <p className="text-gray-300 mb-4 text-lg">
          You can view my professional resume below or download it for offline access.
        </p>

        {/* <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden mb-8"> */}
          {/* Resume Preview */}
        <div className="rounded-lg shadow-lg mb-8 flex justify-center">
          <Document
            file="/Resume.pdf"
            loading={<p className="text-white">Loading Resume...</p>}
            onLoadSuccess={({ numPages }) => setNumPages(numPages)}
          >
            <Page
              pageNumber={1}
              renderAnnotationLayer={false}
              renderTextLayer={false}
              className="pdf-page border border-gray-700"
              width={window.innerWidth > 768 ? 650 : window.innerWidth - 40}
            />
          </Document>
        </div>
        {/* </div> */}

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/Resume.pdf"
            download
            className="px-6 py-3 bg-purple-600 text-white border border-purple-600 rounded-lg hover:bg-transparent transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_3px_rgba(147,51,234,0.8)]"
          >
            Download Resume
          </a>
          <a
            href="https://drive.google.com/your-resume-link" // optional public link
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border border-purple-600 rounded-lg text-purple-600 dark:text-purple-400 hover:bg-purple-600 hover:text-white transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_3px_rgba(147,51,234,0.8)]"
          >
            View on Google Drive
          </a>
        </div>
      </div>
    </section>
  );
};

export default Resume;
