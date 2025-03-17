import { create } from "zustand"
import type { News } from "./types"

interface NewsStore {
  selectedNews: News | null
  setSelectedNews: (news: News) => void
}

export const useNewsStore = create<NewsStore>((set) => ({
  selectedNews: null,
  setSelectedNews: (news) => set({ selectedNews: news }),
}))

