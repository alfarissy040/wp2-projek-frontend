export const formatter = new Intl.NumberFormat("ID", {
    style: "currency",
    currency: "IDR",
    maximumSignificantDigits: 3,
});

export const baseUrl = import.meta.env.VITE_BASE_URL;
