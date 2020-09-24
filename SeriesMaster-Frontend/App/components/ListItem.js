import styled from "styled-components/native";
import colors from "../config/colors";

const ListItem = styled.TouchableOpacity`
  flex-direction: row;
  border-color: ${colors.dark};
  border-bottom-color: ${colors.grey};
  width: 100%;
  border-width: 1px;
  align-items: center;
  padding: 10px;
`;

export default ListItem;
