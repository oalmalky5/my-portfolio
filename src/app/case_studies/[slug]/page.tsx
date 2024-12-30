import { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import { CaseStudyMeta, getAllCaseStudies } from '../../../data/caseStudies';

interface CaseStudyPageProps {
  params: { slug: string };
}

// Function to generate metadata for SEO
export async function generateMetadata({
  params,
}: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = params;
  console.log(`Generating metadata for slug: ${slug}`);

  // Path to the Markdown file
  const markdownPath = path.join(
    process.cwd(),
    'content',
    'case-studies',
    `${slug}.md`
  );
  console.log(`Markdown path: ${markdownPath}`);

  // Check if the Markdown file exists
  if (!fs.existsSync(markdownPath)) {
    console.log(`Markdown file does not exist at path: ${markdownPath}`);
    return {};
  }

  // Read the Markdown file
  const fileContents = fs.readFileSync(markdownPath, 'utf8');
  console.log(`Markdown file read successfully.`);

  // Parse front matter
  const matterResult = matter(fileContents);
  console.log(`Front matter parsed:`, matterResult.data);

  return {
    title: `${matterResult.data.title} | Omar AlMalky`,
    description: matterResult.data.description,
    // Add more meta tags as needed
  };
}

const CaseStudyPage = async ({ params }: CaseStudyPageProps) => {
  const { slug } = params;
  console.log(`Rendering case study for slug: ${slug}`);

  // Path to the Markdown file
  const markdownPath = path.join(
    process.cwd(),
    'content',
    'case-studies',
    `${slug}.md`
  );
  console.log(`Markdown path: ${markdownPath}`);

  // Check if the Markdown file exists
  if (!fs.existsSync(markdownPath)) {
    console.log(`Markdown file does not exist at path: ${markdownPath}`);
    notFound();
  }

  // Read the Markdown file
  const fileContents = fs.readFileSync(markdownPath, 'utf8');
  console.log(`Markdown file read successfully.`);

  // Parse front matter
  const matterResult = matter(fileContents);
  console.log(`Front matter parsed:`, matterResult.data);

  // Convert Markdown to HTML
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();
  console.log(`Markdown content converted to HTML.`);

  const meta: CaseStudyMeta = {
    slug: slug,
    title: matterResult.data.title,
    date: matterResult.data.date,
    image: matterResult.data.image,
    description: matterResult.data.description,
  };

  return (
    <div className="bg-gray-900 text-gray-200 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto bg-gray-800 shadow-lg rounded-lg overflow-hidden">
        {/* Header Section */}
        <div className="relative h-80 w-full">
          <Image
            src={meta.image}
            alt={`Case Study: ${meta.title}`}
            fill
            style={{ objectFit: 'cover' }}
            className="object-center"
          />
          <div className="absolute inset-0 bg-black opacity-40"></div>
          <h1 className="absolute bottom-4 left-4 text-4xl font-bold text-white">
            {meta.title}
          </h1>
        </div>

        {/* Breadcrumbs */}
        <div className="px-8 py-4">
          <nav className="text-gray-400 text-sm mb-4">
            <a href="/" className="hover:underline">
              Home
            </a>{' '}
            /{' '}
            <a href="/case-studies" className="hover:underline">
              Case Studies
            </a>{' '}
            / <span>{meta.title}</span>
          </nav>

          {/* Content Section */}
          <div
            className="prose prose-lg prose-gray dark:prose-invert"
            dangerouslySetInnerHTML={{ __html: contentHtml }}
          />
        </div>

        {/* Back to Portfolio Button */}
        <div className="px-8 py-4">
          <a
            href="/"
            className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded transition-colors duration-300"
          >
            &larr; Back to Portfolio
          </a>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyPage;

// Generate static params
export async function generateStaticParams() {
  const caseStudies = getAllCaseStudies();
  console.log(
    'Generating static params for case studies:',
    caseStudies.map((cs) => cs.slug)
  );
  return caseStudies.map((cs) => ({
    slug: cs.slug,
  }));
}
