import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export const useAuthStore = create<AuthStore>()(
  persist(
    (set) => ({
      user: null,
      accessToken: null,
      setAuth: (user, accessToken) => set({ user, accessToken }),
      unsetAuth: () => set({ user: null, accessToken: null }),
    }),
    {
      name: "auth-storage",
      storage: createJSONStorage(() => sessionStorage), // persist 기본값 로컬스토리지
      partialize: (state) => ({
        user: state.user, // user만 세션스토리지에 저장
      }),
    }
  )
);
