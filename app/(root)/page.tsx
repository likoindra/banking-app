import HeaderBox from "@/components/HeaderBox";

const Home = () => {
  const loggedIn = { firstName: "Indra" };
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn.firstName ?? "guest"}
            subtext="Access and manage your account and transactions effiencently."
          />
        </header>
      </div>
    </section>
  );
};

export default Home;
