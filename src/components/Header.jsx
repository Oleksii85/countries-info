import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Container } from "./Container";
import styled from "styled-components";
import { IoMoon, IoMoonOutline } from "react-icons/io5";

const HeaderEl = styled.header`
  box-shadow: var(--shadow);
  background-color: (var(--colors-ui-base));
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
`;

const Title = styled(Link).attrs({
  to: "/",
})`
  color: var(--colors-text);
  font-size: var(--fs-sm);
  text-decoration: none;
  font-weight: var(--fw-bold);
  cursor: default;
`;

const ModeSwitcher = styled.div`
  color: var(--colors-text);
  font-size: var(--fs-sm);
  text-transform: capitalize;
  cursor: pointer;
`;

export const Header = () => {
  const [theme, setTheme] = useState("light");

  // перемикач теми, міняє через setTheme тему перевіряючи яка встановлена поточна
  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  useEffect(() => {
    // через document звертаємось до body, та за доп. setAttribute встановлюємо атрибут "data-theme" та всатновлюємо йому значення theme
    //відслідковуємо theme і коли буде змінення буде й мінятися тема
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <HeaderEl>
      <Container>
        <Wrapper>
          <Title>Where is the world?</Title>
          <ModeSwitcher onClick={toggleTheme}>
            {theme === "light" ? <IoMoonOutline size="14px" /> : <IoMoon size="14px" />}
            <span style={{ marginLeft: "0.75rem" }}>{theme} Theme</span>
          </ModeSwitcher>
        </Wrapper>
      </Container>
    </HeaderEl>
  );
};
