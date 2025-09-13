import styled from "styled-components";

const TableOperations = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;

  @media (max-width: 768px) {
    gap: 0.9rem;
    flex-direction: column;
    align-items: flex-end;
  }
`;

export default TableOperations;
