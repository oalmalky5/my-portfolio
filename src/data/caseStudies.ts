// src/data/caseStudies.ts

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface CaseStudyMeta {
  slug: string;
  title: string;
  date: string;
  image: string;
  description: string;
}

// Function to retrieve all case studies
export function getAllCaseStudies(): CaseStudyMeta[] {
  const contentDir = path.join(process.cwd(), 'content', 'case-studies');
  const files = fs.readdirSync(contentDir);

  return files.map((file) => {
    const filePath = path.join(contentDir, file);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const matterResult = matter(fileContents);
    return {
      slug: matterResult.data.slug,
      title: matterResult.data.title,
      date: matterResult.data.date,
      image: matterResult.data.image,
      description: matterResult.data.description,
    };
  });
}
