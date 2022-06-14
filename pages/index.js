import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <section>
      <img src="stars.png" id="stars"  />
      <img src="desert.jpg" id="moon"  />
      <img src="wolf.png" id="wolf"  />
      <h2 id="text">Anime<span>JS</span></h2>
      <a href="#" id="btn">Play</a>
      <img src="cave.png" id="cave"  />
    </section>
  )
}
