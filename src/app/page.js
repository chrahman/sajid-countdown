import Image from "next/image";
import Countdown from "./CountDown";

export default function Home() {
  const weddingDate = "2024-12-31T00:00:00"; // Set your friend's wedding date

  return (
    <div className="App">
      <Countdown weddingDate={weddingDate} />
    </div>
  );
}
