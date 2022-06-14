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
      targets: '#wolf',
      marginTop: '50%',
      duration: 500,
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
      top: '40%',
      left: '53%',
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
        <img src="https://res.cloudinary.com/dogjmmett/image/upload/v1655218735/desert_vyi5on.jpg" id="moon" />
        <img src="https://res.cloudinary.com/dogjmmett/image/upload/v1655218728/wolf_xficul.png" id="wolf" />
        <a href="#" id="btn">Play</a>
        <img src="https://res.cloudinary.com/dogjmmett/image/upload/v1655218726/cave_upzxju.png" id="cave" />
        <h2 id="text"><span>A</span>wesome</h2>
      </section>
    </>
  )
}
