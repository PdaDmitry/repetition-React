import { CirclesWithBar, FallingLines, ThreeDots } from 'react-loader-spinner';

export function LoaderComponent() {
  return (
    // <div>
    //   <ThreeDots
    //     visible={true}
    //     height="20"
    //     width="20"
    //     color="#4fa94d"
    //     radius="9"
    //     ariaLabel="three-dots-loading"
    //     wrapperStyle={{}}
    //     wrapperClass=""
    //   />
    // </div>
    // <div>
    //   <FallingLines color="#4fa94d" width="25" visible={true} ariaLabel="falling-circles-loading" />
    // </div>
    <div>
      <CirclesWithBar
        height="20"
        width="20"
        color="#4fa94d"
        outerCircleColor="#4fa94d"
        innerCircleColor="#4fa94d"
        barColor="#4fa94d"
        ariaLabel="circles-with-bar-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
}
