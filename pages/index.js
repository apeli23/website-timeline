import anime from "animejs";
import { useEffect } from "react";

export default function Home() {

  useEffect(() => {
    var animation = anime.timeline({
      autoplay: false
    });

    animation.add({
      targets: '#btn',
      top: '1500px',
      duration: 500,
      easing: 'easeInOutSine'
    });

    animation.add({
      targets: '#stars',
      top: '0px',
      duration: 1000,
      easing: 'easeInOutSine'
    });

    animation.add({
      targets: '#wolf',
      marginTop: '10%',
      duration: 1000,
      easing: 'easeInOutSine'
    });

    animation.add({
      targets: '#cave',
      top: '0px',
      duration: 500,
      easing: 'easeInOutSine'
    });

    animation.add({
      targets: '#text',
      top: '35%',
      duration: 500,
      easing: 'easeInOutSine'
    });

    document.querySelector('#btn').onclick = animation.play;

  }, [])
  return (
    <>
      <nav>
      <h2>Timeline Animations using Javascript</h2>
      <button>Caption</button>
      </nav>
      <section>
        {/* <img src="stars.png" id="stars" /> */}
        <img src="desert.jpg" id="moon" />
        <img src="wolf.png" id="wolf" />
        <a href="#" id="btn">Play</a>
        <img src="cave.png" id="cave" />
        <h2 id="text"><span>A</span>wesome</h2>
      </section>
    </>
  )
}
