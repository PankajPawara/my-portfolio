import React from "react";
import CertificateCard from "../components/CertificateCard";

const Certificates = () => {
  const courses = [
    {
      title: "AWS Academy Graduate",
      issuer: "AWS Academy Cloud Foundations",
      duration: "20 Hours",
      img:"https://github.com/PankajPawara/Assets/blob/main/aws.png?raw=true",
      from: "26 May 2025",
      to: "15 June 2025",
      mode: "Online",
      issuedDate: "16 June 2025",
      url: "https://drive.google.com/file/d/1DOLNzLyFatBcgJ8lzOibd-WaUyeq56By/view?usp=drive_link",
      proof: "https://www.credly.com/badges/9e80e035-e92e-48bf-a111-5c5ef24e8a23/print",
      badge: "https://images.credly.com/size/680x680/images/e3541a0c-dd4a-4820-8052-5001006efc85/blob",
    },
    {
      title: "Python Programming",
      issuer: "Besant Technologies, Chennai",
      duration: "2 Months",
      img:"https://github.com/PankajPawara/Assets/blob/main/python.png?raw=true",
      from: "18 October 2024",
      to: "23 December 2024",
      mode: "Online",
      issuedDate: "27 December 2024",
      url: "https://drive.google.com/file/d/1OkwlTB46AU3XvCyfGX2gsuNjfWIGPY0n/view?usp=drive_link",
    },
    {
      title: "Java Full Stack Development",
      issuer: "Symbiosis Skills & Professional University, Pune",
      duration: "3 Months",
      img:"https://github.com/PankajPawara/Assets/blob/main/java.png?raw=true",
      to: "23 November 2024",
      mode: "Offline",
      issuedDate: "27 November 2024",
      url: "https://drive.google.com/file/d/1fbv8tDL_r10ERxxxBXO8cJtcOAnuCEp1/view?usp=drive_link",
    },
    {
      title: "Android & iOS App Development",
      issuer: "Infotech Incorporate, Dhule",
      duration: "2 Months",
      from: "January 2022",
      img:"https://github.com/PankajPawara/Assets/blob/main/android.png?raw=true",
      to: "February 2022",
      mode: "Offline",
      issuedDate: "10 February 2022",
      url: "https://drive.google.com/file/d/1ufQi9T8y4EKSEFiLP3tcb3QtxPYcwjab/view?usp=drive_link",
    },
    {
      title: "PHP Course",
      issuer: "Sololearn",
      duration: "1 Month",
      img:"https://github.com/PankajPawara/Assets/blob/main/php.png?raw=true",
      from: "January 2022",
      to: "February 2022",
      mode: "Offline",
      issuedDate: "22 February 2022",
      url: "https://drive.google.com/file/d/1ZsQyo70kigzGR0k4LaHwerN9zYk-oarX/view?usp=drive_link",
    },
  ]
  const participations = [
    {
      title: "All India NCAT 2025",
      issuer: "Naukri Campus",
      duration: "1 Day",
      img:"https://github.com/PankajPawara/Assets/blob/main/ncat.png?raw=true",
      from: "30 May 2025",
      to: "30 May 2025",
      mode: "Offline",
      issuedDate: "30 May 2025",
      url: "https://drive.google.com/file/d/173aDf9oc9eOI5R5F7u7iYggL9rgS2qD7/view?usp=drive_link",
    },
    {
      title: "Aavishkar 2025",
      issuer: "Dr. Babasaheb Ambedkar Technological University, Lonere",
      duration: "1 Day",
      img:"https://github.com/PankajPawara/Assets/blob/main/aavishkar.png?raw=true",
      from: "26 October 2024",
      to: "26 October 2024",
      mode: "Offline",
      issuedDate: "26 October 2024",
      url: "https://drive.google.com/file/d/1crYPBrFnBKxJlIhlChInaUzo2B6oaxIp/view?usp=drive_link",
    },
    {
      title: "Flipkart Grid 6.0 Software Development Track",
      issuer: "Flipkart",
      duration: "1.5 Months",
      img:"https://github.com/PankajPawara/Assets/blob/main/flipkart.png?raw=true",
      from: "10 August 2024",
      to: "30 September 2024",
      mode: "Online",
      issuedDate: "27 August 2024",
      url: "https://drive.google.com/file/d/1CLXwWRfVx0kvfzuU7geHzJm2zeRxhj0_/view?usp=drive_link",
    },
    {
      title: "AI For Students: Build Your Own Generative AI Model",
      issuer: "NXT Wave",
      duration: "2 hours",
      img:"https://github.com/PankajPawara/Assets/blob/main/nxtwave.png?raw=true",
      from: "13 March 2024",
      to: "13 March 2024",
      mode: "Online",
      issuedDate: "27 August 2024",
      url: "https://drive.google.com/file/d/1G5Fcwoxd2VnUKrzNmdaRV1-kEK-PteD6/view?usp=drive_link",
    },
  ]
  return (
    <section className="max-w-6xl mx-auto px-6 py-16 mb-24">
      <h1 className="text-4xl font-extrabold text-center text-purple-500 mb-10">
        Certificates
      </h1>

      {/* Courses */}
      <div>
        <h2 className="text-2xl font-bold text-purple-500 mb-4">
          Courses:
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
          {courses.map((c, i) => (
            <CertificateCard key={i} item={c} />
          ))}
        </div>
      </div>
      <hr className="my-8 border-gray-700" />

      {/* Participations */}
      <div>
        <h2 className="text-2xl font-bold text-purple-500 mb-4">
          Participations:
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {participations.map((p, i) => (
            <CertificateCard key={i} item={p} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
