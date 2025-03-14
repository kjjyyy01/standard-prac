type Intro = {
  description1: string;
  description2: string;
  description3: string;
};

const Home = async () => {
  const introResponse = await fetch("http://localhost:4000/intro", {
    cache: "force-cache",
  });
  const introData: Intro = await introResponse.json();
  console.log(introData);

  return <div>Home</div>;
};
export default Home;
