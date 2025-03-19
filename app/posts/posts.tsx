// app/posts/posts.tsx
"use client";

import { useQuery } from "@tanstack/react-query";
import { getPosts, getComments } from "../services/postService";

export default function Posts() {
  // 서버에서 미리 가져온 데이터는 클라이언트에서 즉시 사용 가능하며, 더 깊은 하위 컴포넌트에서도 가능합니다.
  const { data: postsData } = useQuery({
    queryKey: ["posts"],
    queryFn: getPosts, // 서버에서 미리 가져온 데이터는 캐시로부터 바로 사용
  });

  // 이 쿼리는 서버에서 미리 페칭되지 않았으므로 클라이언트에서 직접 데이터를 가져옵니다.
  const { data: commentsData } = useQuery({
    queryKey: ["posts-comments"],
    queryFn: getComments, // 클라이언트에서 직접 데이터를 가져오는 함수
  });

  // 여기서 가져온 데이터로 UI를 구성합니다
  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {postsData?.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>

      <h2>Comments</h2>
      <ul>
        {commentsData?.map((comment) => (
          <li key={comment.id}>{comment.content}</li>
        ))}
      </ul>
    </div>
  );
}
