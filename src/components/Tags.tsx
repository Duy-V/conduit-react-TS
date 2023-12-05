import { Chip, Skeleton } from "@nextui-org/react";
import { useTags } from "../hooks/useTags";
import { useTagsStore } from "../stores/tags";

function Tags() {
  const { data, isLoading } = useTags();
  const selectedTags = useTagsStore((state) => state.selectedTags);

  const setSelectedTags = useTagsStore((state) => state.setSelectedTags);
  return (
    <div className="w-1/4 bg-white rounded-lg shadow-md p-6 self-start">
      <h2 className="text-lg font-bold text-gray-700 mb-4">Popular Tags</h2>
      <div className="flex flex-wrap -m-1">
        {isLoading ? (
          <div className="flex-gap-2">
            <Skeleton className="flex w-12 h-6" />
            <Skeleton className="flex w-12 h-6" />
            <Skeleton className="flex w-12 h-6" />
          </div>
        ) : (
          data &&
          data?.map((tag: string) => (
            <Chip
              key={tag}
              variant={selectedTags.includes(tag) ? "solid":"dot"}
              onClick={() => setSelectedTags(tag)}
              className="m-1 text-sm text-green-500 bg-green-100 hover:bg-green-200 rounded-full px-2 py-1"
            >
              {tag}
            </Chip>
          ))
        )}
      </div>
    </div>
  );
}

export default Tags;
