import { cookies } from "next/headers";

const baseUrl =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/v1";

export const getCookie = async (name: string): Promise<string | undefined> => {
  const cookieStore = await cookies();
  return cookieStore.get(name)?.value;
};

export const setCookie = async (name: string, value: string) => {
  const cookieStore = await cookies();
  cookieStore.set(name, value, {
    httpOnly: true,
    secure: false,
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 30, // 30 days
    path: "/",
  });
};

export const deleteCookie = async (name: string) => {
  const cookieStore = await cookies();
  cookieStore.delete(name);
};

const serverFetchHelper = async (
  endpoint: string,
  options: RequestInit
): Promise<Response> => {
  const { headers, ...restOptions } = options;
  const accessToken = await getCookie("accessToken");

  const isFormData = restOptions.body instanceof FormData;

  const response = await fetch(`${baseUrl}${endpoint}`, {
    headers: {
      Authorization: accessToken || "",
      ...(isFormData ? {} : { "Content-Type": "application/json" }),
      ...headers,
    },
    cache: "no-store",
    ...restOptions,
  });
  return response;
};

export const serverFetch = {
  get: async (endpoint: string, options?: RequestInit): Promise<Response> =>
    serverFetchHelper(endpoint, { ...options, method: "GET" }),
  post: async (endpoint: string, options?: RequestInit): Promise<Response> =>
    serverFetchHelper(endpoint, { ...options, method: "POST" }),
  patch: async (endpoint: string, options: RequestInit): Promise<Response> =>
    serverFetchHelper(endpoint, { ...options, method: "PATCH" }),
  put: async (endpoint: string, options: RequestInit): Promise<Response> =>
    serverFetchHelper(endpoint, { ...options, method: "PUT" }),
  delete: async (endpoint: string, options?: RequestInit): Promise<Response> =>
    serverFetchHelper(endpoint, { ...options, method: "DELETE" }),
};
