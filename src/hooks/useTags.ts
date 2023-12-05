import { useQuery } from "@tanstack/react-query";
import { getTagsAPI } from "../services/tags";

export const useTags = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["tags"],
    queryFn: () => getTagsAPI(),
    // queryFn: async () => {
    //   const response = await axiosClient.get("/tags");
    //   return response.data.tags;
    // },
  });

  return {
    data: data || [],
    isLoading,
  };
};
