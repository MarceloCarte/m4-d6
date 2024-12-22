import Header from "./Header";

function Cover() {
  return (
    <>
      <div className="relative">
        <div
          className="bg-center bg-cover w-full h-full absolute top-0 left-0"
          style={{
            backgroundImage: "url(../assets/imgs/Header.jpg)",
          }}
        ></div>
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-80"></div>{" "}
        <Header />
      </div>
    </>
  );
}

export default Cover;
