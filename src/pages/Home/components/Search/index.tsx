import { InputHTMLAttributes, useContext } from "react";
import { SearchFormContainer } from "./styles";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { BlogContext } from "../../../../contexts/BlogContext";

const searchFormSchema = z.object({
  issue: z.string(),
});

type SearchFormInput = z.infer<typeof searchFormSchema>;

interface SearchProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
}

export function Search({ placeholder }: SearchProps) {

  const { register, handleSubmit } = useForm<SearchFormInput>({
    resolver: zodResolver(searchFormSchema),
  });

  const { loadIssuesData } = useContext(BlogContext);

  async function handleSearchIssues(data: SearchFormInput) {
    await loadIssuesData(data.issue);
  }

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchIssues)}>
      <input placeholder={placeholder} {...register("issue")} />
    </SearchFormContainer>
  );
}
