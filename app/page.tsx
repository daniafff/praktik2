import Image from "next/image";
import { Container, Filters, ProductCard, Title, TopBar } from "@/components/shared/";
import { ProductsGroupList } from "@/components/shared/product-group-list";



export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title size="lg" text="Все пиццы" className="font-black"></Title>

      </Container>
      <TopBar />
      <Container>
        <div className="flex gap-[80px] ">
          <div className="w-[250px]">
            <Filters />
          </div>

          <div>
          <div className="flex flex-col gap-16">
          <ProductsGroupList title="Пиццы" items={[{
            id: 1,
            name: 'Чизбургер-пицца',
            imageUrl: "https://lavera-pizza.ru/wp-content/uploads/2024/04/royal-chizburger-vid-sverhu-kontrast.jpg",
            price: 550,
            items: [{ price: 500 }]
          },
          {
            id: 2,
            name: 'Чизбургер-пицца',
            imageUrl: "https://lavera-pizza.ru/wp-content/uploads/2024/04/royal-chizburger-vid-sverhu-kontrast.jpg",
            price: 550,
            items: [{ price: 500 }]
          }, {
            id: 3,
            name: 'Чизбургер-пицца',
            imageUrl: "https://lavera-pizza.ru/wp-content/uploads/2024/04/royal-chizburger-vid-sverhu-kontrast.jpg",
            price: 550,
            items: [{ price: 500 }]
          }, {
            id: 4,
            name: 'Чизбургер-пицца',
            imageUrl: "https://lavera-pizza.ru/wp-content/uploads/2024/04/royal-chizburger-vid-sverhu-kontrast.jpg",
            price: 550,
            items: [{ price: 500 }]
          }, {
            id: 5,
            name: 'Чизбургер-пицца',
            imageUrl: "https://lavera-pizza.ru/wp-content/uploads/2024/04/royal-chizburger-vid-sverhu-kontrast.jpg",
            price: 550,
            items: [{ price: 500 }]
          }
          ]} categoryId={1} />
        </div>
          </div>
        </div>
      </Container>
      
    </>
  );
}
