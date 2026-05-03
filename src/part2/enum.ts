// type UserRoles = "admin" | "user" | "editor";

enum UserRoles {
    Admin = "Admin",
    User = "User",
    Editor = "Editor"
}


const canEdit = (role: UserRoles) => {
    if (role === UserRoles.Admin || role === UserRoles.Editor) {
        return true;
    }
    return false
}


const isEditPermissable = canEdit(UserRoles.Admin);
console.log(isEditPermissable);






