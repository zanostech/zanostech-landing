const baseUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5001/v1";

// Generic fetcher for public data.
// We use next: { revalidate: 60 } to cache the data for 60 seconds.
// This ensures fast page loads while keeping data relatively fresh.
export const fetchPublicData = async <T>(endpoint: string): Promise<T | null> => {
  try {
    const res = await fetch(`${baseUrl}${endpoint}`, {
      next: { revalidate: 60 },
    });
    
    if (!res.ok) {
      console.error(`Failed to fetch ${endpoint}: ${res.statusText}`);
      return null;
    }

    const data = await res.json();
    return data.data; // Assuming backend returns { success: true, data: [...] }
  } catch (error) {
    console.error(`Error fetching ${endpoint}:`, error);
    return null;
  }
};

export const getServices = async () => fetchPublicData<any[]>("/services");
export const getFaqs = async () => fetchPublicData<any[]>("/faqs");
export const getProjects = async () => fetchPublicData<any[]>("/projects");
export const getClients = async () => fetchPublicData<any[]>("/clients");
export const getReviews = async () => fetchPublicData<any[]>("/reviews");
export const getTeamMembers = async () => fetchPublicData<any[]>("/team-members");
export const getPosts = async () => fetchPublicData<any[]>("/posts");

export const submitInquiry = async (data: any) => {
  try {
    const res = await fetch(`${baseUrl}/inquiries`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return res.ok;
  } catch (error) {
    console.error("Error submitting inquiry:", error);
    return false;
  }
};
