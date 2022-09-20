export const leaderboard: Leaderboard[] = [
    {
        name: "Eri | Cpacity",
        profilePictureURL: "https://cdn.discordapp.com/avatars/471069775142060047/9830f6b9780012d2e0152fcccf6e3763.webp?size=80",
        timeStarted: "2022-09-20T20:09:00.000Z",
        timeEnded: "2022-09-13T17:00:00.000Z",
    },
]

export const config = {
    avatarURL: "https://cdn.discordapp.com/avatars/",
}

export interface Leaderboard{
    name: string, // Name of the Account
    profilePictureURL: string, // Profile Picture URL from Discord CDN
    timeStarted: string, // Timestamp of the beginning in UCT+0 (GMT)
    timeEnded?: string, // Timestamp of the end in UCT+0 (GMT)
}