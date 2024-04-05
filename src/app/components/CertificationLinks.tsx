import { FaCertificate, FaGoogle, FaFileDownload } from 'react-icons/fa';

const webDev =
  'https://drive.google.com/file/d/15FDGO5QSAbApHhrMBKRhux7PqvAdmUfj/view';
const dataAnalysis =
  'https://drive.google.com/file/d/1RzsFJKZTXe1GhY7QbGtEDokgJ4Y6Hrxz/view';
const resume =
  'https://drive.google.com/file/d/1ZzPI5tdbXKxNq2mSxJagehOJ3ijbyEb2/view?usp=sharing';

const CertificationLinks: React.FC = () => {
  return (
    <div className="flex border p-4 rounded-lg justify-between items-center hover:shadow-md mb-6">
      <a
        href={webDev}
        className="flex items-center space-x-2 hover:text-red-900"
        target="_blank"
      >
        <FaCertificate className="text-red-600" />
        <span>Web Development Certification</span>
      </a>

      <span className="border-l border-gray-300 mx-0 h-6 align-center"></span>

      <a
        href={dataAnalysis}
        className="flex items-center space-x-2 hover:text-blue-700"
        target="_blank"
      >
        <FaGoogle className="text-blue-600" />
        <span>Data Analysis Certification</span>
      </a>

      <span className="border-l border-gray-300 mx-1 h-6 align-center"></span>

      <a
        href={resume}
        download
        className="flex items-center space-x-2 hover:text-gray-700"
        target="_blank"
      >
        <FaFileDownload className="text-gray-600" />
        <span>View Resume</span>
      </a>
    </div>
  );
};
export default CertificationLinks;
