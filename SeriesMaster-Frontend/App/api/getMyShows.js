export async function getMyShows(list) {
  try {
    const response = await fetch(
      `https://seriesmaster2020.herokuapp.com/api/users/1/${list}`
    );

    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function postMyList(list, id) {
  try {
    await fetch(
      `https://seriesmaster2020.herokuapp.com/api/users/1/${list}/${id}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.log(error);
  }
}
