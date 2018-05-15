
import { call, put, takeEvery, takeLatest, all, select } from 'redux-saga/effects'
import { SampleQueryService } from '../../Server/todo'
function* fetchNews(action:any) {
     const {data} = yield call(SampleQueryService.getNews);
     yield put({type: "SAVENEWSLIST", payload:data});
}

function* todoSaga() {
  const state = yield select((state) => (state as any).todo)
 yield takeLatest("FETCHNEWS", fetchNews);
}
export  {todoSaga};