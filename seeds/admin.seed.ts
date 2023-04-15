import UserRole from "../schemas/role.schema";
import User from "../schemas/user.schema";

export const addAdmin = () => {
  UserRole.findOne({ role: "ADMIN" })
    .then((r) => {
      const adminData = {
        firstname: "Audioactr",
        lastname: "Admin",
        password: "test1234",
        email: "audioactr@mail.com",
        userRole: r?._id,
      };

      const admin = new User(adminData);
      admin
        .save()
        .then((doc) => {
          console.log(doc);
        })
        .catch((err) => {
          console.log(err);
        });
    })
    .catch((err) => {
      console.log("Cannot find admin role id");
    });
};
