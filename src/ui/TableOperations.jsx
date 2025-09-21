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
      <Filter filterField="discount" options={[
          { value: "all", label: "All" },
          { value: "no-discount", label: "No discount" },
          { value: "with-discount", label: "With discount" },

      ]}/>
    </StyledTableOperations>
    )
}
export default TableOperations;
