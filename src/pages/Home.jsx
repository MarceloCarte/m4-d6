import Cover from "../components/Cover";

import Pizza from "./Pizza";

function Home() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <div>
          <Cover />
        </div>
        <div>
          <Pizza />
        </div>
      </div>
    </>
  );
}

export default Home;
