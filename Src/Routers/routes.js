const MainRoutes = {
  Main: "/",
};

const UserRoutes = {
  Get: "/users",
  GetById: '/users/getById/:id',
  Create: "/users/create",
  Update: "/users/update/:id",
  Delete: "/users/delete/:id",
};

module.exports = {
  MainRoutes,
  UserRoutes,
};