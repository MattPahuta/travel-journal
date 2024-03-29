import Header from "./components/Header"
import Card from "./components/Card"
import Footer from "./components/Footer"
import cardData from "./data/data"


function renderCard(card) {
  return <Card key={card.id} card={card} />
}

export default function App() {
  const locationCards = cardData.map(renderCard)
  return (
    <>
      <Header />
      <main className="main">
        <section className="travel-cards">
          {locationCards}
        </section>
      </main>
      <Footer />
    </>
  );
}