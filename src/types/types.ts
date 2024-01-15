export interface ProjectDataTypes {
  title: string;
  subtitle: string;
  year: number;
  tags: string[];
  image: {
    alt: string;
  };
}

export interface CurrentlyPlayingItem {
  albumImageUrl: string;
  albumName: string;
  albumType: "album" | "single" | "compilation";
  artist: string[];
  isPlaying: boolean;
  songUrl: string;
  title: string;
}
