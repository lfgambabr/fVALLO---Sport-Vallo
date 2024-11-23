export default class Alias {
    static format(token: string): string {
        return token.replace(/ /g, "-").toLocaleLowerCase();
    }
}