// # Find a single movie by name
// query {
//   movie(query: { title: "The Matrix" }) {
//     _id
//     title
//     year
//     runtime
//   }
// }
// # Find all movies from the year 2000
// query {
//   movies(query: { year: 2000 }) {
//     _id
//     title
//     year
//     runtime
//   }
// }
// # Find the ten longest movies from the year 2000
// query {
//   movies(
//     query: { year: 2000 }
//     sortBy: RUNTIME_DESC
//     limit: 10
//   ) {
//     _id
//     title
//     year
//     runtime
//   }
// }  
