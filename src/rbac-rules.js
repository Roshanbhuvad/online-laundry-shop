const rules = {
  user: {
    static: ["nearby:list", "home-page:visit"]
  },
  store: {
    static: [
      "profile:list",
      "posts:create",
      "users:getSelf",
      "home-page:visit",
      "dashboard-page:visit"
    ],
    dynamic: {
      "posts:edit": ({userId, postOwnerId}) => {
        if (!userId || !postOwnerId) return false;
        return userId === postOwnerId;
      }
    }
  },
  admin: {
    static: [
      "allstores:list",
      "allusers:create",
      "allstores:edit",
      "allstores:delete",
      "allusers:get",
      "allusers:getSelf",
      "home-page:visit",
      "dashboard-page:visit"
    ]
  }
};

export default rules;