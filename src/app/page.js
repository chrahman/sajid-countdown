import Image from "next/image";
import Countdown from "./CountDown";

export default function Home() {
  const weddingDate = "2024-10-26T00:00:00";

  return (
    <div className="App">
      <Countdown weddingDate={weddingDate} />
    </div>
  );
}
