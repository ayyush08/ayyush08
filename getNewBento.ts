const apiUrl = "https://opbento.edgexhq.tech/api/bento?n=Ayush&g=ayyush08&x=Ayush29081&l=ayush2908&i=https%3A%2F%2Fres.cloudinary.com%2Fcurator-cloud%2Fimage%2Fupload%2Fv1752815258%2Fzdfz6qf7ayigdhwxsmvu.jpg&p=ayyush08.vercel.app&z=5bbdb";
interface BentoResponse {
  url: string;
}

const fetchBentoUrl = async (apiUrl: string): Promise<string> => {
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data: BentoResponse = (await response.json()) as BentoResponse;
    return data.url;
  } catch (error) {
    console.error("Error fetching Bento URL:", error);
    throw error;
  }
};

// @ts-ignore
fetchBentoUrl(apiUrl);
