import CardItem from "./Card";
import { TArticle } from "../types/article";
import { useArticles } from "../hooks/useArticles";
import { Pagination } from "@nextui-org/react";
import { useState } from "react";
import { useTagsStore } from "../stores/tags";

const CardList = () => {
  const [page, setPage] = useState(1);
  const tags = useTagsStore((store) => store.tags)
  const { data = {} } = useArticles({
    page:page,
    limit:2,
    tags
  });
  const { articles = [], metadata = {} } = data;
  const total = Math.ceil(metadata.total / metadata.limit) ?? 1;

  return (
    <div className="flex flex-col">
      <div className="border-l-4 border-green-400 pl-4 mb-4">
        <h2 className="text-lg font-bold text-gray-700">Global Feed</h2>
      </div>
      {articles?.map((article: TArticle, index: number) => (
        <CardItem key={index} article={article} />
      ))}{" "}
      <Pagination showControls boundaries={2} page={page} total={total} onChange={setPage} />
    </div>
  );
};

export default CardList;
