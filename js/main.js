function createGame(image, game, platform, videogame, grade, genre) {
    document.querySelector('#games').innerHTML +=
    `
    <div class="colorizer ${genre}">
        <li class="game">
            <img class="gameImage" src="${image}" alt="Imagem de ${game}">
            <h2>${game}</h2>
            <h3 class="${platform}">${videogame}</h3>
            <div class="star"><img src="./assets/star.svg" alt="Estrela"><strong><span class="rate">${grade}</span><span class="rateOf">/10</span></strong></div>
        </li>
    </div>
    `
    // ${platforms.map((c) => `<h3 class="${c}">${c.toUpperCase()}</h3>`).join('')}
}

function gamesCreated() {
    createGame('https://static-cdn.jtvnw.net/ttv-boxart/29099_IGDB-188x250.jpg',"Bioshock Infinite (2013)",'ps4','Xbox360/PS4','10','fps') +
    createGame('https://static-cdn.jtvnw.net/ttv-boxart/11854_IGDB-188x250.jpg','Crash Bandicoot: Warped (1998)','ps1','PS1','10','platform') +
    createGame('https://static-cdn.jtvnw.net/ttv-boxart/518222_IGDB-188x250.jpg',"Crash Bandicoot 4: It's About Time (2020)",'ps4','PS4/PS5','10','platform') +
    createGame('https://static-cdn.jtvnw.net/ttv-boxart/1122982998_IGDB-188x250.jpg','Dark Souls: Remastered (2011/2018)','ps4','PS4','10','soulslike') +
    createGame('https://static-cdn.jtvnw.net/ttv-boxart/512953_IGDB-188x250.jpg','Elden Ring (2022)','ps4','PS4/PS5','10','soulslike') +
    createGame('https://static-cdn.jtvnw.net/ttv-boxart/8793_IGDB-188x250.jpg','Metal Gear Solid: The Twin Snakes (1998/2004)','gc','NGC','10','stealth') +
    createGame('https://static-cdn.jtvnw.net/ttv-boxart/16582_IGDB-188x250.jpg',"Metal Gear Solid 3: Snake Eater (2004)",'ps2','PS2/Xbox360','10','stealth') +
    createGame('https://static-cdn.jtvnw.net/ttv-boxart/24872_IGDB-188x250.jpg',"Nioh Remastered (2017/2021)",'ps5','PS5','10','soulslike') +
    createGame('https://static-cdn.jtvnw.net/ttv-boxart/506468_IGDB-188x250.jpg',"Nioh 2 Remastered (2020/2021)",'ps5','PS5','10','soulslike') +
    createGame('https://static-cdn.jtvnw.net/ttv-boxart/14766_IGDB-188x250.jpg',"Super Mario Galaxy (2007)",'wii','Wii','10','platform') +
    createGame('https://static-cdn.jtvnw.net/ttv-boxart/24239_IGDB-188x250.jpg',"Super Mario Galaxy 2 (2010)",'wii','Wii','10','platform') +
    createGame('https://static-cdn.jtvnw.net/ttv-boxart/1229_IGDB-188x250.jpg',"Super Mario World (1990)",'snes','Super Nintendo','10','platform') +
    createGame('https://static-cdn.jtvnw.net/ttv-boxart/517585_IGDB-188x250.jpg','UnMetal (2021)','pc','PC','10','stealth indie') +
    createGame('https://static-cdn.jtvnw.net/ttv-boxart/2009742488_IGDB-188x250.jpg',"Bioshock Remastered (2007/2016)",'ps4','PS4','9.75','fps') +
    createGame('https://static-cdn.jtvnw.net/ttv-boxart/7934_IGDB-188x250.jpg',"Crash Bandicoot 2: Cortex Strikes Back (1997)",'ps1','PS1','9.75','platform') +
    createGame('https://static-cdn.jtvnw.net/ttv-boxart/510579_IGDB-188x250.jpg',"Crash Team Racing Nitro-Fueled (2019)",'ps4','PS4','9.75','racing') +
    createGame('https://static-cdn.jtvnw.net/ttv-boxart/490292_IGDB-188x250.jpg',"Dark Souls III (2016)",'ps4','PS4','9.75','soulslike') +
    createGame('https://static-cdn.jtvnw.net/ttv-boxart/1594393054_IGDB-188x250.jpg',"Death Stranding: Director's Cut (2019/2021)",'ps5','PS5','9.75','action') +
    createGame('https://static-cdn.jtvnw.net/ttv-boxart/15483_IGDB-188x250.jpg',"Donkey Kong Country 2: Diddy's Kong Quest (1995)",'snes','Super Nintendo','9.75','platform') +
    createGame('https://static-cdn.jtvnw.net/ttv-boxart/4162_IGDB-188x250.jpg',"Donkey Kong Country 3: Dixie Kong's Double Trouble! (1996)",'snes','Super Nintendo','9.75','platform') +
    createGame('https://static-cdn.jtvnw.net/ttv-boxart/509398_IGDB-188x250.jpg','Kaze and the Wild Masks (2021)','pc','PC','9.75','platform indie') +
    createGame('https://static-cdn.jtvnw.net/ttv-boxart/91419_IGDB-188x250.jpg',"Metal Gear Solid V: The Phantom Pain (2015)",'ps4','PS4','9.75','stealth') +
    createGame('./assets/game-covers/newer-super-mario-bros-wii.JPG',"Newer Super Mario Bros. Wii (Hack ROM)(2013)",'wii','Wii','9.75','platform hackrom') +
    createGame('https://static-cdn.jtvnw.net/ttv-boxart/518019_IGDB-188x250.jpg',"Returnal (2021)",'ps5','PS5','9.75','roguelike') +
    createGame('https://static-cdn.jtvnw.net/ttv-boxart/2692_IGDB-188x250.jpg',"Super Mario 64 (1996)",'n64','N64','9.75','platform') +
    createGame('https://static-cdn.jtvnw.net/ttv-boxart/94073_IGDB-188x250.jpg',"The Binding of Isaac: Rebirth (2014)",'ps4','PS4/PC','9.75','roguelike indie') +
    createGame('https://static-cdn.jtvnw.net/ttv-boxart/2143844298_IGDB-188x250.jpg',"Bioshock 2 Remastered (2010/2016)",'ps4','PS4','9.5','fps') +
    createGame('https://static-cdn.jtvnw.net/ttv-boxart/1667555869_IGDB-188x250.jpg',"Castlevania: Symphony of the Night (1997)",'ps1','PS1','9.5','metroidvania') +
    createGame('https://static-cdn.jtvnw.net/ttv-boxart/492535_IGDB-188x250.jpg',"Celeste (2018)",'pc','PC/PS4','9.5','platform indie') +
    createGame('https://static-cdn.jtvnw.net/ttv-boxart/5682_IGDB-188x250.jpg',"Crash Team Racing (1999)",'ps1','PS1','9.5','racing') +
    createGame('https://static-cdn.jtvnw.net/ttv-boxart/459064_IGDB-188x250.jpg',"Cuphead (2017)",'pc','PC','9.5','platform indie') +
    createGame('https://static-cdn.jtvnw.net/ttv-boxart/165338793_IGDB-188x250.jpg',"Donkey Kong Country (1994)",'snes','Super Nintendo','9.5','platform') +
    createGame('https://static-cdn.jtvnw.net/ttv-boxart/6369_IGDB-188x250.jpg','God of War (2018)','ps4','PS4','9.5','adventure') +
    createGame('https://static-cdn.jtvnw.net/ttv-boxart/666_IGDB-188x250.jpg',"Metal Gear 2: Solid Snake (1990)",'msx','MSX','9.5','stealth') +
    createGame('https://static-cdn.jtvnw.net/ttv-boxart/14805_IGDB-188x250.jpg','Metal Gear Solid (1998)','ps1','PS1','9.5','stealth') +
    createGame('https://static-cdn.jtvnw.net/ttv-boxart/18893_IGDB-188x250.jpg',"Metal Gear Solid 4: Guns of the Patriots (2008)",'ps3','PS3','9.5','stealth') +
    createGame('https://static-cdn.jtvnw.net/ttv-boxart/16791_IGDB-188x250.jpg',"Ratchet & Clank (2016)",'ps4','PS4','9.5','action') +
    createGame('https://static-cdn.jtvnw.net/ttv-boxart/369590_IGDB-188x250.jpg',"Super Mario 3D World (2013)",'wiiU','NWU','9.5','platform') +
    createGame('./assets/game-covers/sr1-star-takeover.jpg',"SM64 Star Revenge 1.5: Star Takeover Redone (Hack ROM)(2020)",'n64','N64','9.5','platform hackrom') +
    createGame('./assets/game-covers/smwcp2-2022.JPG',"Super Mario World Central Production 2 (Hack ROM)(2022)",'snes','Super Nintendo','9.5','platform hackrom') +
    createGame('https://static-cdn.jtvnw.net/ttv-boxart/489642_IGDB-188x250.jpg','Bloodstained: Ritual of the Night (2019)','ps4','PS4','9.25','metroidvania indie') +
    createGame('https://static-cdn.jtvnw.net/ttv-boxart/6756_IGDB-188x250.jpg',"Crash Bandicoot (1996)",'ps1','PS1','9.25','platform') +
    createGame('./assets/game-covers/crash-bandicoot-n-sane-trilogy.jpg',"Crash Bandicoot 1 N. Sane Trilogy (1996/2017)",'ps4','PS4','9.25','platform') +
    createGame('https://static-cdn.jtvnw.net/ttv-boxart/13565_IGDB-188x250.jpg',"Crash Twinsanity (2004)",'ps2','PS2','9.25','platform') +
    createGame('https://static-cdn.jtvnw.net/ttv-boxart/102007682_IGDB-188x250.jpg','God of War Ragnarök (2022)','ps5','PS5','9.25','adventure') +
    createGame('https://static-cdn.jtvnw.net/ttv-boxart/1376327401_IGDB-188x250.jpg',"Horizon Chase Turbo (2018)",'pc','PC/PS4','9.25','racing indie') +
    createGame('https://static-cdn.jtvnw.net/ttv-boxart/8753_IGDB-188x250.jpg','Klonoa: Door to Phantomile (1997)','ps1','PS1','9.25','platform') +
    createGame('https://static-cdn.jtvnw.net/ttv-boxart/24208_IGDB-188x250.jpg',"Metal Gear Rising: Revengeance (2013)",'pc','PC','9.25','action') +
    createGame('https://static-cdn.jtvnw.net/ttv-boxart/24238_IGDB-188x250.jpg',"New Super Mario Bros. Wii (2009)",'wii','Wii','9.25','platform') +
    createGame('https://static-cdn.jtvnw.net/ttv-boxart/59_IGDB-188x250.jpg',"Pac-Man World (1999)",'ps1','PS1','9.25','platform') +
    createGame('https://static-cdn.jtvnw.net/ttv-boxart/518016_IGDB-188x250.jpg',"Ratchet & Clank: Rift Apart (2021)",'ps5','PS5','9.25','action') +
    createGame('https://static-cdn.jtvnw.net/ttv-boxart/725811421_IGDB-188x250.jpg',"Spyro 2: Ripto's Rage Reignited Trilogy (1999/2018)",'ps4','PS4','9.25','platform') +
    createGame('https://static-cdn.jtvnw.net/ttv-boxart/1916268396_IGDB-188x250.jpg',"Spyro: Year of the Dragon Reignited Trilogy (2000/2018)",'ps4','PS4','9.25','platform') +
    createGame('https://static-cdn.jtvnw.net/ttv-boxart/30826_IGDB-188x250.jpg',"Super Mario 3D Land (2011)",'n3ds','3DS','9.25','platform') +
    createGame('./assets/game-covers/sr3.5-vacation-of-cursed-dreams.jpg',"SM64 Star Revenge 3.5: Vacation of Cursed Dreams (Hack ROM)(2018)",'n64','N64','9.25','platform hackrom') +
    createGame('https://static-cdn.jtvnw.net/ttv-boxart/9455_IGDB-188x250.jpg',"Super Mario Bros. 3 All-Stars(1988/1993)",'snes','Super Nintendo','9.25','platform') +
    createGame('https://static-cdn.jtvnw.net/ttv-boxart/31376_IGDB-188x250.jpg',"Terraria (2011)",'pc','Xbox360/PC/PS4','9.25','sandbox indie') +
    createGame('https://static-cdn.jtvnw.net/ttv-boxart/489401_IGDB-188x250.jpg',"Call of Duty: Black Ops III: Zombies (2015)",'ps4','PS4','9','fps') +
    createGame('https://static-cdn.jtvnw.net/ttv-boxart/499856_IGDB-188x250.jpg',"Ghost of Tsushima (2020)",'ps4','PS4','9','adventure') +
    createGame('https://static-cdn.jtvnw.net/ttv-boxart/32982_IGDB-188x250.jpg','Grand Theft Auto V (2013)','ps4','PS4/PS5','9','action') +
    createGame('https://static-cdn.jtvnw.net/ttv-boxart/15104_IGDB-188x250.jpg',"Mega Man 6 (1993)",'nes','NES','9','platform') +
    createGame('https://static-cdn.jtvnw.net/ttv-boxart/11386_IGDB-188x250.jpg',"Metal Gear Solid 2: Sons of Liberty (2001)",'ps2','PS2/Xbox360','9','stealth') +
    createGame('https://static-cdn.jtvnw.net/ttv-boxart/27471_IGDB-188x250.jpg','Minecraft (2011)','pc','PC/PS4','9','sandbox') +
    createGame('https://static-cdn.jtvnw.net/ttv-boxart/31905_IGDB-188x250.jpg',"New Super Mario Bros. U (2012)",'wiiU','NWU','9','platform') +
    createGame('./assets/game-covers/sr4.5-the-kedama-takeover-rewritten.jpg',"SM64 Star Revenge 4.5: The Kedama Takeover Rewritten (Hack ROM)(2016)",'n64','N64','9','platform hackrom') +
    createGame('https://static-cdn.jtvnw.net/ttv-boxart/1885901697_IGDB-188x250.jpg',"Spyro the Dragon Reignited Trilogy (1998/2018)",'ps4','PS4','9','platform') +
    createGame('https://static-cdn.jtvnw.net/ttv-boxart/32207_IGDB-188x250.jpg',"The Binding of Isaac (2011)",'pc','PC','9','roguelike indie') +
    createGame('./assets/game-covers/crash-bandicoot-n-sane-trilogy.jpg',"Crash Bandicoot 2 N. Sane Trilogy (1997/2017)",'ps4','PS4','8.75','platform') +
    createGame('https://static-cdn.jtvnw.net/ttv-boxart/513001_IGDB-188x250.jpg',"Immortals Fenyx Rising (2020)",'ps4','PS4/PS5','8.75','adventure') +
    createGame('https://static-cdn.jtvnw.net/ttv-boxart/6594_IGDB-188x250.jpg',"Klonoa 2: Lunatea's Veil (2001)",'ps2','PS2','8.75','platform') +
    createGame('https://static-cdn.jtvnw.net/ttv-boxart/7457_IGDB-188x250.jpg',"Mega Man 4 (1991)",'nes','NES','8.75','platform') +
    createGame('https://static-cdn.jtvnw.net/ttv-boxart/67834_IGDB-188x250.jpg',"Metal Gear Solid V: Ground Zeroes (2014)",'ps4','PS4','8.75','stealth') +
    createGame('https://static-cdn.jtvnw.net/ttv-boxart/518020_IGDB-188x250.jpg','Sackboy: A Big Adventure (2020)','ps4','PS4/PS5','8.75','platform') +
    createGame('https://static-cdn.jtvnw.net/ttv-boxart/497349_IGDB-188x250.jpg',"The End is Nigh (2017)",'pc','PC','8.75','platform indie') +
    createGame('https://static-cdn.jtvnw.net/ttv-boxart/490372_IGDB-188x250.jpg',"Trackmania Turbo (2016)",'ps4','PS4','8.75','racing') +
    createGame('https://static-cdn.jtvnw.net/ttv-boxart/496960_IGDB-188x250.jpg',"Assassin's Creed Origins (2017)",'ps4','PS4','8.5','adventure') +
    createGame('https://static-cdn.jtvnw.net/ttv-boxart/69_IGDB-188x250.jpg',"Crash Bandicoot: The Wrath of Cortex (2001)",'ps2','PS2','8.5','platform') +
    createGame('https://static-cdn.jtvnw.net/ttv-boxart/2087_IGDB-188x250.jpg',"Crash Nitro Kart (2003)",'gc','NGC','8.5','racing') +
    createGame('https://static-cdn.jtvnw.net/ttv-boxart/19499_IGDB-188x250.jpg',"Crash Tag Team Racing (2005)",'ps2','PS2/PSP','8.5','racing') +
    createGame('https://static-cdn.jtvnw.net/ttv-boxart/988100999_IGDB-188x250.jpg',"Demon's Souls (2009/2020)",'ps5','PS5','8.5','soulslike') +
    createGame('https://static-cdn.jtvnw.net/ttv-boxart/488632_IGDB-188x250.jpg',"Enter the Gungeon (2016)",'ps4','PS4','8.5','roguelike indie') +
    createGame('https://static-cdn.jtvnw.net/ttv-boxart/418063_IGDB-188x250.jpg',"Five Nights at Freddy's (2014)",'pc','PC','8.5','horror indie') +
    createGame('https://static-cdn.jtvnw.net/ttv-boxart/15477_IGDB-188x250.jpg',"Hogs of War (2000)",'ps1','PS1/PC','8.5','strategy') +
    createGame('https://static-cdn.jtvnw.net/ttv-boxart/518015_IGDB-188x250.jpg',"Horizon Forbidden West (2022)",'ps4','PS4/PS5','8.5','adventure') +
    createGame('https://static-cdn.jtvnw.net/ttv-boxart/490374_IGDB-188x250.jpg',"Horizon Zero Dawn (2017)",'ps4','PS4','8.5','adventure') +
    createGame('https://static-cdn.jtvnw.net/ttv-boxart/489398_IGDB-188x250.jpg','Klonoa (1997/2008)','wii','Wii','8.5','platform') +
    createGame('https://static-cdn.jtvnw.net/ttv-boxart/28577_IGDB-188x250.jpg',"Mario vs Donkey Kong: Mini-Land Mayhem! (2010)",'nds','NDS','8.5','strategy') +
    createGame('https://static-cdn.jtvnw.net/ttv-boxart/1124_IGDB-188x250.jpg',"Mega Man 5 (1992)",'nes','NES','8.5','platform') +
    createGame('https://static-cdn.jtvnw.net/ttv-boxart/7001_IGDB-188x250.jpg',"Mortal Kombat: Shaolin Monks (2005)",'ps2','PS2','8.5','action') +
    createGame('https://static-cdn.jtvnw.net/ttv-boxart/11831_IGDB-188x250.jpg',"Pac-Man World 3 (2005)",'ps2','PS2/PC/PSP','8.5','platform') +
    createGame('https://static-cdn.jtvnw.net/ttv-boxart/11585_IGDB-188x250.jpg',"Robots (2005)",'pc','PC/PS2','8.5','platform') +
    createGame('https://static-cdn.jtvnw.net/ttv-boxart/513459_IGDB-188x250.jpg',"Songs for a Hero (2016)",'pc','PC','8.5','platform indie') +
    createGame('https://static-cdn.jtvnw.net/ttv-boxart/22720_IGDB-188x250.jpg',"Super Meat Boy (2010)",'pc','Xbox360/PC/PS4','8.5','platform indie') +
    createGame('https://static-cdn.jtvnw.net/ttv-boxart/10023_IGDB-188x250.jpg',"Hot Wheels: Stunt Track Challenge (2004)",'pc','PC/PS2','8.25','racing') +
    createGame('https://static-cdn.jtvnw.net/ttv-boxart/12870_IGDB-188x250.jpg',"Mega Man 2 (1988)",'nes','NES','8.25','platform') +
    createGame('./assets/game-covers/new-super-mario-world-1-the-twelve-magic-orbs-2016.jpg',"New Super Mario World 1: The Twelve Magic Orbs (Hack ROM)(2016)",'snes','Super Nintendo','8.25','platform hackrom') +
    createGame('https://static-cdn.jtvnw.net/ttv-boxart/28593_IGDB-188x250.jpg',"Paper Mario: Sticker Star (2012)",'n3ds','3DS','8.25','rpg') +
    createGame('https://static-cdn.jtvnw.net/ttv-boxart/9786_IGDB-188x250.jpg',"Predator: Concrete Jungle (2005)",'ps2','PS2','8.25','action') +
    createGame('https://static-cdn.jtvnw.net/ttv-boxart/133423_IGDB-188x250.jpg',"Sniper Elite III (2014)",'ps4','PS4','8.25','stealth') +
    createGame('https://static-cdn.jtvnw.net/ttv-boxart/506235_IGDB-188x250.jpg',"Team Sonic Racing (2019)",'ps4','PS4','8.25','racing') +
    createGame('./assets/game-covers/crash-bandicoot-n-sane-trilogy.jpg',"Crash Bandicoot 3 N. Sane Trilogy (1998/2017)",'ps4','PS4','8','platform') +
    createGame('https://static-cdn.jtvnw.net/ttv-boxart/488559_IGDB-188x250.jpg',"Five Nights at Freddy's 2 (2014)",'pc','PC','8','horror indie') +
    createGame('https://static-cdn.jtvnw.net/ttv-boxart/13220_IGDB-188x250.jpg',"Pac-Man Fever (2002)",'ps2','PS2/NGC','8','party') +
    createGame('https://static-cdn.jtvnw.net/ttv-boxart/12975_IGDB-188x250.jpg',"Pac-Man World Rally (2006)",'ps2','PS2/NGC/PSP','8','racing') +
    createGame('./assets/game-covers/sr2-to-the-moon.jpg',"SM64 Star Revenge 2: Act 1: To The Moon (Hack ROM)(2017)",'n64','N64','8','platform hackrom') +
    createGame('https://static-cdn.jtvnw.net/ttv-boxart/491769_IGDB-188x250.jpg',"Sniper Elite 4 (2017)",'ps4','PS4','8','stealth') +
    createGame('https://static-cdn.jtvnw.net/ttv-boxart/1200871695_IGDB-188x250.jpg',"The Last of Us Remastered (2013/2014)",'ps4','PS4','8','action') +
    createGame('https://static-cdn.jtvnw.net/ttv-boxart/26821_IGDB-188x250.jpg',"VVVVVV (2010)",'pc','PC','8','platform indie') +
    createGame('https://static-cdn.jtvnw.net/ttv-boxart/15593_IGDB-188x250.jpg',"Warzone 2100 (1999/2004)",'pc','PC','8','strategy') +
    createGame('https://static-cdn.jtvnw.net/ttv-boxart/14625_IGDB-188x250.jpg',"Crash Bash (2000)",'ps1','PS1','7.75','party') +
    createGame('https://static-cdn.jtvnw.net/ttv-boxart/94884_IGDB-188x250.jpg',"Hotline Miami 2: Wrong Number (2015)",'ps4','PS4','7.75','action indie') +
    createGame('https://static-cdn.jtvnw.net/ttv-boxart/6139_IGDB-188x250.jpg',"Metal Gear (1987)",'msx','MSX','7.75','stealth') +
    createGame('https://static-cdn.jtvnw.net/ttv-boxart/10263_IGDB-188x250.jpg',"Kao the Kangaroo: Round 2 (2003/2019)",'pc','PC','7.75','platform') +
    createGame('https://static-cdn.jtvnw.net/ttv-boxart/7534_IGDB-188x250.jpg',"New Super Mario Bros. (2006)",'nds','NDS','7.75','platform') +
    createGame('https://static-cdn.jtvnw.net/ttv-boxart/18453_IGDB-188x250.jpg',"Pac-Man World 2 (2002)",'ps2','PS2/PC/NGC','7.75','platform') +
    createGame('https://static-cdn.jtvnw.net/ttv-boxart/493651986_IGDB-188x250.jpg',"Disney's Donald Duck: Goin' Quackers (2000)",'ps1','PS1','7.5','platform') +
    createGame('https://static-cdn.jtvnw.net/ttv-boxart/497385_IGDB-188x250.jpg',"Dragon Ball Fighter Z (2019)",'ps4','PS4','7.5','fighting') +
    createGame('https://static-cdn.jtvnw.net/ttv-boxart/66254_IGDB-188x250.jpg',"Hotline Miami (2012)",'ps4','PS4','7.5','action indie') +
    createGame('https://static-cdn.jtvnw.net/ttv-boxart/505371_IGDB-188x250.jpg',"Marvel's Spider Man (2018)",'ps4','PS4/PS5','7.5','action') +
    createGame('https://static-cdn.jtvnw.net/ttv-boxart/4133_IGDB-188x250.jpg',"Mega Man 3 (1990)",'nes','NES','7.5','platform') +
    createGame('https://static-cdn.jtvnw.net/ttv-boxart/34158_IGDB-188x250.jpg',"New Super Mario Bros. 2 (2012)",'n3ds','3DS','7.5','platform') +
    createGame('https://static-cdn.jtvnw.net/ttv-boxart/492934_IGDB-188x250.jpg',"Resident Evil 7: Biohazard (2017)",'ps4','PS4','7.5','horror') +
    createGame('https://static-cdn.jtvnw.net/ttv-boxart/34257_IGDB-188x250.jpg',"Sonic & All-Stars Racing Transformed (2012)",'pc','PC','7.5','racing') +
    createGame('https://static-cdn.jtvnw.net/ttv-boxart/494552_IGDB-188x250.jpg',"The Last of Us Part II (2020)",'ps4','PS4','7.5','action') +
    createGame('https://static-cdn.jtvnw.net/ttv-boxart/332_IGDB-188x250.jpg',"Crash Bandicoot 2: N-Tranced (2003)",'gba','GBA','7.25','platform') +
    createGame('https://static-cdn.jtvnw.net/ttv-boxart/488818_IGDB-188x250.jpg',"Five Nights at Freddy's 3 (2015)",'pc','PC','7.25','horror indie') +
    createGame('https://static-cdn.jtvnw.net/ttv-boxart/509508_IGDB-188x250.jpg',"Super Mario Bros. All-Stars (1985-1993)",'snes','Super Nintendo','7.25','platform') +
    createGame('https://static-cdn.jtvnw.net/ttv-boxart/7785_IGDB-188x250.jpg',"Power Rangers: Lightspeed Rescue (2000)",'ps1','PS1','7.25','action') +
    createGame('https://static-cdn.jtvnw.net/ttv-boxart/497388_IGDB-188x250.jpg',"A Way Out (2018)",'ps4','PS4','7','adventure') +
    createGame('https://static-cdn.jtvnw.net/ttv-boxart/313256_IGDB-188x250.jpg',"Broforce (2014)",'ps4','PS4','7','action indie') +
    createGame('https://static-cdn.jtvnw.net/ttv-boxart/1634139700_IGDB-188x250.jpg',"Super Chicken Jumper (2021)",'pc','PC','7','action indie') +
    createGame('https://static-cdn.jtvnw.net/ttv-boxart/7009_IGDB-188x250.jpg',"Crash Bandicoot: The Huge Adventure (2002)",'gba','GBA','6.75','platform') +
    createGame('https://static-cdn.jtvnw.net/ttv-boxart/20776_IGDB-188x250.jpg',"M&M's Shell Shocked (2001)",'ps1','PS1','6.75','platform') +
    createGame('https://static-cdn.jtvnw.net/ttv-boxart/476396_IGDB-188x250.jpg',"Super Meat Boy Forever (2020)",'ps4','PS4','6.75','platform indie') +
    createGame('https://static-cdn.jtvnw.net/ttv-boxart/460129_IGDB-188x250.jpg',"20XX (2014)",'pc','PC','6.5','roguelike indie') +
    createGame('https://static-cdn.jtvnw.net/ttv-boxart/356182331_IGDB-188x250.jpg',"Gran Turismo Sport (2017)",'ps4','PS4','6.5','racing') +
    createGame('https://static-cdn.jtvnw.net/ttv-boxart/4815_IGDB-188x250.jpg',"Mega Man (1987)",'nes','NES','6.5','platform') +
    createGame('https://static-cdn.jtvnw.net/ttv-boxart/19008_IGDB-188x250.jpg',"Crash: Mind Over Mutant (2008)",'ps2','PS2','6','platform') +
    createGame('https://static-cdn.jtvnw.net/ttv-boxart/33862_IGDB-188x250.jpg',"Bloody Trapland (2013)",'pc','PC','5.5','platform indie') +
    createGame('https://static-cdn.jtvnw.net/ttv-boxart/7021_IGDB-188x250.jpg',"Crash of the Titans (2007)",'ps2','PS2','5.5','platform') +
    createGame('https://static-cdn.jtvnw.net/ttv-boxart/1544517229_IGDB-188x250.jpg',"Super Mario Bros. 2 All-Stars (1988/1993)",'snes','Super Nintendo','5.5','platform') +
    createGame('https://static-cdn.jtvnw.net/ttv-boxart/671_IGDB-188x250.jpg',"Crash Bandicoot Purple: Ripto's Rampage (2004)",'gba','GBA','4.5','adventure')
}

gamesCreated()

    let gamesCount = document.getElementsByClassName('game').length

    document.querySelector('#count').innerHTML +=
    `<h1 id="gamesCount">Total de Jogos Avaliados: ${gamesCount} jogos </h1>`