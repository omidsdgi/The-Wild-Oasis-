import styled from 'styled-components';
import Filter from "./Filter.jsx";

const StyledTableOperations = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;
`;

function TableOperations() {
    return (
    <StyledTableOperations>
      <Filter/>
    </StyledTableOperations>
    )
}
export default TableOperations;
