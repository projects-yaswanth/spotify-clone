export const getCategories = async () => {
  const data = await fetch('https://api.spotify.com/v1/browse/categories?limit=50', {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  });

  const jsonData = await data.json();
  const {
    categories: { items = {} }
  } = jsonData;

  const refData = items.map((cat) => {
    return { catName: cat.name, catId: cat.id, image: cat.icons[0].url };
  });

  return refData;
};

export const searchItems = async (name) => {
  const data = await fetch(`https://api.spotify.com/v1/search?q=${name}&type=track%2Calbum&limit=50`, {
    method: 'Get',
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  });
  const jsonData = await data.json();

  return jsonData;
};
