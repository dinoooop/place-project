import {ADD_PLACE, DELETE_PLACE, SELECT_PLACE, DESELECT_PLACE} from "../actions/actionTypes";

const initialState = {
  places: [],
  selectedPlace: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PLACE:
      return {
        ...state,
        places: state.places.concat({
          key: Math.random(),
          name: action.placeName,
          image: {
            uri: "https://d2e111jq13me73.cloudfront.net/sites/default/files/styles/review_gallery_carousel_slide_thumbnail/public/screenshots/csm-movie/the-dark-knight-ss1.jpg?itok=ya8KvBt3"
          }
        })
      };


    case DELETE_PLACE:

      return {
          ...state,
          places: state.places.filter(place => {
            return place.key !== state.selectedPlace.key;
          }),
          selectedPlace: null
      };

    case SELECT_PLACE:
      return {
        ...state,
        selectedPlace: state.places.find(place => {
          return place.key === action.placeKey;
        })
      };

    case DESELECT_PLACE:
      return {
        ...state,
        selectedPlace: null
      };

    default:
      return state;

  }
};

export default reducer;
