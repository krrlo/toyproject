import UserLayout from "../views/UserTemplate.vue";
import UserMain from "../views/user/UserMain.vue";

export default {
  path: "/",
  name: "user",
  redirect: "home",
  component: UserLayout,
  children: [
    {
      path: "home",
      name: "userHome",
      component: UserMain,
    },
  ],
};
