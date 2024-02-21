import { useState } from "react";
import styles from "./home.module.css";
import Main from "../../components/Main/Main";
import MeteoritesTypes from "../../components/MeteoritesTypes/MeteoritesTypes.jsx";
import MeteoritesCategories from "../../components/MeteoritesCategories/MeteoritesCategories.jsx";


export function Home() {
  return (
    <>
      <Main />
      <MeteoritesTypes />
      <MeteoritesCategories />
    </>

  );
}
