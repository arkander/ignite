export const smallImage = (imagePath, size)=>{
    const image = imagePath.match(/media\/screenshots/) ?
                imagePath.replace('media/screeshots',`/media/resize/${size}/-/screenshots`) :
                imagePath.replace('media/games',`media/resize/${size}/-/games`) ;
    return image;
}