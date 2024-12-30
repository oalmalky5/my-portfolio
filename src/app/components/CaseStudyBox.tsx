// src/app/components/CaseStudyBox.tsx

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { CaseStudyMeta } from '../../data/caseStudies';

const CaseStudyBox: React.FC<CaseStudyMeta> = ({
  slug,
  title,
  image,
  description,
}) => {
  return (
    <div className="max-w-sm w-full rounded-lg overflow-hidden shadow-lg border border-gray-700 bg-dark-theme-element transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 m-8">
      <div className="relative h-64 m-4">
        <Image
          src={image}
          alt={`Case Study: ${title}`}
          fill
          style={{ objectFit: 'cover' }}
          className="rounded-lg"
        />
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-300 text-base mb-4">{description}</p>
        <div className="flex justify-end">
          <Link
            href={`/case_studies/${slug}`}
            className="text-lightPaige hover:text-darkerPagie font-bold py-2 px-4 rounded"
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyBox;
