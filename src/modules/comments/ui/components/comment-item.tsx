interface CommentItemProps {
  comment: any;
}

export const CommentItem = ({ comment }: CommentItemProps) => {
  return <div>{comment.value}</div>;
};
