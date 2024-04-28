import { PostCard } from "./components/PostCard";
import { Profile } from "./components/Profile";
import { HomeContainer, HomeInputContent, HomeSearch } from "./styles";

export function Home(){
    return (
        <HomeContainer>
            <Profile />

            <HomeSearch>
                <div>
                    <h2>Publicações</h2>

                    <span>6 publicações</span>
                </div>
            <HomeInputContent type="text" placeholder="Buscar conteúdo"/>
            </HomeSearch>

            <PostCard />
        </HomeContainer>
    )
}