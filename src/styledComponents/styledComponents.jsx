import styled from "styled-components";

export const ContainerFirst = styled.div`
  width: 400px;
  padding: 0 15px;
  margin: auto auto;
  border: 1px solid #222;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ContainerSecond = styled.div`
  width: 320px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.div`
  margin: 50px auto 10px auto;
  height: 40px;
  width: 40px;
  border-radius: 20px;
  background-color: #f48fb2;
`;

export const Title = styled.div`
  color: white;
  font-size: 22px;
  margin-bottom: 30px;
`;

export const CardImg = styled.img`
  width: 50%;
  height: 50%;
  transform: translate(50%, 50%);
  z-index: 1;
`;

export const InputBox = styled.input`
  padding: 10px 8px;
  font-size: 13px;
  color: #bbb;
  width: 300px;
  background-color: #111;
  border: 1px solid
    ${(props) =>
      props.data === "green" ? "green" : props.data === "red" ? "red" : "#444"};
  border-radius: 3px;
  margin-bottom: 20px;
`;

export const CheckBox = styled.input.attrs({ type: "checkbox" })`
  height: 12px;
  width: 12px;
  margin: -10px 5px 0 7px;
  background-color: #111;
  color: #800031;
  border: 2px solid #888;
`;

export const Label = styled.label`
  width: 320px;
  color: #bbb;
  font-size: 13px;
  user-select: none;
`;

export const ButtonStyle = styled.button`
  width: 320px;
  padding: 8px; auto;
  margin: 5px 0 15px 0;
  color: black;
  background-color: #90caf9;
  font-size: 12px;
  font-weight: bold;
  border-radius: 3px;
  border: 0px;
  
  &:hover {
    cursor:pointer;
  }
`;

export const AStyle = styled.a`
  color: #90caf9;
  font-size: 12px;

  &:hover {
    cursor: pointer;
  }
`;

export const PStyle = styled.p`
  color: #aaa;
  font-size: 12px;
`;

export const InputNameBox = styled.input.attrs({ type: "text" })`
  padding: 10px 8px;
  font-size: 13px;
  color: #bbb;
  width: 133px;
  background-color: #111;
  border: 1px solid
    ${(props) =>
      props.data === "green" ? "green" : props.data === "red" ? "red" : "#444"};
  border-radius: 3px;
  margin-bottom: 20px;
`;

export const DivStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  width: 100%;
`;

export const DivRightStyle = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;
