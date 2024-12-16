import Container from "@/components/container";
import Logo from "./logo";
import Navigation from "./navigation/navigation";
import SearchBar from "./search";
import UserButton from "./user-button";
import Cart from "./cart";

const Header = () => {
  return (
    <header>
      <Container>
        <div className="py-4 flex justify-between">
          <Logo />
          <Navigation />
          <SearchBar />
          <div className="flex gap-10">
            <UserButton />
            <Cart />
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
