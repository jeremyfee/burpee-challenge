export interface BurpeesProps {
  numDays: number;
  start: Date;
}

export function Burpees(props: BurpeesProps) {
  const { numDays, start } = props;
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const dayNumber =
    Math.round((today.getTime() - start.getTime()) / 86400000) + 1;
  const completed = total(1, Math.min(dayNumber + 1, numDays + 1));

  function total(first: number, last: number) {
    var sum = 0;
    for (var i = first; i < last; i++) {
      sum += i;
    }
    return sum;
  }

  return (
    <>
      <h1>Burpee Challenge</h1>

      <dl>
        <dt>
          Today (
          {today.toLocaleString("en-nz", {
            weekday: "long",
            year: "numeric",
            month: "short",
            day: "numeric",
          })}
          )
        </dt>
        <dd>{dayNumber > numDays ? "&ndash;" : dayNumber}</dd>
        <dt>Completed (includes Today)</dt>
        <dd>{completed}</dd>
        <dt>Remaining</dt>
        <dd>{total(dayNumber + 1, numDays + 1)}</dd>
      </dl>
      <p>
        If you miss a day, do <em>Completed</em> to buy back in
      </p>
    </>
  );
}
