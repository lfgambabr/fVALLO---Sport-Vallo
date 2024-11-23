export default interface Invited {
    id: string;
    name: string;
    email: string;
    confirmed: boolean;
    hasCompanion: boolean;
    qtCompanions: number;
}