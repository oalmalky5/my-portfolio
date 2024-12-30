// src/app/components/CaseStudies.tsx

import React from 'react';
import CaseStudyBox from './CaseStudyBox';
import { getAllCaseStudies, CaseStudyMeta } from '../../data/caseStudies';

const CaseStudies: React.FC = () => {
  const caseStudies: CaseStudyMeta[] = getAllCaseStudies();

  return (
    <div
      className="bg-dark-theme text-white py-8 m-24 mx-auto max-w-7xl"
      id="case-studies"
    >
      <h2 className="text-6xl font-semibold mb-8">
        <span className="text-darkerPagie">02.</span> Case Studies
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {caseStudies.map((caseStudy) => (
          <CaseStudyBox key={caseStudy.slug} {...caseStudy} />
        ))}
      </div>
    </div>
  );
};

export default CaseStudies;
