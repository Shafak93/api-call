const getData = async () => {
  const url = "http://demo2211087.mockable.io/mock";
  const res = await fetch(url, {
    method: "POST",
    headers: { "content-type": "application/json" },
  });
  const json = await res.json();
  const companies = json.companies;
  //   console.log(companies);
  return companies;
};
export default getData;
