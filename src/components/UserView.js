import {CompanyView} from "./CompanyView";

export const UserView = user => `
        <a href="#">${user.getFullName()}</a>
        <div class="user-details hide">
            <p>Birthday: ${user.getBirthDay()}</p>
            <p><img src="" width="100px"></p>
            ${user.company ? CompanyView(user.company) : null}
        </div>
    `;