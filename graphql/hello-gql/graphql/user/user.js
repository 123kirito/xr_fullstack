const { GraphQLNonNull, GraphQLInt } = require("graphql");

module.exports={
    query:{
        user:{
            type:User,
            description:'根据ID查询单个用户',
            args:{
                id:{type:new GraphQLNonNull(GraphQLInt)}
            },
            resolve:async(source,{id})=>{
                return `hello ${id}`
            }
        }
    }
}