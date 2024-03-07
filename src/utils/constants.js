const GOOGLE_AUTH_KEY = "AIzaSyCWrV8nmatIh_c6So94zlmqYjFslxJvGnk";

export const GET_YOUTUBE_VIDEO_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  GOOGLE_AUTH_KEY;

export const SEARCH_LIST_YOUTUBE_API =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const STATIC_COMMENTS = [
  {
    id: 1,
    author: "John Doe",
    content: "This video is really informative. I learned a lot!",
    likes: 10,
    replies: [
      {
        id: 11,
        author: "Alice Smith",
        content: "I agree! The explanations were clear and easy to follow.",
        likes: 5,
        replies: [
          {
            id: 111,
            author: "Bob Johnson",
            content:
              "I had a question about the third point. Could you clarify?",
            likes: 2,
            replies: [],
          },
          {
            id: 112,
            author: "Emily Brown",
            content: "Sure! The third point discusses...",
            likes: 3,
            replies: [
              {
                id: 1121,
                author: "Michael Davis",
                content: "Thanks for explaining!",
                likes: 1,
                replies: [],
              },
            ],
          },
        ],
      },
      {
        id: 12,
        author: "David Wilson",
        content: "I found the visuals in this video really helpful.",
        likes: 3,
        replies: [],
      },
    ],
  },
  {
    id: 2,
    author: "Emma Taylor",
    content: "The content covered in this video is exactly what I needed.",
    likes: 7,
    replies: [
      {
        id: 21,
        author: "Daniel Martinez",
        content: "I agree! It's very relevant and well-presented.",
        likes: 4,
        replies: [],
      },
    ],
  },
  {
    id: 3,
    author: "Sophia Anderson",
    content:
      "I enjoyed watching this video. Looking forward to more content from you!",
    likes: 15,
    replies: [
      {
        id: 31,
        author: "James Thompson",
        content: "Agreed! Keep up the great work!",
        likes: 8,
        replies: [
          {
            id: 311,
            author: "Olivia Garcia",
            content: "This video helped me a lot with my project. Thank you!",
            likes: 6,
            replies: [],
          },
        ],
      },
      {
        id: 32,
        author: "William Moore",
        content: "I had a question about the fourth point in the video...",
        likes: 9,
        replies: [],
      },
    ],
  },
];
