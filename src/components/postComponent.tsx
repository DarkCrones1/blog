import { useEffect, useState } from "react";
import { APIResponse, Meta } from "../dtos/response/ApiResponse";
import { PostResponseDto } from "../dtos/response/PostResponseDto";
import { GetCommentary } from "../lib/Commentary/getCommentary";
import { formatDate } from "../utils/formatDate";
import { CommentaryResponseDto } from "../dtos/response/CommentaryResponseDto";

export default function PostComponent({
  data,
  meta,
}: {
  data: PostResponseDto;
  meta: Meta;
}) {
  const date = formatDate(data.PublicationDate);

  const [commentaryData, setCommentaryData] =
    useState<APIResponse<CommentaryResponseDto[]>>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const commentary = await GetCommentary(
          `Commentary?PostId=${data.Id}&IsDeleted=false&PageSize=3`
        );
        setCommentaryData(commentary);
      } catch (error) {
        console.error("Error al obtener la información:", error);
      }
    };

    fetchData();
  }, []);

  if (!commentaryData || !commentaryData.Data) {
    return <div>Loading...</div>;
  }

  const { Data, Meta } = commentaryData;

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-8/12 p-4 bg-white border border-black rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
        <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-ss-lg md:border-e dark:bg-gray-800 dark:border-gray-700">
          <h1 className="mb-4 text-3xl">{data.Name}</h1>
          <figcaption className="flex items-center justify-center ">
            <img
              className="rounded-full w-9 h-9"
              src={data.UserInfoProfilePictureUrl}
              alt="imagen de perfil"
              width={50}
              height={50}
            />
            <div className="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3">
              <h4 className="">{data.UserInfoName}</h4>
              <p className="">{date}</p>
            </div>
          </figcaption>
        </figure>
        <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 md:rounded-se-lg dark:bg-gray-800 dark:border-gray-700">
          <img
            src={data.ImagePostUrl}
            alt="imagen de post"
            className="img-fluid"
            style={{ maxWidth: "25%" }}
          />
          <blockquote>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              {data.Description}
            </h3>
            <p className="my-4 flex justify-end">
              {Meta.TotalCount} comentarios
            </p>
            <div className="w-screen max-w-md p-4 bg-white border border-black rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
              <div className="flex items-center justify-between mb-4">
                <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
                  Comentarios
                </h5>
                <a
                  href="#"
                  className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
                >
                  Ver mas comentarios
                </a>
              </div>
              <div className="flow-root">
                <ul
                  role="list"
                  className="divide-y divide-gray-200 dark:divide-gray-700"
                >
                  {Data.map((coment) => (
                    <li className="py-3 sm:py-4">
                      <div className="flex items-center pb-3">
                        <div className="flex-shrink-0">
                          <img
                            className="rounded-full w-9 h-9"
                            src={data.UserInfoProfilePictureUrl}
                            alt="imagen de perfil"
                            width={50}
                            height={50}
                          />
                        </div>
                        <div className="flex-1 min-w-0 ms-4">
                          <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                            {coment.UserInfoName}
                          </p>
                          <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                            {coment.Description}
                          </p>
                        </div>
                        <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                          {}
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </blockquote>
        </figure>
      </div>
    </div>
  );
}
