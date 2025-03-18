import { useContext } from "react";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import { CounterContext } from "../contexts/context";

export function CounterList() {
  const counterData = useContext(CounterContext);
  const updateTitle = useDocumentTitle(
    "Clicks: " +
    counterData
        .map((counter) => {
          return counter.total;
        })
        .join(", ")
  );
  return (
    <section>
      {counterData.map((counter) => (
        <Counter 
        key={counter.id} 
        counter={counter} />
      ))}
    </section>
  );
}