import { create } from 'zustand';

interface CommentSidebarStore {
  threadsSidebarTarget: HTMLElement | null;
  setThreadsSidebarTarget: (el: HTMLElement | null) => void;
  filter: 'open' | 'resolved';
  setFilter: (filter: 'open' | 'resolved') => void;
}

export const useCommentSidebarStore = create<CommentSidebarStore>((set) => ({
  threadsSidebarTarget: null,
  setThreadsSidebarTarget: (threadsSidebarTarget) => {
    set(() => ({ threadsSidebarTarget }));
  },
  filter: 'open',
  setFilter: (filter) => set(() => ({ filter })),
}));
