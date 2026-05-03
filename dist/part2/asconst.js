"use strict";
// type UserRoles = "admin" | "user" | "editor";
// better virsion of enum is asconst
Object.defineProperty(exports, "__esModule", { value: true });
// enum UserRoles {
//     Admin = "Admin",
//     User = "User",
//     Editor = "Editor"
// }
const UserRoles = {
    Admin: "Admin",
    User: "User",
    Editor: "Editor"
};
const canEdit = (role) => {
    if (role === UserRoles.Admin || role === UserRoles.Editor) {
        return true;
    }
    return false;
};
const isEditPermissable = canEdit(UserRoles.Admin);
console.log(isEditPermissable);
//# sourceMappingURL=asconst.js.map