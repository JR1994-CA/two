// # Insert a new movie
// mutation {
//   insertOneMovie(data: {
//     title: "Little Women"
//     director: "Greta Gerwig"
//     year: 2019
//     runtime: 135
//   }) {
//     _id
//     title
//   }
// }
// # Update the year of a movie
// mutation {
//   updateOneMovie(
//     query: { title: "The Matrix" }
//     set: { year: 1999 }
//   ) {
//     _id
//     title
//   }
// }
// # Delete a movie
// mutation {
//   deleteOneMovie(query: { title: "The Room" }) {
//     _id
//     title
//   }
// }
// # Delete multiple movies
// mutation {
//   deleteManyMovies(query: { director: "Tommy Wiseau" }) {
//     _id
//     title
//   }
//  }  

