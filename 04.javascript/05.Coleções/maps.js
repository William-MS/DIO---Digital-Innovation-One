
const users = new Map();

users.set('João', 'Admin');
users.set('Lucas', 'Member');
users.set('Ana', 'Member');
users.set('Elisa', 'Admin');

function getAdmins(map) {
    let admins = [];
    for([key, value] of map){
        if(value === 'Admin'){
            admins.push(key);
        }
    }

    return admins;
}

console.log(getAdmins(users));