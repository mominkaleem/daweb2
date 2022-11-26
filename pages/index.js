import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div class="flex flex-row justify-center items-center min-h-max h-screen">
      <h1>
        yo! 👋 my name is{" "}
        <span class="hover:cursor-pointer underline text-sky-400"><a target="_blank" href="https://twitter.com/_nwmo" rel="noopener noreferrer">mo.</a></span>{" "}
        currently building <span class="hover:cursor-pointer underline text-sky-400"><a target="_blank" href="https://tokium.co" rel="noopener noreferrer">Tokium</a></span> - a toolkit for NFT communities to royalty gate content.
      </h1>
    </div>
  );
}
