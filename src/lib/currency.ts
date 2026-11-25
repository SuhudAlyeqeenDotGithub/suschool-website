export const makeHumanReadable = (
  amount: unknown,
  currency: "USD" | "NGN" | "GBP",
) => {
  const numericAmount = Number(amount);
  const safeAmount = Number.isFinite(numericAmount) ? numericAmount : 0;
  const currencySymbols = {
    USD: "$",
    NGN: "NGN ",
    GBP: "GBP ",
  };

  return `${currencySymbols[currency]}${safeAmount.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;
};