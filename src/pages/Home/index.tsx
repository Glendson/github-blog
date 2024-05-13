import { useContext } from "react";
import { PostCard } from "./components/PostCard";
import { Profile } from "./components/Profile";
import { HomeContainer, HomeSearch, PostContainer } from "./styles";
import { BlogContext } from "../../contexts/BlogContext";
import { Search } from "./components/Search";


export function Home() {
  const { issuesData } = useContext(BlogContext);


  if (!issuesData) {
    return <div>Carregando...</div>;
  }

  return (
    <HomeContainer>
      <Profile />

      <HomeSearch>
        <div>
          <h2>Publicações</h2>

          <span>{issuesData.length} publicações</span>
        </div>

        <Search
          type="text"
          placeholder="Buscar conteúdo"          
        />
      </HomeSearch>
      <PostContainer>
        {issuesData.map((issue) => {
          return (
            <PostCard
              number={issue.number}
              key={issue.number}
              title={issue.title}
              date={issue.created_at}
              body={issue.body}
            />
          );
        })}
      </PostContainer>
    </HomeContainer>
  );
}
