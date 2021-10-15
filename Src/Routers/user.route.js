const { UserRoutes } = require("./routes");
const { validateEntity, validateParameter } = require("./../middlewares/index");
const { userSchema, userIdSchema } = require("./../schemas/index");
const { userController } = require("./../controllers/index");
const userRouter = require("express").Router();

userRouter.get(UserRoutes.Get, userController.getAll);

userRouter.get(
  UserRoutes.GetById,
  validateParameter(userIdSchema),
  userController.getOne
);

userRouter.post(
  UserRoutes.Create,
  validateEntity(userSchema),
  userController.create
);

userRouter.put(
  UserRoutes.Update,
  validateEntity(userSchema),
  validateParameter(userIdSchema),
  userController.update
);

userRouter.delete(
  UserRoutes.Delete,
  validateParameter(userIdSchema),
  userController.delete
);

module.exports = {
  userRouter,
};