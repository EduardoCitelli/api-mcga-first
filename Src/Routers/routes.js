const MainRoutes = {
  Main: "/",
};

const UserRoutes = {
  Get: "/users",
  GetById: '/users/:id',
  Create: "/users",
  Update: "/users/:id",
  Delete: "/users/:id",
};

module.exports = {
  MainRoutes,
  UserRoutes,
};