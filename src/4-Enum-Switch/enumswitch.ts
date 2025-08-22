enum Role {
  ADMIN = "ADMIN",
  USER = "USER",
  GUEST = "GUEST"
}

function checkRole(role: Role) {
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
