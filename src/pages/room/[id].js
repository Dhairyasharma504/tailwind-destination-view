import Image from "next/image";
import Layout from "../../components/global/Layout";
import { rooms } from "../../utils/data";
import Title from "../../components/atoms/Title";
import Description from "../../components/atoms/Description";

function Rooms({ room }) {
  // console.log('room', room);

  return (
    <div>
      <Layout pageName={room?.typeRoom}>
        <div className="container mx-auto p-5  ">
          <div className="grid md:grid-cols-2 grid-cols-1 gap-6 ">
            <div className=" ">
              <div className=" flex mx-auto  justify-center ">
                <Image
                  src={room?.image}
                  alt={room?.alt}
                  width={600}
                  height={600}
                  className=""
                />
              </div>
            </div>
            <div className="flex  flex-col justify-center">
              <div className=" max-auto items-center flex flex-col ">
                <div className="py-3">
                  {" "}
                  <Title title={room?.typeRoom} />
                </div>
                <Description text={room?.description} />

                {/* <RoomCard /> */}
              </div>
            </div>
          </div>
        </div>
      </Layout>
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
