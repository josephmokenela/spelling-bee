import { memo } from "react";

export const CounterSummaryDetail = memo(function CounterSummaryDetail({ name, total }) {
    const cName = {...name, shortName: name.shortName + ':'};
    return (
      <p>
        {cName.shortName} ({total})
      </p>
    );
  });