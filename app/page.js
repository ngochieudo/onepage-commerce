import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Navbar from "./components/navbar/Navbar";
import QuestionPage from "./components/questions/QuestionPage";
import RedeemPage from "./components/RedeemPage";
import TopUp from "./components/topup/TopUp";
import Voucher from "./components/voucher/Voucher";

export default function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <Voucher />
      <TopUp />
      <QuestionPage/>
      <RedeemPage/>
      <Footer/>
    </>
  );
}
