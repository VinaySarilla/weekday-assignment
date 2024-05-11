const getJDList = async () => {
  let bodyContent = JSON.stringify({
    limit: 10,
    offset: 1,
  });

  let response = await fetch(
    "https://api.weekday.technology/adhoc/getSampleJdJSON",
    {
      method: "POST",
      body: bodyContent,
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  let data = await response.json();
  console.log(data);

  return data;
};

export { getJDList };
