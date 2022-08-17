import { Suspense } from "react";
import Lottie from "lottie-react";
import Loading from "../../containers/loading/Loading";

export default function DisplayLottie({animationData}: any) {

  return (
    <Suspense fallback={<Loading />}>
      <Lottie loop={true} autoPlay={true} animationData={animationData} />
    </Suspense>
  );
}
