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

export interface IssueData {
  url: string;
  body: string;
  title: string;
  number: number;
  comments: string;
  html_url: string;
  created_at: string;
}

interface BlogContextType {
  userData: UserData;
  issuesData: IssueData[];
  searchIssues: (text: string) => IssueData[];
  loadIssuesData: (query?: string) => Promise<void>;
}

export const BlogContext = createContext({} as BlogContextType);

interface BlogProviderProps {
  children: ReactNode;
}

export function BlogProvider({ children }: BlogProviderProps) {
  const [userData, setUserData] = useState<UserData>({} as UserData);
  const [issuesData, setIssuesData] = useState<IssueData[]>([]);

  async function loadUserData() {
    const response = await api.get<UserData>("/users/Glendson");
    setUserData(response.data);
  }

  async function loadIssuesData(query?: string) {
    const response = await api.get<IssueData[]>(
      "/repos/Glendson/github-blog/issues",
      {
        params: {
          q: query,
        },
      }
    );
    setIssuesData(response.data);
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
