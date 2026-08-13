import { readFile } from "node:fs/promises";
import path from "node:path";
import { marked } from "marked";

interface LegalPageProps {
  fileName: string;
}

export default async function LegalPage({ fileName }: LegalPageProps) {
  const filePath = path.join(process.cwd(), "src", "content", "legal", fileName);
  const markdown = await readFile(filePath, "utf8");
  const html = await marked.parse(markdown);

  return (
    <section className="bg-brand-base-2 px-5 py-16 sm:py-24">
      <article
        className="legal-content mx-auto max-w-[820px] bg-white px-6 py-10 shadow-sm sm:px-12 sm:py-14"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </section>
  );
}