import Invited from "./Invited";

export default interface Event {
    id: string;
    alias: string;
    password: string;
    name: string;
    date: Date;
    location: string;
    description: string;
    image: string;
    imageBackground: string;
    expectedAudience: number;
    inviteds: Invited[];
}