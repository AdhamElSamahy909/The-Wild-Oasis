import {
  HiOutlineBanknotes,
  HiOutlineBriefcase,
  HiOutlineCalendarDays,
  HiOutlineChartBar,
} from "react-icons/hi2";
import Stat from "./Stat";
import { formatCurrency } from "../../utils/helpers";
import styled from "styled-components";

const PosDiv = styled.div`
  @media (max-width: 768px) {
    grid-column: 1 / 2;
  }
`;

const PosDiv2 = styled.div`
  @media (max-width: 768px) {
    grid-column: 2 / 3;
  }
`;

function Stats({ bookings, confirmedStays, numDays, cabinCount }) {
  // 1.
  const numBookings = bookings.length;

  // 2.
  const sales = bookings.reduce((acc, cur) => acc + cur.totalPrice, 0);

  // 3.
  const checkins = confirmedStays.length;

  // 4.
  const occupation =
    confirmedStays.reduce((acc, cur) => acc + cur.numNights, 0) /
    (numDays * cabinCount);

  return (
    <>
      <PosDiv>
        <Stat
          title="Bookings"
          color="blue"
          icon={<HiOutlineBriefcase />}
          value={numBookings}
        />
      </PosDiv>

      <PosDiv2>
        <Stat
          title="Sales"
          color="green"
          icon={<HiOutlineBanknotes />}
          value={formatCurrency(sales)}
        />
      </PosDiv2>

      <PosDiv>
        <Stat
          title="Check-ins"
          color="indigo"
          icon={<HiOutlineCalendarDays />}
          value={checkins}
        />
      </PosDiv>

      <PosDiv2>
        <Stat
          title="Occupancy rate"
          color="yellow"
          icon={<HiOutlineChartBar />}
          value={Math.round(occupation * 100) + "%"}
        />
      </PosDiv2>
    </>
  );
}

export default Stats;
