export const getCategories = async () => {
  const data = await fetch('https://api.spotify.com/v1/browse/categories?limit=50', {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  });
  const jsonData = await data.json();

  console.log(jsonData);
  const {
    categories: { items = {} }
  } = jsonData;

  const refData = items.map((cat) => {
    return { catName: cat.name, catId: cat.id, image: cat.icons[0].url };
  });
  return refData;
};
np;
getCategories();
