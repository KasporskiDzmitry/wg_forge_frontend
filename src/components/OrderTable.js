import {Statistics} from "./Statistics";
import {OrderList} from "./OrderList";

export const OrderTable = () => {
    const orderList = new OrderList();
    let orders;
    let sortedBy;

    const table = document.createElement('table');
    table.classList.add('table', 'table-bordered', 'table-hover');
    table.innerHTML = `
                <thead class="thead-dark">
                    <tr>
                        <th>Search:</th>
                        <th colspan="6"><input type="text" id="search"></th>
                    </tr>
                    <tr>
                        <th>Transaction ID</th>
                        <th>User Info</th>
                        <th>Order Date</th>
                        <th>Order Amount</th>
                        <th>Card Number</th>
                        <th>Card Type</th>
                        <th>Location</th>
                    </tr>
                </thead>
                <tfoot>${new Statistics(orderList.orders).render()}</tfoot>
                <tbody>${orderList.render(orders)}</tbody>
`;

    const thead = table.querySelector('thead');
    const search = thead.querySelector('#search');
    const tbody = table.querySelector('tbody');
    const tfoot = table.querySelector('tfoot');
    const span = document.createElement('span');
    span.innerHTML = '&#8595;';

    thead.getElementsByTagName('tr')[1].addEventListener('click', e => {
        if (e.target.innerText !== 'Card Number') {
            sortedBy = e.target.innerText;
            orderList.sort(orders, sortedBy);
            tbody.innerHTML = orderList.render(orders);
            e.target.appendChild(span);
        }
    });

    search.addEventListener('input', e => {
        orders = orderList.search(e.target.value);
        orderList.sort(orders, sortedBy);
        tbody.innerHTML = orderList.render(orders);
        tfoot.innerHTML = new Statistics(orders).render();
        setUserClickHandlers();
    });

    function setUserClickHandlers() {
        tbody.querySelectorAll('a').forEach(i => i.addEventListener('click', e => {
            e.preventDefault();
            const userDetails = e.target.nextElementSibling;
            userDetails.classList.contains('hide') ? userDetails.classList.remove('hide') : userDetails.classList.add('hide');
        }));
    }

    setUserClickHandlers();
    return table;
};
