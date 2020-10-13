const apiList = {
  income: { method: "POST", url: "income/add" },
};

export const Rough = {
  addRough: { method: "POST", url: "/rough/create" },
  getRough: { method: "GET", url: "/rough/view" },
  getRoughPrefrence: { method: "GET", url: "/common/getList" },
  getSortingData: { method: "GET", url: "/rough/sorting/view" },
  addSortingData: { method: "POST", url: "/rough/sorting/create" },
};

export const Office = {
  assignOffice: { method: "POST", url: "/office/create" },
  getOffice: { method: "GET", url: "/office/view" },
  // getRough: { method: "GET", url: "/rough/view" },
  // getRoughPrefrence: { method: "GET", url: "/common/getList" },
  // getSortingData: { method: "GET", url: "/rough/sorting/view" },
  // addSortingData: { method: "POST", url: "/rough/sorting/create" },
};

// export const addQueryID = (url, id) => `${url}/${id}`;

export default apiList;
