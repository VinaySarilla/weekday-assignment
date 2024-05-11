const getJDList = async () => {
  let response = await fetch(
    "https://api.weekday.technology/adhoc/getSampleJdJSON"
  );
  let data = await response.json();
  return data;
};

export { getJDList };
