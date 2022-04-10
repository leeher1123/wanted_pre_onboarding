import React, { useCallback, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { RiArrowDropDownFill } from "react-icons/ri";
import { BiSearch } from "react-icons/bi";

const symbols = [
  "BTCUSD.PERP",
  "ETHUSD.PERP",
  "BCHUSD.PERP",
  "LTCUSD.PERP",
  "XRPUSD.PERP",
];

const Dropdown = () => {
  const [filteredSymbols, setFilteredSymbols] = useState(symbols);
  const [currentItem, setCurrentItem] = useState("All Symbols");
  const [visibleSearchBox, setVisibleSearchBox] = useState(false);
  const [value, setValue] = useState("");
  const symbolRef = useRef();

  const onClickBox = useCallback(() => {
    setVisibleSearchBox(!visibleSearchBox);
    setValue("");
  }, [visibleSearchBox, value]);

  const onClickItem = useCallback(
    (e) => {
      setVisibleSearchBox(false);
      setCurrentItem(e.target.innerText);
    },
    [visibleSearchBox, currentItem]
  );

  const onChange = useCallback(
    (e) => {
      const searchText = e.target.value.toLocaleLowerCase();
      setValue(searchText);
    },
    [value]
  );

  useEffect(() => {
    const filteredSymbols = symbols.filter((symbol) => {
      return symbol.toLocaleLowerCase().includes(value);
    });
    setFilteredSymbols(filteredSymbols);
  }, [symbols, value]);

  const onClose = (e) => {
    if (!symbolRef.current.contains(e.target)) {
      setVisibleSearchBox(false);
    }
  };
  useEffect(() => {
    window.addEventListener("click", onClose);
  });
  return (
    <Container>
      <Wrapper ref={symbolRef}>
        <DropdownBox onClick={onClickBox}>
          <SelectedItem>{currentItem}</SelectedItem>
          <span>
            <RiArrowDropDownFill />
          </span>
        </DropdownBox>
        {visibleSearchBox && (
          <SymbolMenu>
            <SearchBox>
              <SearchIcon>
                <BiSearch />
              </SearchIcon>
              <Input
                type="text"
                placeholder="Search Symbol"
                onChange={onChange}
                value={value}
              />
            </SearchBox>
            <SymbolItem onClick={onClickItem}>All Symbols</SymbolItem>
            {filteredSymbols.map((symbol) => (
              <SymbolItem key={symbol} onClick={onClickItem}>
                {symbol}
              </SymbolItem>
            ))}
          </SymbolMenu>
        )}
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  max-width: 258px;
  margin: 70px auto 500px;
`;

const Wrapper = styled.div``;

const DropdownBox = styled.div`
  width: 240px;
  height: 25px;
  border: 1px solid #d7d7d7;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px;
  color: #5d5d5d;
  font-size: 15px;
  cursor: pointer;
  span {
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      font-size: 28px;
    }
  }
`;

const SelectedItem = styled.div``;

const SymbolMenu = styled.div`
  width: 258px;
  margin: 5px auto;
  border: 1px solid #d7d7d7;
  border-radius: 4px;
  box-shadow: 1px 5px 14px 1px rgba(202, 202, 202, 0.66);
`;

const SearchBox = styled.div`
  padding: 5px 10px;
  border-bottom: 1px solid #ddd;
  display: flex;
  align-items: center;
`;

const SearchIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    fill: #ababab;
  }
`;

const Input = styled.input`
  display: block;
  width: 90%;
  border: 0;
  padding: 8px;
  outline: none;
  ::-webkit-input-placeholder {
    color: #ababab;
  }
`;

const SymbolItem = styled.div`
  padding: 13px 25px;
  font-size: 14px;
  cursor: pointer;
  &:hover {
    background-color: #f3f3f3;
  }
`;
export default Dropdown;
