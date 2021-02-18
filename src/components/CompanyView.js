export const CompanyView = company => {
    return company
        ?
        `<p>Company: <a href="${company.url}" target="_blank">${company.title}</a></p>
         <p>Industry: ${company.industry}</p>`
        : '';
};