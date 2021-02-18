import usersData from '../../data/users';
import Company from "./Company";

export default class User {
    constructor(id) {
        const data = usersData.find(i => i.id === id);

        this._id = data.id;
        this._firstName = data.first_name;
        this._lastName = data.last_name;
        this._gender = data.gender;
        this._birthday = data.birthday;
        this._avatar = data.avatar;
        this._company = new Company(data.company_id);
    }

    get id() {
        return this._id;
    }

    get firstName() {
        return this._firstName;
    }

    get lastName() {
        return this._lastName;
    }

    get gender() {
        return this._gender;
    }

    get birthday() {
        return this._birthday;
    }

    get avatar() {
        return this._avatar;
    }

    get company() {
        return this._company;
    }

    getFullName() {
        return `${this._gender === 'Male' ? 'Mr.' : 'Ms.'} ${this._firstName} ${this._lastName}`;
    }

    getBirthDay() {
        return this._birthday !== null ? new Date(parseInt(this._birthday)).toLocaleDateString() : '';
    }
}