import Image from "next/image";
import Layout from "../../components/global/Layout";
import { rooms } from "../../utils/data";
import Title from "../../components/atoms/Title";
import Description from "../../components/atoms/Description";
import Footer from "../../components/global/Footer";
import RoomCard from "../../components/roomCard/RoomCard";

function Rooms({ room }) {
  // console.log('room', room);

  return (
    <div>
      <div className="container mx-auto">
        <div className=" flex mx-auto">
          <Image src={room?.image} alt={room?.alt} width={600} height={600} />
        </div>
        <Title title={room?.typeRoom} />
        <Description text={room?.description} />
        <Title title="Related Rooms" />
        {/* <RoomCard /> */}
      </div>
      <Footer />
    </div>
  );
}

export async function getServerSideProps({ params }) {
  console.log("params", params);
  // Fetch data from external API
  const res =
    rooms.find((element) => element.id.toString() === params.id) || {};
  // Pass data to the page via props
  return { props: { room: res } };
}

export default Rooms;
