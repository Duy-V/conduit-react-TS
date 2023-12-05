import PopularTag from "../components/Tags";
import CardList from "../components/CardList";
import { useCurrentUser } from "../hooks/useCurrentUser";

function App() {
  return (
    <div className="container mx-auto px-4 py-6">
      <div className="flex gap-4">
        <CardList />
        <PopularTag />
      </div>
    </div>
  );
}

export default App;
