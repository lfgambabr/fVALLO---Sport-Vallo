export default class Password {
    static create(size: number = 8): string {
        const lowLetters = 'abcdefghijklmnopqrstuvxz'
        const uppLetters = lowLetters.toLocaleUpperCase();
        const numbers = "0123456789";
        const special = "!@#$%&*";

        const groups = [lowLetters, uppLetters, numbers, special];
        const password = [];

        for (let i = 0; i < size; i++) {
            const group = groups[Math.floor(Math.random() * groups.length)];
            password.push(group[Math.floor(Math.random() * group.length)]);
        }

        return password.join("");
    }
}

console.log(Password.create());