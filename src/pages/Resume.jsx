import { Loader } from "lucide-react";
import React, { useState, useRef, useEffect } from "react";
import { FaDownload, FaEye } from "react-icons/fa";
import { Document, Page, pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/legacy/build/pdf.worker.min.mjs`;

const Resume = () => {
  const [containerWidth, setContainerWidth] = useState(0);
  const wrapperRef = useRef(null);

  // Resize handler for responsiveness
  useEffect(() => {
    const updateWidth = () => {
      if (wrapperRef.current) {
        setContainerWidth(wrapperRef.current.offsetWidth);
      }
    };

    updateWidth(); // initialize once
    window.addEventListener("resize", updateWidth);

    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  return (
    <section className="min-h-screen bg-gray-200 dark:bg-gray-900 flex flex-col items-center px-6 py-16">
      <div className="max-w-4xl w-full text-center">

        <h1 className="text-4xl font-extrabold text-purple-500 mb-4">
          My Resume
        </h1>

        <p className="text-gray-700 dark:text-gray-300 mb-4 text-lg">
          You can view my professional resume below or download it for offline access.
        </p>

        {/* === Responsive PDF Wrapper === */}
        <div
          ref={wrapperRef}
          className="w-full mb-8 flex justify-center"
        >
          {containerWidth > 0 && (
            <Document
              file="/Resume.pdf"
              loading={<>
                <Loader className="font-bold text-purple-500 animate-spin mx-auto mt-4" />
                <p className="font-bold text-gray-700 dark:text-gray-300">Loading Resume...</p>
              </>}

            >
              <Page
                pageNumber={1}
                renderAnnotationLayer={true}
                renderTextLayer={true}
                width={containerWidth - 60} // responsive width
                scale={1.2} // keep crisp
                className="border border-gray-600"
              />
            </Document>
          )}
        </div>

        {/* Button Row */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/Resume.pdf"
            download
            className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 font-bold dark:text-white border border-purple-600 rounded-lg hover:text-purple-500 hover:bg-transparent transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_3px_rgba(147,51,234,0.8)]"
          >
            <FaDownload /> Download Resume
          </a>

          <a
            href="https://drive.google.com/file/d/1myqfHWS6EkCxX4bzWW_MTaOcE061Y2wH/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-purple-600 font-bold rounded-lg text-purple-600 dark:text-purple-400 hover:bg-purple-600 hover:text-white transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_3px_rgba(147,51,234,0.8)]"
          >
            <FaEye size={20} /> View on Google Drive
          </a>
        </div>

      </div>
    </section>
  );
};

export default Resume;
