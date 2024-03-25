// ============== STRING CONSTANTS ===================
// ===== view and expand actions =======
const ACTION_CATEGORY_EXPAND =
  "cake-online-store/NavigationFeature/ACTION_CATEGORY_EXPAND";
const ACTION_VIEW_PAGE_CATEGORIALLY =
  "cake-online-store/NavigationFeature/ACTION_VIEW_PAGE_CATEGORIALLY";
const ACTION_VIEW_PRODUCT_PAGE =
  "cake-online-store/NavigationFeature/ACTION_VIEW_PRODUCT_PAGE";
const ACTION_VIEW_CART_PAGE =
  "cake-online-store/NavigationFeature/ACTION_VIEW_CART_PAGE";
const ACTION_VIEW_PROFILE_PAGE =
  "cake-online-store/NavigationFeature/ACTION_VIEW_PROFILE_PAGE";
const ACTION_VIEW_SELLER_PROFILE =
  "cake-online-store/NavigationFeature/ACTION_VIEW_SELLER_PROFILE";

// ===== reset view and expand actions ========
const RESET_ACTION_VIEW_CART_PAGE =
  "cake-online-store/Navigation/RESET_ACTION_VIEW_CART_PAGE";
const RESET_ACTION_VIEW_PRODUCT_PAGE =
  "cake-online-store/NavigationFeature/RESET_ACTION_VIEW_PRODUCT_PAGE";
const RESET_ACTION_VIEW_PROFILE_PAGE =
  "cake-online-store/NavigationFeature/RESET_ACTION_VIEW_PROFILE_PAGE";
const RESET_ACTION_VIEW_SELLER_PROFILE =
  "cake-online-store/NavigationFeature/RESET_ACTION_VIEW_SELLER_PROFILE";
const RESET_ALL_EXPAND =
  "cake-online-store/NavigationFeature/ACTION_RESET_EXPAND";

// ============= Initial State ==========
const InitialState = {
  categoryExpanded: false,
  viewPageCategorially: false,
  pageCategorialDetails: {
    pageData: null,
    pageActive: null,
  },
  viewProductPage: false,
  productPageDetails: {
    pageData: null,
  },
  viewCartPage: false,
  viewProfilePage: false,
  viewSellerProfile: false,
  cachedDataForProductPage: {
    
  }
};

// ========== The Reducer ======== which is default export ====
const PagesNavReducer = (state = InitialState, action) => {
  switch (action.type) {
    case ACTION_CATEGORY_EXPAND:
      return { ...state, categoryExpanded: true };

    case ACTION_VIEW_PAGE_CATEGORIALLY:
      return {
        ...state,
        viewPageCategorially: true,
        pageCategorialDetails: {
          pageData: action.data,
          pageActive: action.active,
        },
      };

    case ACTION_VIEW_PRODUCT_PAGE:
      return {
        state,
        viewProductPage: true,
        productPageDetails: {
          pageData: action.data,
        },
      };

    case ACTION_VIEW_CART_PAGE:
      return { state, viewCartPage: true };

    case ACTION_VIEW_PROFILE_PAGE:
      return { state, viewProfilePage: true };

    case ACTION_VIEW_SELLER_PROFILE:
      return {
        state,
        viewSellerProfile: true,
      };

    case RESET_ACTION_VIEW_PRODUCT_PAGE:
      return {
        state,
        viewProductPage: false,
        productPageDetail: {
          pageData: null,
        },
      };

    case RESET_ACTION_VIEW_CART_PAGE:
      return {
        ...state,
        viewCartPage: false,
      };

    case RESET_ACTION_VIEW_PROFILE_PAGE:
      return {
        ...state,
        viewProfilePage: false,
      };

    case RESET_ACTION_VIEW_SELLER_PROFILE:
      return {
        ...state,
        viewSellerProfile: false,
        cachedDataForProductPage : action.data,
      };

    case RESET_ALL_EXPAND:
      return {
        ...state,
        categoryExpanded: false,
        viewPageCategorially: false,
        pageCategorialDetails: {
          pageData: null,
          pageActive: null,
        },
        viewProductPage: false,
        productPageDetails: {
          pageData: null,
        },
        viewCartPage: false,
        viewProfilePage: false,
      };

    default:
      return state;
  }
};

export default PagesNavReducer;

// ==================== The Action Creators ===================
export const actionCategoryExpand = () => {
  return {
    type: ACTION_CATEGORY_EXPAND,
  };
};

export const actionViewPageCategorially = (firstArg, secondArg) => {
  return {
    type: ACTION_VIEW_PAGE_CATEGORIALLY,
    data: firstArg,
    active: secondArg,
  };
};

export const actionViewProductPage = (onlyArg) => {
  return {
    type: ACTION_VIEW_PRODUCT_PAGE,
    data: onlyArg,
  };
};

export const actionViewCartPage = () => {
  return {
    type: ACTION_VIEW_CART_PAGE,
  };
};

export const actionViewProfilePage = () => {
  return {
    type: ACTION_VIEW_PROFILE_PAGE,
  };
};

export const actionViewSellerProfile = (cachedDataProductPage) => {
  return {
    type: ACTION_VIEW_SELLER_PROFILE,
    data: cachedDataProductPage,
  };
};

// ==== reset actions creators =====
export const actionResetViewProductPage = () => {
  return {
    type: RESET_ACTION_VIEW_PRODUCT_PAGE,
  };
};

export const actionResetViewCartPage = () => {
  return {
    type: RESET_ACTION_VIEW_CART_PAGE,
  };
};

export const actionResetViewProfilePage = () => {
  return {
    type: RESET_ACTION_VIEW_PROFILE_PAGE,
  };
};

export const actionResetViewSellerProfile = () => {
  return {
    type: RESET_ALL_EXPAND,
  };
};
export const actionResetAllExpand = () => {
  return {
    type: RESET_ALL_EXPAND,
  };
};
