import {UserView} from "./UserView";

export const OrderView = order => `
        <tr id="order_${order.id}">
            <td>${order.id}</td>
            <td class="user_data">${UserView(order.user)}</td>
            <td>${order.getFormattedDate()}</td>
            <td>$${order.total}</td>
            <td>${order.getHiddenCardNumber()}</td>
            <td>${order.cardType}</td>
            <td>${order.orderCountry} (${order.orderIp})</td>
        </tr>
`;
