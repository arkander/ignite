const base_url = 'https://api.rawg.io/api/';

const getCurrentMonth = ()=>{
    const month = new Date().getMonth() + 1;
    return month < 10 ? `0${month}` : month;
}

const getCurrentDay = ()=>{
    const day = new Date().getDate() ;
    return day < 10 ? `0${day}` : day;
}

const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();

const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

//api url for games
const popular_games = `games?dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;
const upcoming_games = `games?dates=${currentDate},${nextYear}&ordering=-added&page_size=10`;
const newGames = `games?dates=${lastYear},${currentDate}&ordering=-released&page_size=10`;




export const popularGamesURL = ()=>`${base_url}${popular_games}`;
export const upcomingGamesURL = ()=>`${base_url}${upcoming_games}`;
export const newGamesURL = ()=>`${base_url}${newGames}`;
export const gameDetailURL = (gameId)=>`${base_url}games/${gameId}`;
export const gameScreenshotURL = (gameId)=>`${base_url}games/${gameId}/screenshots`;

export const searchGameURL =  (gameName)=>`${base_url}games?search=${gameName}`;