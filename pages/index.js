import anime from "animejs";
import { useEffect, useRef, useState } from "react";
import html2canvas from "html2canvas";


export default function Home() {
  const captionRef = useRef();
  const [link, setLink] = useState('');

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
      top: '50px',
      duration: 500,
      easing: 'easeInOutSine'
    });

    animation.add({
      targets: '#cave',
      top: '10px',
      duration: 500,
      easing: 'easeInOutSine'
    });

    animation.add({
      targets: '#text',
      top: '35%',
      left: '50%',
      duration: 500,
      easing: 'easeInOutSine'
    });

    document.querySelector('#btn').onclick = animation.play;

  }, []);

  const captionHandler = () => {
    const section = captionRef.current;
    console.log(section);

    html2canvas(section).then(function (canvas) {
      try {
        fetch('/api/upload', {
          method: 'POST',
          body: JSON.stringify({ data: canvas.toDataURL() }),
          headers: { 'Content-Type': 'application/json' },
        })
          .then((response) => response.json())
          .then((data) => {
            setLink(data.data);
          });
      } catch (error) {
        console.error(error);
      }
    })
  }

  return (
    <>
      <nav>
        <h2>Timeline Animations using Javascript</h2>
        {link && <a href={link}><h3>Caption</h3></a>}
        <button onClick={captionHandler}>Caption</button>
      </nav>
      <section id="section" ref={captionRef}>
        <div >
          <img src="desert.jpg" id="desert" />
          <img src="wolf.png" id="wolf" />
          <a href="#" id="btn">Play</a>
          <img src="cave.png" id="cave" />
          <h2 id="text"><span>A</span>wesome</h2>
        </div>
      </section>
    </>
  )
}
