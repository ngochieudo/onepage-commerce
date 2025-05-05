import Banner from "./components/banner/Banner";
import Navbar from "./components/navbar/Navbar";
import TopUp from "./components/topup/TopUp";
import Voucher from "./components/voucher/Voucher";

export default function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <Voucher />
      <TopUp />
    </>
  );
}
