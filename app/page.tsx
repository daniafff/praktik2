import Image from "next/image";
import { Container, Title, TopBar} from "@/components/shared/";



export default function Home() {
  return (
    <div>
      <Container className="mt-10">
        <Title size="lg" text="Все пиццы" className="font-black"></Title>

      </Container>
      <TopBar/>
      <Container>
        
      </Container>
    </div>
  );
}
