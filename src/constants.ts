export const clientId: string     = process.env.CLIENT_ID;
export const clientSecret: string = process.env.CLIENT_SECRET;

export const daysInMsBeforeArtistTracksRefresh: number = 90 * 24 * 3600 * 1000;

export const mainGenres: string[] = [
    "house", "dance", "emo",    "hip hop", "metal",      "r&b",   "rock",  "pop",   "indie",
    "punk",  "house", "soul",   "jazz",    "electronic", "rap",   "trap",  "disco", "techno",
    "edm",   "folk",  "trance", "funk",    "k-pop",      "latin", "reggae"
];

export const regions: Region[] = [
    {display_name : "Americas", name : "am"},
    {display_name : "Asia Pacific", name : "ap"},
    {display_name : "Europe", name : "eu"},
    {display_name : "Middle East/Africa", name : "me"},
];

export const supportedFestivals: Festival[] = [
    {display_name : "Coachella", years : [ 2024, 2023, 2022, 2020 ], name : "coachella", region : "am"},
    {display_name : "Bottlerock", years : [ 2023, 2022, 2021, 2020 ], name : "bottlerock", region : "am"},
    {display_name : "Outside Lands", years : [ 2023, 2022, 2021, 2019 ], name : "osl", region : "am"},
    {display_name : "Bonnaroo", years : [ 2024, 2023, 2022, 2021 ], name : "bonnaroo", region : "am"},
    {display_name : "Hard Summer", years : [ 2021 ], name : "hardsummer", region : "am"},
    {display_name : "The Governor's Ball", years : [ 2024, 2022, 2021 ], name : "govball", region : "am"},
    {display_name : "Ohanafest", years : [ 2021 ], name : "ohana", region : "am"},
    {display_name : "Riot Fest", years : [ 2021 ], name : "riot", region : "am"},
    {display_name : "Firefly", years : [ 2022, 2021 ], name : "firefly", region : "am"},
    {display_name : "Pitchfork", years : [ 2021 ], name : "pitchfork", region : "am"},
    {display_name : "Lollapalooza", years : [ 2023, 2022, 2021 ], name : "lollapalooza", region : "am"},
    {display_name : "Austin City Limits", years : [ 2023, 2022, 2021 ], name : "acl", region : "am"},
    {display_name : "Shaky Knees", years : [ 2022, 2021 ], name : "shaky", region : "am"},
    {display_name : "Electric Zoo", years : [ 2021 ], name : "ezoo", region : "am"},
    {display_name : "III Points", years : [ 2021 ], name : "iii", region : "am"},
    {display_name : "EDC Las Vegas", years : [ 2021 ], name : "edclv", region : "am"},
    {display_name : "EDC Orlando", years : [ 2022 ], name : "edco", region : "am"},
    {display_name : "New Orleans Jazz Fest", years : [ 2022, 2021 ], name : "jazzfest", region : "am"},
    {display_name : "Lightning in a Bottle", years : [ 2023, 2022 ], name : "lib", region : "am"},
    {display_name : "Day N Vegas", years : [ 2021 ], name : "daynvegas", region : "am"},
    {display_name : "Audacy Beach Festival", years : [ 2021 ], name : "audacy", region : "am"},
    {display_name : "Primavera Sound LA", years : [ 2022 ], name : "primaverala", region : "am"},
    {display_name : "This Ain't No Picnic", years : [ 2022 ], name : "picnic", region : "am"},
    {display_name : "Primavera a la Ciutat", years : [ 2022 ], name : "primaveraciutat", region : "eu"},
    {display_name : "CRSSD Spring", years : [ 2024, 2023, 2022 ], name : "crssdspring", region : "am"},
    {display_name : "CRSSD Fall", years : [ 2023 ], name : "crssdfall", region : "am"},
    {display_name : "Okeechobee", years : [ 2023, 2022 ], name : "okeechobee", region : "am"},
    {display_name : "Forecastle", years : [ 2022 ], name : "forecastle", region : "am"},
    {display_name : "Winter Wonder Grass - CA", years : [ 2022 ], name : "wwgtahoe", region : "am"},
    {display_name : "McDowell Mountain Music Festival", years : [ 2022 ], name : "m3f", region : "am"},
    {display_name : "Rolling Loud NY", years : [ 2021 ], name : "rollingloudny", region : "am"},
    {display_name : "Stern Grove Festival", years : [ 2022 ], name : "sterngrove", region : "am"},
    {display_name : "Tomorrowland", years : [ 2022 ], name : "tomorrowland", region : "am"},
    {display_name : "Float Fest", years : [ 2022 ], name : "floatfest", region : "am"},
    {display_name : "Skyline", years : [ 2022 ], name : "skyline", region : "am"},
    {display_name : "Sunset", years : [ 2022 ], name : "sunset", region : "am"},
    {display_name : "Portola", years : [ 2023, 2022 ], name : "portola", region : "am"},
    {display_name : "Day Trip", years : [ 2022 ], name : "daytrip", region : "am"},
    {display_name : "Audiotistic", years : [ 2022 ], name : "audiotistic", region : "am"},
    {display_name : "Above & Beyond Group Therapy - The Gorge", years : [ 2022 ], name : "abgt_gorge", region : "am"},
    {display_name : "Summer Breeze", years : [ 2022 ], name : "summerbreeze", region : "am"},
    {display_name : "Mad Cool", years : [ 2024, 2022 ], name : "madcool", region : "am"},
    {display_name : "NOS Alive", years : [ 2023, 2022 ], name : "nosalive", region : "eu"},
    {display_name : "SonneMondSterne", years : [ 2022 ], name : "sms", region : "eu"},
    {display_name : "End Of The Road", years : [ 2022 ], name : "endoftheroad", region : "eu"},
    {display_name : "All Points East", years : [ 2022 ], name : "allpointseast", region : "eu"},
    {display_name : "Boardmasters", years : [ 2022 ], name : "boardmasters", region : "eu"},
    {display_name : "Camp Bestival", years : [ 2022 ], name : "campbestival", region : "eu"},
    {display_name : "Creamfields", years : [ 2022 ], name : "creamfields", region : "eu"},
    {display_name : "Field Day", years : [ 2022 ], name : "fielddayfestival", region : "eu"},
    {display_name : "Leeds Festival", years : [ 2022 ], name : "leeds", region : "eu"},
    {display_name : "Reading Festival", years : [ 2022 ], name : "reading", region : "eu"},
    {display_name : "Life Is Beautiful", years : [ 2023, 2022 ], name : "lifeisbeautiful", region : "am"},
    {display_name : "Bourbon and Beyond", years : [ 2022 ], name : "bourbonandbeyond", region : "am"},
    {display_name : "When We Were Young", years : [ 2023, 2022 ], name : "wwwy", region : "am"},
    {display_name : "Primavera Sound Barcelona", years : [ 2024, 2023, 2022 ], name : "primavera", region : "eu"},
    {display_name : "Regenerate", years : [ 2023 ], name : "regenerate", region : "am"},
    {display_name : "Envision", years : [ 2023 ], name : "envision", region : "am"},
    {display_name : "All Things Go", years : [ 2023 ], name : "atg", region : "am"},
    {display_name : "Lovers & Friends", years : [ 2023 ], name : "laf", region : "am"},
    {display_name : "Same Same But Different", years : [ 2023 ], name : "ssbd", region : "am"},
    {display_name : "Aftershock", years : [ 2023 ], name : "aftershock", region : "am"},
    {display_name : "Kilby Block Party", years : [ 2024 ], name : "kilby", region : "am"},
    {display_name : "Faster Horses", years : [ 2024 ], name : "horses", region : "am"},
];
