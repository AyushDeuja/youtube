import React from "react";
import { CommentsList } from "./Comment";

const commentData = [
  {
    name: "Ayush Deuja",
    text: "Lorem ipsum dolor sit amet consectetur adip",
    replies: [
      {
        name: "Ayush Deuja",
        text: "Lorem ipsum dolor sit amet consectetur adip",
        replies: [
          {
            name: "Ayush Deuja",
            text: "Lorem ipsum dolor sit amet consectetur adip",
            replies: [
              {
                name: "Ayush Deuja",
                text: "Lorem ipsum dolor sit amet consectetur adip",
                replies: [
                  {
                    name: "Ayush Deuja",
                    text: "Lorem ipsum dolor sit amet consectetur adip",
                    replies: [
                      {
                        name: "Ayush Deuja",
                        text: "Lorem ipsum dolor sit amet consectetur adip",
                        replies: [
                          {
                            name: "Ayush Deuja",
                            text: "Lorem ipsum dolor sit amet consectetur adip",
                            replies: [],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Ayush Deuja",
    text: "Lorem ipsum dolor sit amet consectetur adip",
    replies: [],
  },
  {
    name: "Ayush Deuja",
    text: "Lorem ipsum dolor sit amet consectetur adip",
    replies: [],
  },
  {
    name: "Ayush Deuja",
    text: "Lorem ipsum dolor sit amet consectetur adip",
    replies: [],
  },
  {
    name: "Ayush Deuja",
    text: "Lorem ipsum dolor sit amet consectetur adip",
    replies: [],
  },
  {
    name: "Ayush Deuja",
    text: "Lorem ipsum dolor sit amet consectetur adip",
    replies: [],
  },
  {
    name: "Ayush Deuja",
    text: "Lorem ipsum dolor sit amet consectetur adip",
    replies: [],
  },
];

const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold">Comments:</h1>
      <CommentsList comments={commentData} />
    </div>
  );
};

export default CommentsContainer;
