import Navbar from "@/app/Components/Navbar";
import Footer from "@/app/Components/Footer";

const Dashboard = ({ children }) => {
  return (
    <>
      <head>
        <meta name="google-site-verification" content="HAAWKRB89ds81zWwi2ywwJIfYxWrJsmMsPusz_bqj9Y" />
      </head>
      <div className="h-screen w-full flex flex-col relative antialiased">
        <Navbar />
        <div className="flex-grow flex items-center justify-center w-full">
          {children}
        </div>
        <Footer />
      </div>

    </>

  );
};
export default Dashboard;
