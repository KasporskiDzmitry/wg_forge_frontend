import {OrderView} from "./OrderView";
import ordersData from '../../data/orders';
import Order from "../model/Order";

export class OrderList {
    constructor() {
        this._orders = ordersData.map(i => new Order(i));
    }

    get orders() {
        return this._orders;
    }

    set orders(value) {
        this._orders = value;
    }

    sort(values = this.orders, type) {
        return values.sort((a, b) => {
            let result;

            switch (type) {
                case 'Transaction ID': {
                    return a.id - b.id;
                }
                case 'User Info': {
                    result = a.user.firstName.localeCompare(b.user.firstName);
                    return result !== 0 ? result : a.user.lastName.localeCompare(b.user.lastName);
                }
                case 'Order Date': {
                    return a.createdAt - b.createdAt;
                }
                case 'Order Amount': {
                    return a.total - b.total;
                }
                case 'Card Type': {
                    return a.cardType.localeCompare(b.cardType);
                }
                case 'Location': {
                    result = a.orderCountry.localeCompare(b.orderCountry);
                    return result !== 0 ? result : a.orderIp.localeCompare(a.orderIp);
                }
            }
        })
    }

    render(values = this.orders) {
        return values.map(i => OrderView(i)).join('');
    }

    search(value) {
        const regexp = new RegExp(value, 'i')
        return this.orders.filter(i => (
            i.user.firstName.match(regexp) ||
            i.user.lastName.match(regexp) ||
            i.total.match(regexp) ||
            i.cardType.match(regexp) ||
            i.orderCountry.match(regexp) ||
            i.orderIp.match(regexp)
        ))

    }
}