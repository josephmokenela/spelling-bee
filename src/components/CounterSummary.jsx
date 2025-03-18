import { useContext, useMemo, useCallback } from "react";
import { CounterContext, TabContext, TabDispatchContext } from "../contexts/context";
import { CounterSummaryHeader } from './CounterSummaryHeader';
import { CounterSummaryDetail } from "./CounterSummaryDetail";

export function CounterSummary() {
    const counterData = useContext(CounterContext);
    const visibleTab = useContext(TabContext);
    const tabDispatch = useContext(TabDispatchContext);
  
    const filteredSortedData = useMemo(() => {
      return counterData.filter((counter) => {
        return counter.tab === visibleTab;
    });
  }, [counterData, visibleTab]);
  
  const setVisibleTab1 =  useCallback((event) => {
    tabDispatch({
      type: 'change-tab',
      tab: 1
    });
    event.preventDefault();
  }, []);
  
  const setVisibleTab2 = useCallback((event) => {
    tabDispatch({
      type: 'change-tab',
      tab: 2
    });
    event.preventDefault();
  }, []);
  
    return (
      <section>
        <CounterSummaryHeader 
        setVisibleTab1={setVisibleTab1} 
        setVisibleTab2={setVisibleTab2} />
        {filteredSortedData.map((counter) => (
          <CounterSummaryDetail 
          key={counter.id} 
          name={counter.name} 
          total={counter.total}/>
        ))}
      </section>
    );
  }