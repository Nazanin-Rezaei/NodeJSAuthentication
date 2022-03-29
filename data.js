
const ROLE ={
    ADMIN: "admin",
    BASIC: "basic"
}

module.exports ={
    ROLE:ROLE,
    users:[
        { id:1, name:"kyle", role: ROLE.ADMIN },
        { id:2, name:"sally", role: ROLE.BASIC },
        { id:3, name:"Joe", role: ROLE.BASIC }
    ],
    projects:[
        { id:1, name:"Kyle's Project", userId:1 },
        { id:2, name:"Sally's Project", userId:2 },
        { id:3, name:"Joe's project", userId:3}
    ]
}