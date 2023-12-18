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
  artist: string[];
  isPlaying: boolean;
  songUrl: string;
  title: string;
}
