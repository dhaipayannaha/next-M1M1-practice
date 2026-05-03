"use strict";
// type UserRoles = "admin" | "user" | "editor";
Object.defineProperty(exports, "__esModule", { value: true });
var UserRoles;
(function (UserRoles) {
    UserRoles["Admin"] = "Admin";
    UserRoles["User"] = "User";
    UserRoles["Editor"] = "Editor";
})(UserRoles || (UserRoles = {}));
const canEdit = (role) => {
    if (role === UserRoles.Admin || role === UserRoles.Editor) {
        return true;
    }
    return false;
};
const isEditPermissable = canEdit(UserRoles.Admin);
console.log(isEditPermissable);
//# sourceMappingURL=enum.js.map