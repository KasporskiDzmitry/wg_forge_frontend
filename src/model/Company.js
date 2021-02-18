import companiesData from '../../data/companies';

export default class Company {
    constructor(id) {
        if (!id) {
            // throw new Error('NO COMPANY DATA');
            return null;
        }

        const data = companiesData.find(i => i.id === id);

        this._id = data.id;
        this._title = data.title;
        this._industry = data.industry;
        this._marketCap = data.market_cap;
        this._sector = data.sector;
        this._url = data.url;
    }


    get id() {
        return this._id;
    }

    get title() {
        return this._title;
    }

    get industry() {
        return this._industry;
    }

    get marketCap() {
        return this._marketCap;
    }

    get sector() {
        return this._sector;
    }

    get url() {
        return this._url;
    }
}