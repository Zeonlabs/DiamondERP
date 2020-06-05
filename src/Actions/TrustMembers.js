import { listing } from "../js/actions";
import { fetchUrl } from "../js/fetchUrl";
// import apiList from "../js/apiList";

export const getMembers = id => dispatch =>
  new Promise((resolve, reject) => {
    // // console.log("TCL: data", id);
    fetchUrl(
      localStorage.getItem("reversePin") === "205" ? "Post" : "get",
      `/trust-member`,
      id
    )
      .then(res => {
        dispatch({ type: listing.trustMembersListing, payload: res.docs });
        dispatch({ type: listing.trustMembers, payload: res });
        resolve(res);
      })
      .catch(e => {
        reject(e);
      });
  });

export const addMembers = data => dispatch =>
  new Promise((resolve, reject) => {
    // // console.log("TCL: data", data);
    fetchUrl("post", `/trust-member/add`, data)
      .then(res => {
        resolve(res);
      })
      .catch(e => {
        reject(e);
      });
  });

export const editMembers = (id, data) => dispatch =>
  new Promise((resolve, reject) => {
    // console.log("TCL: data", id);
    fetchUrl("patch", `/trust-member/update/${id}`, data)
      .then(res => {
        resolve(res);
      })
      .catch(e => {
        reject(e);
      });
  });

export const deleteMembers = id => dispatch =>
  new Promise((resolve, reject) => {
    // console.log("TCL: data", id);
    fetchUrl("delete", `/trust-member/delete/${id}`)
      .then(res => {
        resolve(res);
      })
      .catch(e => {
        reject(e);
      });
  });

export const filterMembers = id => dispatch =>
  new Promise((resolve, reject) => {
    // console.log("TCL: data", id);
    fetchUrl(
      localStorage.getItem("reversePin") === "205" ? "Post" : "get",
      `/trust-member/filter`,
      id
    )
      .then(res => {
        resolve(res);
      })
      .catch(e => {
        reject(e);
      });
  });