import Head from "next/head";
import Image from "next/image";
import { Fragment } from "react";
import AppBar from "../Components/AppBar";
import HomePage from "../Components/Homepage";

export default function Home() {
  return (
    <Fragment>
      <AppBar />
      <HomePage />
    </Fragment>
  );
}
