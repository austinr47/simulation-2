// simulation 2 43D
// simulation 2 43E 
const UPDATE_PROPERTY_NAME = 'UPDATE_PROPERTY_NAME ';
const UPDATE_PROPERT_DESCRIPTION = 'UPDATE_PROPERTY_DESCRIPTION';
const UPDATE_CITY = 'UPDATE_CITY';
const UPDATE_ADDRESS_ONE = 'UPDATE_ADDRESS_ONE';
const UPDATE_ADDRESS_TWO = 'UPDATE_ADDRESS_TWO';
const UPDATE_ADDRESS_THREE = 'UPDATE_ADDRESS_THREE';

//simulation 1 36C
const initialState = {
    propertyName: '',
    propertyDescription: '',
    city: '',
    addressOne: '',
    addressTwo: '',
    addressThree: '',
  };

  // simulation 2 43F
  export function updateCity(city){
      return{
        type: UPDATE_CITY,
        payload: city
      }
  }

  // simulation 1 36F
  export function updateAddressOne(addressOne){
    return{
      type: UPDATE_ADDRESS_ONE,
      payload: addressOne
    }
}

export function updateAddressTwo(addressTwo){
    return{
      type: UPDATE_ADDRESS_TWO,
      payload: addressTwo
    }
}

export function updateAddressThree(addressThree){
    return{
      type: UPDATE_ADDRESS_THREE,
      payload: addressThree
    }
}


  export function updatePropertyName(propertyName){
      return{
          type: UPDATE_PROPERTY_NAME,
          payload: propertyName
      }
  } 

  export function updatePropertyDescription(propertyDescription){
    return{
        type: UPDATE_PROPERT_DESCRIPTION,
        payload: propertyDescription
    }
} 


function reducer(state = initialState, action){
    switch (action.type) {
        //simulation 1 36D
        case UPDATE_PROPERTY_NAME:
            return { ...state, propertyName: action.payload};
        case UPDATE_PROPERT_DESCRIPTION:
            return { ...state, propertyDescription: action.payload};
        case UPDATE_CITY:
            return { ...state, city: action.payload};
        case UPDATE_ADDRESS_ONE:
            return { ...state, addressOne: action.payload};
        case UPDATE_ADDRESS_TWO:
            return { ...state, addressTwo: action.payload};
        case UPDATE_ADDRESS_THREE:
            return { ...state, addressThree: action.payload};
        default:
            return state;
    }
}

export default reducer;
