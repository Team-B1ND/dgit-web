export const queryString = (queryString: string) => {
  const result = queryString
    .split("?")[1]
    .split("&")
    .map((s) => ({ [s.split("=")[0]]: s.split("=")[1] }))
    .reduce((p, c) => ({ ...p, ...c }), {});

  return result;
};
