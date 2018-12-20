import {FETCHING_DATA,FETCHING_DATA_SUCCESS,FETCHING_DATA_FAILURE} from '../constants';
import {put,takeEvery} from 'redux-saga/effects'
import getPeople from './api'