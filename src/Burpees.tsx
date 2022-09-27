const LOCALE = "en-nz";
const OPTIONS: Intl.DateTimeFormatOptions = {
  weekday: "long",
  year: "numeric",
  month: "short",
  day: "numeric",
};

export interface BurpeesProps {
  numDays: number;
  start: Date;
}


export function Burpees(props: BurpeesProps) {
  const { numDays, start } = props;
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const end = new Date(start.getTime() + numDays * 86400000);
  const dayNumber =
    Math.round((today.getTime() - start.getTime()) / 86400000) + 1;
  const completed = total(1, Math.min(dayNumber + 1, numDays + 1));
  const remaining = total(dayNumber + 1, numDays + 1);

  return (
    <>
      <h1>Burpee Challenge</h1>
      <small>
        Starting {start.toLocaleDateString(LOCALE, OPTIONS)},
        +1 burpee each day for {numDays} days.<br/>
      </small>

      <dl>
        <dt>
          Today (
          {today.toLocaleDateString(LOCALE, OPTIONS)}
          )
        </dt>
        <dd>{dayNumber > numDays ? "&ndash;" : dayNumber}</dd>
        <dt>Completed (includes Today)</dt>
        <dd>{completed}</dd>
        <dt>Remaining</dt>
        <dd>{remaining}</dd>
      </dl>
      <p>
        If you miss a day, do <em>Completed</em> to buy back in.
      </p>
    </>
  );

  function total(first: number, last: number) {
    var sum = 0;
    for (var i = first; i < last; i++) {
      sum += i;
    }
    return sum;
  }
}
