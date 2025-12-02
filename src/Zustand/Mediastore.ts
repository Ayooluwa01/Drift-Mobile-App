import { create } from "zustand";

interface MediaState {
  images: any[];
  videos: any[];
  audios: any[];
  setImages: (items: any[]) => void;
  setVideos: (items: any[]) => void;
  setAudios: (items: any[]) => void;
}

export const useMediaStore = create<MediaState>((set: any) => ({
  images: [],
  videos: [],
  audios: [],
  setImages: (items: any) => set({ images: items }),
  setVideos: (items: any) => set({ videos: items }),
  setAudios: (items: any) => set({ audios: items }),
}));
