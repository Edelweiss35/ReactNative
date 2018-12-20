import {
  FETCHING_DATA,
  FETCHING_DATA_SUCCESS,
  FETCHING_DATA_FAILURE,
  SELECT_SUBREDDIT,
  INVALIDATE_SUBREDDIT

} from '../constants';

import getPeople from '../network/api';


//******************Sub REddit example ***************** */

export function selectSubreddit(subreddit){
  return {
  type:{
    type:SELECT_SUBREDDIT,
    subreddit
  }
  }
}


export function invalidateSubreddit(subreddit){

  return{
    type:INVALIDATE_SUBREDDIT,
    subreddit
  }
}


export function requestPost(subreddit){
  return {

    type:FETCHING_DATA,
    subreddit
  }
}


function receivePosts(subreddit, json){

  return{

    type:FETCHING_DATA_SUCCESS,
    subreddit,
    posts: json.data.children.map(child=>child.data),
    receivedAt: Date.now()
  }
}

//*************Sub Reddit Example ******************* */



export function getData(){

  return {
    type:FETCHING_DATA
  }
}

export function getDataSuccess(data){
  return {

    type: FETCHING_DATA_SUCCESS,
    data,
  }
}

export function getDataFailure(){

  return {

    type:FETCHING_DATA_FAILURE
  }
}

//Thunk 
export function fetchData(){


  return (dispatch)=>{

    dispatch(getData())
    getPeople()
    .then((data)=>{

      dispatch(getDataSuccess(data))
    })
    .catch((err)=>console.log('err:',err))
  }

}