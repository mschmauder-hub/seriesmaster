export async function getMyShows(list) {
  try {
    const response = await fetch(
      `https://seriesmaster2020.herokuapp.com/api/user/1/${list}`
    );

    const data = await response.json();

    console.log(data);

    return data;
  } catch (error) {
    console.log(error);
  }
}
