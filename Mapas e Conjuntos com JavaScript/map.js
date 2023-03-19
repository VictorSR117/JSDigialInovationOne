getAdmins = map => {
    let admins = [];
    for ([key, value] of map) if (value === "Admin") admins.push(key);
    return admins;
}

const users = new Map();

users.set("Luiz", "Admin");
users.set("Fernando", "User");
users.set("Jorge", "Admin");
users.set("Roberto", "Admin");

console.log(getAdmins(users));

//versão sem otimização
// getAdmins = (map) => {
//     let admins = [];
//     for ([key, value] of map) {
//         if (value === "Admin") {
//             admins.push(key);
//         }
//     }
//     return admins;
// }

// const users = new Map();

// users.set("Luiz", "Admin");
// users.set("Fernando", "User");
// users.set("Jorge", "Admin");
// users.set("Roberto", "Admin");

// console.log(getAdmins(users));