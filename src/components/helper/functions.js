const shortenTitle = (title) => {
    const splittedTitle = title.split(" ");
    const newTitle = `${splittedTitle[0]} ${splittedTitle[1]}`;
    return newTitle;
}

export { shortenTitle };