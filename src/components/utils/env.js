export const getHost = () =>
    !process.env.NODE_ENV || process.env.NODE_ENV === "development"
      ? "https://jointgoals.vercel.app/"
      : 
      "https://jointgoals.vercel.app/";