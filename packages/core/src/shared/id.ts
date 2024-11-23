import { v4 as uuid, validate } from "uuid";


export default class Id {
    static new(): string {
        return uuid();
      }
    
      static validateId(id: string): boolean {
        return validate(id);
      }
}

for (let index = 0; index < 100; index++) {
  console.log(Id.new())
}