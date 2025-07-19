import fs from "fs";
import path from "path";

const apiUrl =
  "https://opbento.edgexhq.tech/api/bento?n=Ayush&g=ayyush08&x=Ayush29081&l=ayush2908&i=https%3A%2F%2Fres.cloudinary.com%2Fcurator-cloud%2Fimage%2Fupload%2Fv1752815258%2Fzdfz6qf7ayigdhwxsmvu.jpg&p=ayyush08.vercel.app&z=5bbdb";

interface BentoResponse {
  url: string;
}

const fetchBentoUrl = async (apiUrl: string): Promise<string> => {
  const response = await fetch(apiUrl);
  if (!response.ok) throw new Error(`HTTP error: ${response.status}`);
  const data = (await response.json()) as BentoResponse;
  return data.url;
};

const updateReadme = async () => {
  const newImageUrl = await fetchBentoUrl(apiUrl);

  const readmePath = path.join(process.cwd(), "README.md");
  let content = fs.readFileSync(readmePath, "utf-8");

  // Replace existing image markdown with new URL
  content = content.replace(
    /!\[OP Bento\]\(.*?\)/,
    `![OP Bento](${newImageUrl})`
  );

  fs.writeFileSync(readmePath, content);
};

updateReadme().catch((err) => {
  console.error("Failed to update README:", err);
  process.exit(1);
});
