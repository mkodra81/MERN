import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  faFilm,
  faLaugh,
  faMask,
  faRocket,
  faHeart,
  faGhost,
  faDragon,
} from "@fortawesome/free-solid-svg-icons";
import Hero from "../components/Hero";
import CategoryCard from "../components/CategoryCard";
import MovieCarousel from "../components/MovieCarousel";
import Loading from "./Loading";
import { fetchMoviesBySorting, useMovieStore } from "../movies/movieStore.js";
import "../styles/home.css"

const Home = () => {
  const [loading, setLoading] = useState(true);
  
  const trendingMovies = useMovieStore((state) => state.trendingMovies);
  const newReleases = useMovieStore((state) => state.newReleases);
  const setTrendingMovies = useMovieStore((state) => state.setTrendingMovies);
  const setNewReleases = useMovieStore((state) => state.setNewReleases);

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "instant" });
    }, 200);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true); // Set loading state to true before fetching

      try {
        const trendingResponse = await fetchMoviesBySorting("imdb.rating");
        const newReleasesResponse = await fetchMoviesBySorting("year");

        setTrendingMovies(trendingResponse);
        setNewReleases(newReleasesResponse);

      } catch (error) {
        console.error("Error fetching movies:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const categories = [
    { id: 1, name: "Action", icon: faFilm, movieCount: 234 },
    { id: 2, name: "Comedy", icon: faLaugh, movieCount: 156 },
    { id: 3, name: "Drama", icon: faMask, movieCount: 187 },
    { id: 4, name: "Sci-Fi", icon: faRocket, movieCount: 123 },
    { id: 5, name: "Romance", icon: faHeart, movieCount: 145 },
    { id: 6, name: "Horror", icon: faGhost, movieCount: 98 },
  ];

  return loading ? (
    <Loading />
  ) : (
    <div className="min-vh-100">
      <Hero />

      <section className="py-5 bg-white">
        <Container>
          <h2 className="display-6 mb-4">Browse Categories</h2>
          <Row>
            {categories.map((category) => (
              <Col key={category.id} xs={4} md={3} className="mb-4">
                <CategoryCard category={category} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className="py-5 bg-light">
        <Container>
          <MovieCarousel title="Trending Now" movies={trendingMovies} />
          <MovieCarousel title="New Releases" movies={newReleases}/>
        </Container>
      </section>
    </div>
  );
};

export default Home;
