export class Statistics {
    constructor(orders) {
        this.orders = orders;

        this.maleChecks = [];
        this.femaleChecks = [];
        this.allChecks = this.orders.map(i => parseFloat(i.total));
        this.orders.forEach(i => i.user.gender === 'Male' ? this.maleChecks.push(parseFloat(i.total)) : this.femaleChecks.push(parseFloat(i.total)))
    }

    getTotalValue(values) {
        if (values.length > 0) {
            return values.reduce((acc, curr) => acc + curr).toFixed(2);
        } else {
            return null;
        }
    }

    getMedianValue(values) {
        if(values.length ===0) return 0;

        values.sort(function(a,b){
            return a-b;
        });

        const half = Math.floor(values.length / 2);

        if (values.length % 2)
            return values[half];

        return (values[half - 1] + values[half]) / 2.0;
    }

    getAverage(values) {
        if (values.length > 0) {
            return (this.getTotalValue(values) / values.length).toFixed(2);
        } else {
            return null;
        }
    }

    render() {
        return (`
        <tr>
            <td>Orders Count</td>
            <td colspan="6">${this.orders.length || 'n/a'}</td>
        </tr>
        <tr>
            <td>Orders Total</td>
            <td colspan="6">$ ${this.getTotalValue(this.allChecks) || 'n/a'}</td>
        </tr>
        <tr>
            <td>Median Value</td>
            <td colspan="6">$ ${this.getMedianValue(this.allChecks) || 'n/a'}</td>
        </tr>
        <tr>
            <td>Average Check</td>
            <td colspan="6">$ ${this.getAverage(this.allChecks) || 'n/a'}</td>
        </tr>
        <tr>
            <td>Average Check (Female)</td>
            <td colspan="6">$ ${this.getAverage(this.femaleChecks) || 'n/a'}</td>
        </tr>
        <tr>
            <td>Average Check (Male)</td>
            <td colspan="6">$ ${this.getAverage(this.maleChecks) || 'n/a'}</td>
        </tr>
        `)
    }
}