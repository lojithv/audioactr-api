import UserRole from "../schemas/role.schema";

export const addUserRoles = () => {
    const userRoles = [
        "ADMIN",
        "USER"
    ];

    userRoles.forEach((r)=>{
        const role = new UserRole({role:r});
        role.save().then((doc)=>{
            console.log(doc)
        }).catch((err:any)=>{
            console.log(err)
        })
    })
}