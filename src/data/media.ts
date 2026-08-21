export type MediaEntity = {
  id: string;
  type: "podcast" | "interview" | "appearance";
  title: string;
  url: string;
  creator: string;
};

export const media: MediaEntity[] = [
  {
    id: "spotify-podcast",
    type: "podcast",
    title: "Spotify podcast appearance",
    url: "https://open.spotify.com/show/033SHyU9h8ewYbibDIUBfL",
    creator: "Leila Razavi"
  }
];
