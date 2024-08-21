import HeaderBox from "@/components/HeaderBox";
import RightSidebar from "@/components/RightSidebar";
import TotalBalanceBox from "@/components/TotalBalanceBox";

const Home = () => {
  const loggedIn = {
    firstName: "Indra",
    lastName: "Liko",
    email: "test@gmail.zxc",
  };
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
        <TotalBalanceBox
          accounts={[]}
          totalBanks={1}
          totalCurrentBalance={1250.35}
        />
      </div>

      <RightSidebar
        user={loggedIn}
        transaactions={[]}
        banks={[{ currentBalance: 123.45 }, { currentBalance: 200 }]}
      />
    </section>
  );
};

export default Home;
