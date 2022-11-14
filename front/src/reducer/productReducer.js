 import {  ALL_PRODUCTS_REQUEST, 
    ALL_PRODUCTS_SUCCESS, 
    ALL_PRODUCTS_FAIL,
    CLEAR_ERRORS,
    ALL_PRODUCTS_ALL_REQUEST,
    ALL_PRODUCTS_ALL_SUCCESS,
    ALL_PRODUCTS_ALL_FAIL,
    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS,
    PRODUCT_DETAILS_FAIL} from "../constants/productConstants";


export const productsReducer = (state ={ products: []}, action)=>{
    switch(action.type){
        case ALL_PRODUCTS_REQUEST:
            return{
                loading:true,
                products:[]
            }

        case ALL_PRODUCTS_SUCCESS:
            return{
                loading: false,
                products: action.payload.products,
                productsCount: action.payload.productsCount,
                resPerPage: action.payload.resPerPage,
                filteredProductsCount: action.payload.filteredProductsCount,
                productsAllAS: action.payload.productsAllAS
            }

        case ALL_PRODUCTS_FAIL:
            return{
                loading:false,
                error: action.payload
            }

        case CLEAR_ERRORS:
            return{
                ...state,
                error:null
            }


        default:
            return state;
    }
}


export const productsAllReducer = (state ={ productsAll: []}, action)=>{
    switch(action.type){
        case ALL_PRODUCTS_ALL_REQUEST:
            return{
                loading:true,
                productsAll:[],
            }

        case ALL_PRODUCTS_ALL_SUCCESS:
            return{
                loading: false,
                productsAll: action.payload.productsAllAS
            }

        case  ALL_PRODUCTS_ALL_FAIL:
            return{
                loading:false,
                error: action.payload
            }

        case CLEAR_ERRORS:
            return{
                ...state,
                error:null
            }


        default:
            return state;
    }
}

//Reducer para tener todos los detalles

export const productDetailsReducer = (state ={ product: {}}, action)=>{
    switch(action.type){
        case PRODUCT_DETAILS_REQUEST:
            return{
                ...state,
                loading:true
            }

        case PRODUCT_DETAILS_SUCCESS:
            return{
                loading:false,
                product: action.payload
            }

        case PRODUCT_DETAILS_FAIL:
            return{
                ...state,
                error: action.payload
            }

        case CLEAR_ERRORS:
            return{
                ...state,
                error:null
            }
        default:
            return state;
    }
}