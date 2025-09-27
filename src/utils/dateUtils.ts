export const formatDate = (date: Date | null): string => {
  if (!date) return "";
  return date.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
};

export const formatDateRange = (
  dateRange: [Date | null, Date | null]
): string => {
  const [startDate, endDate] = dateRange;
  if (!startDate || !endDate) return "";
  return `${formatDate(startDate)} - ${formatDate(endDate)}`;
};
