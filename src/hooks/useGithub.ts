import { useState, useEffect } from "react";
import axios from "axios";

interface UserData {
  id: number;
  bio: string;
  name: string;
  login: string;
  company: string;
  html_url: string;
  followers: number;
  following: number;
  avatar_url: string;
}

interface IssueData {
  id: number;
  body: string;
  user: UserData;
  title: string;
  state: "open" | "closed";
  number: number;
  comments: number;
  closed_at: string | null;
  created_at: string;
  updated_at: string;
}

export function useGithubAPI(): {
  userData: UserData | null;
  issuesData: IssueData[];
} {
  const [userData, setUserData] = useState<UserData | null>(null);
  const [issuesData, setIssuesData] = useState<IssueData[]>([]);

  useEffect(() => {
    axios
      .get<UserData>("https://api.github.com/users/Glendson")
      .then((response) => {
        setUserData(response.data);
      })
      .catch((error) => {
        console.error("Erro ao buscar os dados do usuário:", error);
      });

    axios
      .get<IssueData[]>(
        "https://api.github.com/repos/Glendson/github-blog/issues"
      )
      .then((response) => {
        setIssuesData(response.data);
      })
      .catch((error) => {
        console.error("Erro ao buscar as issues do repositório:", error);
      });
  }, []);

  return { userData, issuesData };
}
