import { defineStore } from "pinia";

interface UserState {
  userInfo: Record<string, any> | null;
  isLogin: boolean;
}

export const useUserStore = defineStore("user", {
  state: (): UserState => ({
    userInfo: null,
    isLogin: false,
  }),
  actions: {
    setUserInfo(info: Record<string, any>) {
      this.userInfo = info;
    },
    logout() {
      this.userInfo = null;
      this.isLogin = false;
    },
  },
});
