import Spinner from "../../ui/Spinner";
import CabinRow from "./CabinRow";
import useCabins from "./useCabins";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";
import { useSearchParams } from "react-router-dom";
import Empty from "../../ui/Empty";
import { useScreenWidth } from "../../hooks/useScreenWidth";

// const Table = styled.div`
//   border: 1px solid var(--color-grey-200);

//   font-size: 1.4rem;
//   background-color: var(--color-grey-0);
//   border-radius: 7px;
//   overflow: hidden;
// `;

function CabinTable() {
  const screenWidth = useScreenWidth();
  const { isLoading, cabins } = useCabins();
  const [searchParams] = useSearchParams();

  if (isLoading) return <Spinner />;
  if (!cabins.length) return <Empty resourceName="cabins" />;

  // 1) FILTER
  const filterValue = searchParams.get("discount") || "all";
  console.log(filterValue);

  let filteredCabins;
  if (filterValue === "all") filteredCabins = cabins;
  if (filterValue === "no-discount")
    filteredCabins = cabins.filter((cabin) => cabin.discount === 0);
  if (filterValue === "with-discount")
    filteredCabins = cabins.filter((cabin) => cabin.discount > 0);

  // 2) SORT
  const sortBY = searchParams.get("sortBy") || "startDate-asc";
  const [field, direction] = sortBY.split("-");
  const modifier = direction === "asc" ? 1 : -1;
  console.log(filteredCabins);
  const sortedcabins = filteredCabins.sort(
    (a, b) => (a[field] - b[field]) * modifier
  );

  return (
    <Menus>
      <Table
        columns={
          screenWidth > 768
            ? "0.6fr 1.8fr 2.2fr 1fr 1fr 1fr"
            : "5rem 4rem 6.5rem 5.5rem 4rem max-content"
        }
        gap="2rem"
        type="cabins"
      >
        <Table.Header>
          <div></div>
          <div>Cabin</div>
          <div>Capacity</div>
          <div>Price</div>
          <div>Discount</div>
          <div></div>
        </Table.Header>

        <Table.Body
          // data={cabins}
          // data={filteredCabins}
          data={sortedcabins}
          render={(cabin) => <CabinRow cabin={cabin} key={cabin.id} />}
        />
      </Table>
    </Menus>
  );
}

export default CabinTable;
