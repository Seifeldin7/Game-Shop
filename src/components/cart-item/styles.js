import styled from "styled-components/macro";

export const Item = styled.div`
  width: 100%;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  
`;

export const Inner = styled.div`
  margin-bottom: 50px;
  display: flex;
  flex-direction: row;
  flex: 3;
  
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;
export const Header = styled.div`
flex-grow: 1;
  }
`;

export const Body = styled.div`
  background-color: #35383E;
  color: white;
  padding-left: 20px;
  flex-grow: 2;
  border-radius: 0 2% 2% 0;
  border-right: 20px solid #FFDC11;
`;

export const Button = styled.button``;

export const Title = styled.h3`
margin-top: 5px;
`;

export const Quantity = styled.span`
  color: #FFDC11;
  fontweight: "bold";
`;

export const Price = styled.span`
  color: #FFDC11;
  fontweight: "bold";
`;

export const Total = styled.span`
  color: #FFDC11;
  fontweight: "bold";
`;

export const Image = styled.img`
  object-fit: fill;
  max-height: 30vh;
  width: 100%;
`;
