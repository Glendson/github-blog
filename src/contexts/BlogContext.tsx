import { ReactNode, createContext, useEffect, useState } from "react";
import { api } from "../lib/axios";

export interface UserData {
  bio: string;
  name: string;
  login: string;
  company: string;
  html_url: string;
  followers: string;
  avatar_url: string;
}

export interface IssuesData {
  url: string;
  body: string;
  title: string;
  number: number;
  comments: string[];
  html_url: string;
  created_at: string;
  user: {
    login: string;
    html_url: string;
  };
}

interface ApiResponse {
  total_count: number;
  incomplete_results: boolean;
  items: IssuesData[];
}


interface BlogContextType {
  userData: UserData;
  issuesData: IssuesData[];
  searchIssues: (text: string) => IssuesData[];
  loadIssuesData: (query?: string) => Promise<void>;
}

export const BlogContext = createContext({} as BlogContextType);

interface BlogProviderProps {
  children: ReactNode;
}

export function BlogProvider({ children }: BlogProviderProps) {
  const [userData, setUserData] = useState<UserData>({} as UserData);
  const [issuesData, setIssuesData] = useState<IssuesData[]>([]);

  async function loadUserData() {
    const response = await api.get<UserData>("/users/Glendson");
    setUserData(response.data);
  }

  async function loadIssuesData(query?: string) {
    try {
      let response;
      if (query) {
        response = await api.get<ApiResponse>(
          `/search/issues?q=${query}%20repo:Glendson/github-blog`
        );
        setIssuesData(response.data.items);
      } else {
        response = await api.get<IssuesData[]>(
          "/repos/Glendson/github-blog/issues"
        );
        setIssuesData(response.data);
      }
      console.log(response.data)
    } catch (error) {
      console.error("Error loading issues:", error);
    }
  }
  

  useEffect(() => {
    loadUserData();
    loadIssuesData();
  }, []);

  function searchIssues(text: string) {
    return issuesData.filter((issue) =>
      issue.title.toLowerCase().includes(text.toLowerCase())
    );
  }

  return (
    <BlogContext.Provider
      value={{ userData, issuesData, searchIssues, loadIssuesData }}
    >
      {children}
    </BlogContext.Provider>
  );
}
