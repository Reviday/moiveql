const reviday = {
    name: "reviday",
    age: 27,
    gender: "female"
}

const resolvers = {
    Query: {
        person: () => reviday 
    }
}

export default resolvers;