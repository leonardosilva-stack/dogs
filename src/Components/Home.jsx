import Feed from "./Feed/Feed";
import Head from "./Helper/Head";
import Loading from "./Helper/Loading";

function Home() {
  return (
    <section className="container mainContainer">
      <Head
        title="Fotos"
        description="Home do site Dogs, com o feed de fotos."
      />
      <Feed />
    </section>
  );
}

export default Home;
