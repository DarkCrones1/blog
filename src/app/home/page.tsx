"use client";

import PostComponent from "@/components/postComponent";
import { APIResponse } from "@/dtos/response/ApiResponse";
import { PostResponseDto } from "@/dtos/response/PostResponseDto";
import { GetPost } from "@/lib/Post/getPost";
import { useEffect, useState } from "react";

export default function PostPage() {
  const [postData, setPostData] = useState<APIResponse<PostResponseDto[]>>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const post = await GetPost();
        setPostData(post);
      } catch (error) {
        console.error("Error al obtener la información:", error);
      }
    };

    fetchData();
  }, []);

  if (!postData || !postData.Data) {
    return <div>Loading...</div>;
  }

  const { Data, Message, Meta } = postData;

  return (
    <div>
      {Data.map((data) => (
        <PostComponent data={data} meta={Meta} />
      ))}
    </div>
  );
}
