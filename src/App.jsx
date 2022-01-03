
import { Route, Routes } from "react-router-dom";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import React, { Suspense, lazy } from "react";
import Menu from "./components/menu/Menu";

const Cast = lazy(() => import("./components/cast/Cast"));
const Reviews = lazy(() => import("./components/reviews/Reviews"));
const HomePage = lazy(() => import("./components/homePage/HomePage"));
const MovieDetailsPage = lazy(() =>
  import("./components/movieDetailsPage/MovieDetailsPage")
);
const MoviesPage = lazy(() => import("./components/moviesPage/MoviesPage"));

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Menu />
        <Suspense
          fallback={
            <Loader
              type="Puff"
              color="#00BFFF"
              height={500}
              width={500}
              timeout={3000}
            />
          }
        >
          <Routes>
            <Route path="/*" element={<HomePage />} />
            <Route path="/movies/" element={<MoviesPage />} />
            <Route path="/movies/:id/" element={<MovieDetailsPage />}>
              <Route path={`/movies/:id/cast`} element={<Cast />} />
              <Route path={`/movies/:id/reviews`} element={<Reviews />} />
            </Route>
          </Routes>
        </Suspense>
      </header>
    </div>
  );
}

export default App;