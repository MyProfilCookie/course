import Image from "next/image";
import { Button } from "../src/components/ui/button";


export default function Home() {
  return (
    <div>
      <Image src="/logo.svg" alt="logo" width={100} height={100} />
      <h1>Hello World</h1>
      <Button>
        Click me
      </Button>
    </div>
  );
}
