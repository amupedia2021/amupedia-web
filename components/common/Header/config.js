export const icons = [
  {
    left: '25%',
    width: '80px',
    height: '80px',
    animationDelay: '0s'
  },
  {
    left: '10%',
    width: '30px',
    height: '30px',
    animationDelay: '12s'
  },
  {
    left: '70%',
    width: '40px',
    height: '40px',
    animationDelay: '4s'
  },
  {
    left: '40%',
    width: '60px',
    height: '60px',
    animationDelay: '0s',
    animationDuration: '18s'
  },
  {
    left: '65%',
    width: '30px',
    height: '30px',
    animationDelay: '6s'
  },
  {
    left: '85%',
    width: '50px',
    height: '50px',
    animationDelay: '6s'
  }
];

const backgrounds = [
  {
    backgroundColor: '#c099ff',
    backgroundImage: `radial-gradient(at 2% 10%, hsla(285,85%,79%,1) 0px, transparent 50%),
  radial-gradient(at 83% 15%, hsla(332,95%,65%,1) 0px, transparent 50%),
  radial-gradient(at 63% 5%, hsla(239,80%,68%,1) 0px, transparent 50%),
  radial-gradient(at 0% 61%, hsla(328,80%,77%,1) 0px, transparent 50%),
  radial-gradient(at 39% 31%, hsla(356,80%,70%,1) 0px, transparent 50%),
  radial-gradient(at 92% 33%, hsla(344,84%,70%,1) 0px, transparent 50%),
  radial-gradient(at 9% 14%, hsla(197,61%,68%,1) 0px, transparent 50%);`
  },
  {
    backgroundColor: '#ff99fd',
    backgroundImage: `radial-gradient(at 27% 21%, hsla(310,75%,73%,1) 0px, transparent 50%),
    radial-gradient(at 65% 82%, hsla(266,61%,71%,1) 0px, transparent 50%),
    radial-gradient(at 21% 49%, hsla(343,84%,72%,1) 0px, transparent 50%),
    radial-gradient(at 84% 92%, hsla(359,78%,73%,1) 0px, transparent 50%),
    radial-gradient(at 39% 54%, hsla(90,90%,69%,1) 0px, transparent 50%),
    radial-gradient(at 38% 13%, hsla(97,93%,70%,1) 0px, transparent 50%),
    radial-gradient(at 93% 52%, hsla(81,85%,78%,1) 0px, transparent 50%);`
  },
  {
    backgroundColor: '#99c3ff',
    backgroundImage: `radial-gradient(at 87% 66%, hsla(157,77%,76%,1) 0px, transparent 50%),
    radial-gradient(at 0% 6%, hsla(116,94%,75%,1) 0px, transparent 50%),
    radial-gradient(at 71% 9%, hsla(182,80%,70%,1) 0px, transparent 50%),
    radial-gradient(at 93% 41%, hsla(67,87%,64%,1) 0px, transparent 50%),
    radial-gradient(at 46% 27%, hsla(203,79%,67%,1) 0px, transparent 50%),
    radial-gradient(at 31% 97%, hsla(289,69%,65%,1) 0px, transparent 50%),
    radial-gradient(at 47% 84%, hsla(267,73%,63%,1) 0px, transparent 50%);`
  },
  {
    backgroundColor: '#df99ff',
    backgroundImage: `radial-gradient(at 68% 83%, hsla(250,65%,60%,1) 0px, transparent 50%),
    radial-gradient(at 23% 13%, hsla(221,93%,75%,1) 0px, transparent 50%),
    radial-gradient(at 63% 28%, hsla(231,62%,71%,1) 0px, transparent 50%),
    radial-gradient(at 37% 53%, hsla(92,79%,72%,1) 0px, transparent 50%),
    radial-gradient(at 56% 99%, hsla(276,92%,61%,1) 0px, transparent 50%),
    radial-gradient(at 17% 19%, hsla(43,79%,73%,1) 0px, transparent 50%),
    radial-gradient(at 0% 17%, hsla(80,74%,63%,1) 0px, transparent 50%);`
  },
  {
    backgroundColor: '#f899ff',
    backgroundImage: `radial-gradient(at 84% 32%, hsla(193,80%,64%,1) 0px, transparent 50%),
    radial-gradient(at 47% 6%, hsla(272,85%,61%,1) 0px, transparent 50%),
    radial-gradient(at 32% 15%, hsla(216,69%,70%,1) 0px, transparent 50%),
    radial-gradient(at 25% 5%, hsla(325,85%,74%,1) 0px, transparent 50%),
    radial-gradient(at 66% 61%, hsla(179,64%,73%,1) 0px, transparent 50%),
    radial-gradient(at 13% 76%, hsla(273,90%,63%,1) 0px, transparent 50%),
    radial-gradient(at 64% 49%, hsla(312,73%,77%,1) 0px, transparent 50%);`
  }
];

export const getRandomBackground = () => {
  const randomIndex = Math.floor(Math.random() * backgrounds.length);
  const background = backgrounds[randomIndex];
  return background;
};
