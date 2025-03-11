import React, { useState, useEffect } from "react";

function Home() {
  const times = [
    1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006,
    2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018,
    2019, 2020, 2021, 2022, 2023, 2024, 2025,
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % times.length); // Loops back
    }, 2025);

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div>
      <h1>Home</h1>
      <marquee className="marquee">Welcome to Imaginary Garden!</marquee>
      <h1 className="year">{times[index]}</h1>
      <div>
        <p>
          Lorem ipsum odor amet, consectetuer adipiscing elit. Ac quam interdum
          consectetur tellus sollicitudin. Quam condimentum dignissim erat leo
          purus elit odio. Auctor ridiculus hac habitant suscipit montes tellus
          nibh. Felis finibus morbi torquent massa penatibus maximus
          ullamcorper. Sit nam eros commodo praesent ac suscipit. Ornare dolor
          nunc facilisi curabitur accumsan. Quis morbi egestas ac platea; montes
          elit quisque tristique nec. Sit aliquet hendrerit quam felis posuere
          vestibulum morbi semper urna! Mattis pellentesque leo nisl imperdiet,
          mattis justo purus. Eros dignissim mi ligula vivamus sapien quis
          platea libero habitasse. Molestie purus ut efficitur dis sodales vel.
          Pharetra ornare neque neque class auctor iaculis. Mi urna quisque
          mauris semper lectus praesent montes aptent. Ornare dignissim aliquam
          sapien quam mollis quis. Rhoncus ad congue duis pretium odio montes
          fermentum morbi. Eros potenti netus condimentum hendrerit hac,
          dictumst ad platea nostra. Conubia nulla curae elementum adipiscing
          euismod id sapien. Consequat cursus id aliquet diam conubia nec
          semper. Faucibus ornare sit habitasse eu fames blandit phasellus
          condimentum. Sollicitudin litora dignissim elementum arcu donec
          sagittis. Aauctor orci sociosqu; non praesent mus viverra arcu hac.
          Suscipit morbi lectus tempor, ornare lacinia porta praesent porta.
          Cursus ipsum praesent vitae risus mi porttitor. Ultrices risus nulla
          curabitur commodo tortor integer magna nisl. Scelerisque aliquam augue
          netus eu semper? Pharetra tristique taciti penatibus ullamcorper donec
          porta proin. In turpis nisl et dapibus nec ultricies in nisl in. Morbi
          laoreet venenatis sociosqu amet aliquet. Suspendisse adipiscing risus
          vel rhoncus volutpat amet habitant. Dapibus a ultrices ad vehicula
          cras venenatis risus orci. Ut lacus donec duis magnis tempor nunc
          blandit. Condimentum suspendisse massa vitae cras placerat morbi
          tempus. Fusce interdum mollis suscipit gravida commodo aptent faucibus
          est convallis? Cursus consequat cursus; tempor praesent vulputate
          aliquam. Pretium in fames lacinia pretium et. Primis cras diam
          habitant nibh praesent dui egestas blandit eu. Tincidunt inceptos nunc
          lacinia nascetur; in et in habitasse. Hendrerit turpis risus mus neque
          adipiscing augue. Nisl nostra nullam fusce himenaeos lacinia ultricies
          justo ipsum. Augue pellentesque commodo per rutrum et, arcu nibh eros
          semper. Platea luctus facilisi erat aliquet commodo quisque class.
          Semper per elit amet urna fringilla neque pulvinar. Vehicula pretium
          vel senectus imperdiet lectus suspendisse amet. Ad proin luctus orci
          praesent aliquam curae tempor ex. Nullam quis metus venenatis mus;
          aenean inceptos luctus. Fusce cubilia metus ante ut aenean proin
          turpis quisque. Ainceptos torquent quis pharetra; velit ad. Varius
          facilisi taciti feugiat scelerisque aliquet non mattis. Interdum velit
          dictumst finibus rutrum neque fermentum. Fames odio fusce metus nulla
          cursus ac. Praesent vestibulum feugiat auctor tellus himenaeos quisque
          facilisis. Lacus eleifend aliquam bibendum proin ligula dolor. Per
          dignissim dictum lacinia neque nostra inceptos habitant nascetur.
          Egestas dapibus erat etiam turpis porta litora a. Sapien urna
          fringilla dignissim, consequat morbi ornare. Nisl fermentum cras orci;
          purus nisi eget mus. Inceptos mus tellus hac ad auctor. Primis risus
          tristique nec integer metus tortor fringilla nec. Inceptos euismod
          lectus tempor vivamus ad. Mattis quis vehicula dapibus dui metus
          ornare? Donec habitasse cubilia libero nibh; vestibulum sodales. Magna
          per ex habitant elit sed blandit eu. Nam himenaeos velit feugiat;
          bibendum massa magna suscipit. Tempor dictum viverra sodales efficitur
          diam habitant taciti dictumst. Ex quis venenatis in donec lacinia
          praesent. Enim et donec auctor libero nulla quam. Sapien lectus nibh
          nisi commodo ac ornare nec. Dignissim cubilia in finibus; hendrerit
          facilisi porttitor. Integer montes egestas orci a ad mus habitant
          dolor. Fermentum tincidunt eleifend turpis luctus hac nascetur
          eleifend nisi. Faucibus nulla volutpat molestie dictum nullam per nec
          pulvinar suspendisse. Nam senectus sem nulla, leo potenti taciti
          egestas. Diam elementum fames commodo nunc libero placerat a odio.
          Metus nibh commodo at id magnis conubia curae. Lobortis penatibus
          primis lectus faucibus, donec sit morbi sem. Est rutrum ligula nullam
          eleifend, a nascetur.
        </p>
      </div>
    </div>
  );
}

export default Home;
