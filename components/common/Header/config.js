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
  backgroundColor: 'rgb(120,2,6)',
  backgroundImage: `linear-gradient(99deg, rgba(120,2,6,1) 21%, rgba(64,5,33,1) 49%, rgba(21,27,69,1) 89%);`
  },
  {
    backgroundColor: 'rgb(196,88,153);',
    backgroundImage: `linear-gradient(195deg, rgba(196,88,153,1) 19%, rgba(83,14,115,1) 56%, rgba(0,0,0,1) 98%, rgba(173,83,137,1) 100%);`
   
  },
  {
    backgroundColor: 'rgb(203,180,212)',
    backgroundImage: `linear-gradient(202deg, rgba(203,180,212,1) 2%, rgba(103,86,139,1) 40%, rgba(32,0,44,1) 91%);`
  },
  {
    backgroundColor: 'rgb(158,35,84)',
    backgroundImage: ` linear-gradient(261deg, rgba(158,35,84,1) 18%, rgba(17,16,16,1) 83%)`
  },
  {
    backgroundColor: 'rgb(49,71,85)',
    backgroundImage: ` linear-gradient(261deg, rgba(49,71,85,1) 18%, rgba(33,93,121,1) 43%, rgba(27,154,168,1) 70%)`
  }
];

export const getRandomBackground = () => {
  const randomIndex = Math.floor(Math.random() * backgrounds.length);
  const background = backgrounds[randomIndex];
  return background;
};
