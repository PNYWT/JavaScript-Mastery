var Role;
(function (Role) {
    Role["ADMIN"] = "ADMIN";
    Role["USER"] = "USER";
    Role["GUEST"] = "GUEST";
})(Role || (Role = {}));
function checkRole(role) {
    switch (role) {
        case Role.ADMIN:
            console.log("Full access");
            break;
        case Role.USER:
            console.log("Limited access");
            break;
        case Role.GUEST:
            console.log("Guest only");
            break;
    }
}
checkRole(Role.USER); // Limited access
export {};
//# sourceMappingURL=enumswitch.js.map