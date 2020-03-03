import * as actionTypes from '../../store/actionTypes';
import { ThreadsData } from '../../models/threadsData';
import { ThreadModel } from '../../models/threadModel';

export const selectThreadsData = (threadsData: Array<ThreadsData>) => {
  return {
       type: actionTypes.THREADSDATA,
       payload: threadsData
   }
};

export const selectThread = (thread: ThreadModel) => {
    return {
         type: actionTypes.THREAD,
         payload: thread
     }
};
