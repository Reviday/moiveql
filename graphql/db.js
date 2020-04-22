let movies = [
  {
    id: 0,
    name: "Star Wars - The new one",
    score: 1
  },
  {
    id: 1,
    name: "Avengers - The new one",
    score: 8
  },
  {
    id: 2,
    name: "The Godfather I",
    score: 99
  },
  {
    id: 3,
    name: "Logan",
    score: 2
  }
];

export const getMovies = () => movies;

export const getById = id => {
  const filteredMovies = movies.filter(movie => id === movie.id);
  return filteredMovies[0];
}

export const deleteMovie = (id) => {
  const cleanedMovies = movies.filter(movie => movie.id !== id);
  if(movies.length > cleanedMovies.length) {
    movies = cleanedMovies;
    return true;
  } else {
    return false;
  }
}

export const addMovie = (name, score) => {
  const newMovie = {
    // id: `${movies.length + 1}`, // 해당 방식은 id값 부여에 있어서, 삭제 로직과 함께 수행할 시 중복의 여지가 있음.
    id: movies[movies.length - 1].id + 1, // 이 방식으로 바꾸면, 최소한 겹치는 경우는 없을 것으로 보임(변수 처리 없이 시퀀스와 비슷하게 순회하게끔)
    name, 
    score
  };
  movies.push(newMovie);
  return newMovie;
}
