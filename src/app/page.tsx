import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Image src="/logo.svg" alt="logo" width={50} height={50} />
      NewTube
    </div>
  );
}
