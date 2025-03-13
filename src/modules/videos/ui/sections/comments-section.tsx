"use client";

import { trpc } from "@/trpc/client";

interface CommentsSectionProps {
  videoId: string;
}

export const CommentsSection = ({ videoId }: CommentsSectionProps) => {
  const [comments] = trpc.comments.getMany.useSuspenseQuery({
    videoId,
  });
  return <div>{JSON.stringify(comments)}</div>;
};
