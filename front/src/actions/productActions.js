import axios from "axios";

import {
  ALL_PRODUCTS_REQUEST,
  ALL_PRODUCTS_SUCCESS,
  ALL_PRODUCTS_FAIL,
  ALL_PRODUCTS_ALL_REQUEST,
  ALL_PRODUCTS_ALL_SUCCESS,
  ALL_PRODUCTS_ALL_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAIL,
  CLEAR_ERRORS,
} from "../constants/productConstants";

export const getProducts =
  (currentPage = 1, keyword = "") =>
  async (dispatch) => {
    try {
      dispatch({ type: ALL_PRODUCTS_REQUEST });
      const { data } = await axios.get(
        `/api/productos?keyword=${keyword}&page=${currentPage}`
      );
      console.log("getdata en actions:", data)
      dispatch({
        type: ALL_PRODUCTS_SUCCESS,
        payload: data
      });
    } catch (error) {
      dispatch({
        type: ALL_PRODUCTS_FAIL,
        payload: error.response.data.message,
      });
    }
  };

export const getProductsAll = () => async (dispatch) => {
  try {
    dispatch({ type: ALL_PRODUCTS_ALL_REQUEST });
    const { data } = await axios.get("/api/admin/productos");
    console.log("getAlldata en actions:", data.products)
    dispatch({
      type: ALL_PRODUCTS_ALL_SUCCESS,
      payload: data.products
    });
  } catch (error) {
    dispatch({
      type: ALL_PRODUCTS_ALL_FAIL,
      payload: error.response.data.message,
    });
  }
};

//Ver detalles del producto

export const getProductDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_DETAILS_REQUEST });

    const { data } = await axios.get(`/api/productos/${id}`);

    dispatch({
      type: PRODUCT_DETAILS_SUCCESS,
      payload: data.tempProduct,
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_DETAILS_FAIL,
      payload: error.response.data.message,
    });
  }
};

//clear error
export const clearErrors = () => async (dispatch) => {
  dispatch({
    type: CLEAR_ERRORS,
  });
};
