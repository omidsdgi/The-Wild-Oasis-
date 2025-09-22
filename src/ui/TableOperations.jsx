import styled from 'styled-components';
import Filter from "./Filter.jsx";
import SortBy from "./SortBy.jsx";

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
        <SortBy options={[
            { value: "name-asc", label: "Sort by name (A-Z)" },
            { value: "name-desc", label: "Sort by name (Z-A)" },
            {value: "regularPrice-asc", label: "Sort by price (low first)" },
            {value: "regularPrice-desc", label: "Sort by price (high first)" },
            {value: "maxCapacity-asc", label: "Sort by capacity (low first)" },
            {value: "maxCapacity-desc", label: "Sort by capacity (high first)" },
        ]}
        />
    </StyledTableOperations>
    )
}
export default TableOperations;
