import {faker} from "@faker-js/faker";
import {Mappable} from "./CustomMap";

export class User implements Mappable{
    name: string;
    location: {
        lat: number;
        lng: number;
    }
    color = 'red';
    constructor() {
        this.name = faker.name.firstName();
        this.location = {
            lat: parseFloat(String(faker.address.latitude())),
            lng: parseFloat(String(faker.address.longitude()))
        }
    }

    markerContent(): string {
        return `User Name: ${this.name}`;
    }


}