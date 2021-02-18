import User from "./User";

export default class Order {
    constructor(data) {
        this._id = data.id;
        this._transactionId = data.transaction_id;
        this._createdAt = data.created_at;
        this._user = new User(data.user_id);
        this._total = data.total;
        this._cardType = data.card_type;
        this._cardNumber = data.card_number;
        this._orderCountry = data.order_country;
        this._orderIp = data.order_ip;
    }

    get id() {
        return this._id;
    }

    get transactionId() {
        return this._transactionId;
    }

    get createdAt() {
        return this._createdAt;
    }

    getFormattedDate() {
        return new Date(parseInt(this._createdAt)).toLocaleString("en-US");
    }

    get user() {
        return this._user;
    }

    get total() {
        return this._total;
    }

    get cardType() {
        return this._cardType;
    }

    get cardNumber() {
        return this._cardNumber;
    }

    getHiddenCardNumber() {
        let output = '';

        for (let i = 0; i < this._cardNumber.length; i++) {
            if (i < 2 || i > this._cardNumber.length - 5) {
                output += this._cardNumber.charAt(i);
            } else {
                output += "*";
            }
        }
        return output;
    }

    get orderCountry() {
        return this._orderCountry;
    }

    get orderIp() {
        return this._orderIp;
    }
}