export const getGifs = async(category) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=D6C1d0gJm7tNjnnVGh5Sk5kHr1XUnP9b`;

    const resp = await fetch(url);
    const { data: data } = await resp.json();

    const gifs = data.map(i => {
        return {
            id: i.id,
            title: i.title,
            url: i.images.downsized_medium.url
        }
    });

    return gifs;
}