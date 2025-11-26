import Banner from "@/components/Banner/Banner";
import Choose from "@/components/Choose/Choose";
import Impact from "@/components/Impact/Impact";
import LatestProducts from "@/components/LatestProducts/LatestProducts";
import Students from "@/components/Students/Students";

export default function Home() {
  return (
    <>
      <Banner></Banner>
      <Impact></Impact>
      <Choose></Choose>
      <LatestProducts></LatestProducts>
      <Students></Students>
    </>
  );
}
