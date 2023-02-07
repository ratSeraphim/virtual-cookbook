import * as S from "./style";

const Navbar = () => {
  return (
    <S.Navbar>
      <S.Title>Cook Book</S.Title>
      <div>
        Search:
        <S.Search type="text"></S.Search>
        <S.Link href="/create">create recipe</S.Link>
      </div>
    </S.Navbar>
  );
};

export default Navbar;
