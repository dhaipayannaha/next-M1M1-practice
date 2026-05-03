// type UserRoles = "admin" | "user" | "editor";
// better virsion of enum is asconst

// enum UserRoles {
//     Admin = "Admin",
//     User = "User",
//     Editor = "Editor"
// }




const UserRoles = {
    Admin: "Admin",
    User: "User",
    Editor: "Editor"
} as const;

const canEdit = (role: typeof UserRoles[keyof typeof UserRoles]) => {
    if (role === UserRoles.Admin || role === UserRoles.Editor) {
        return true;
    }
    return false
}


const isEditPermissable = canEdit(UserRoles.Admin);
console.log(isEditPermissable);






