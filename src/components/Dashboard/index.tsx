import { TransactionTable } from "../TransactionTable";
import { Container } from "./styles";

export function Dashboard() {
  return (
    <Container>
      <TransactionTable />
    </Container>
  );
}
