// const resolvers = {
//     Mutation: {
//         addRestaurant (parent, args, context, info) {
//             const { name, email, location, menu } = args
//             const restaurantObj = new Restaurant({
//                 name,
//                 email,
//                 location,
//                 menu
//             })
//             return restaurantObj.save()
//                 .then (result => {
//                     return { ...result._doc }
//                 })
//                 .catch (err => {
//                     console.error(err)
//                 })
//         }
//     }
// }      

// Let's try to understand what's happening in the addRestaurant resolver. The input arguments name, email, location and menu are available in the args object. We're first creating a Restaurant object by passing in these parameters. res.save() saves the restaurant document in the collection. The addRestaurant resolver returns a promise, which returns the document data once it is resolved. The result._doc object contains the restaurant document.

// Let's add a restaurant using graphiql:  

// mutation {
//     addRestaurant(
//       name: "Daniel"
//       email: "daniel@xyz.com"
//       location: "Boston"
//       menu: [
//         { name: "Veg Sandwich", price: 25 }
//         { name: "Cheese Pizza", price: 30 }
//       ]
//     ) {
//       _id
//       name
//       email
//       location
//       menu {
//         name
//         price
//       }
//     }
//   }     

// the remaining two mutation resolvers:

// addCustomer (parent, args, context, info) {
//     const { name, email, location } = args
//     const customerObj = new Customer({
//         name,
//         email,
//         location
//     })
//     return customerObj.save()
//         .then (result => {
//             return { ...result._doc }
//         })
//         .catch (err => {
//             console.error(err)
//         })
// },
// addOrder (parent, args, context, info) {
//     const { customerId, restaurantId, order } = args
//     const orderObj = new Order({
//         customerId,
//         restaurantId,
//         order
//     })
//     return orderObj.save()
//         .then (result => {
//             return { ...result._doc }
//         })
//         .catch (err => {
//             console.error(err)
//         })
// }   

// 

// to add a customer in the database:

// mutation {
//   addCustomer(
//     name: "Alexander"
//     location: "Boston"
//     email: "alexander@xyz.com"
//   ) {
//     _id
//     name
//     location
//     email
//   }
// }   

// query for a Veg Sandwich order placed by Alexander from Daniel restaurant:

// mutation {
//   addOrder(
//     customerId: "5d0623c892bed95a0db1cd9a"
//     restaurantId: "5d0620f2a7c5a658e2523dda"
//     order: ["5d0620f2a7c5a658e2523ddc"]
//   ) {
//     _id
//   }
// }  


// Resolvers for the Query Fields  

// Query: {
//     restaurants (parent, args, context, info) {
//         return Restaurant.find()
//             .then (restaurant => {
//                 return restaurant.map (r => ({ ...r._doc }))
//             })
//             .catch (err => {
//                 console.error(err)
//             })
//     }
// }   

// here is the implement of  the restaurant resolver 

// restaurant (parent, args, context, info) {
//     return Restaurant.findOne({ _id: args.id })
//         .then (restaurant => {
//             return { ...restaurant._doc }
//         })
//         .catch (err => {
//             console.error(err)
//         })
// }  







