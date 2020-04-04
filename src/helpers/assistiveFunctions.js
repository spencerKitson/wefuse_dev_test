var month = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
];


// Format date to Month(shortname) day(date), year(full) - June 22, 2020
export function formatDate(date){
  const d = new Date(date);
  console.log(month[d.getMonth()], d.getDay(), d.getYear());
  return `${month[d.getMonth()]} ${d.getDay()}, ${d.getFullYear()}`
};
