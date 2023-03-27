const users = [
    {
        username: "Jose",
        password: "1234"
    },
    {
        username: "Rocío",
        password: "1234"
    },
    {
        username: "Ana",
        password: "1234"
    },
    {
        username: "Miriam",
        password: "1234"
    },
    {
        username: "Jorge",
        password: "1234"
    },
    {
        username: "Raquel",
        password: "1234"
    },
    {
        username: "Alejandro",
        password: "1234"
    },
    {
        username: "Raquel",
        password: "1234"
    }
   
]

export const login = ({username, password}) => {
    const user = users.find(
        (user) => user.username === username && user.password === password
    );
    if (user === undefined) throw new Error();
    return user;
        
}