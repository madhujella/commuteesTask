import React, { createElement } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import DocTitle from './components/DocTitle/DocTitle';
import EditorInput from './components/EditorInput/EditorInput';
import { updateElementEdit } from './store/actionCreators';

import './App.scss';

function App() {

  const elementsList = useSelector(({ elements }) => elements)
  const state = useSelector(state => state)
  const docTitle = useSelector(({ title }) => title)
  const dispatch = useDispatch()

  const getSelectedElement = id => dispatch(updateElementEdit(id))

  console.log(state)

  const renderElements = (list) => {
    let listCnt = 1
    let lastListType = ''
    const s = []

    list.forEach((e, i) => {
      const { listType } = e
      if (listType) {
        if (lastListType === listType) listCnt++
        else listCnt = 1
        lastListType = listType
      } else {
        if (lastListType) {
          lastListType = ''
          listCnt = 1
        }
      }
      s.push(<EditorInput key={i} {...e} id={i} getSelected={getSelectedElement} listTypeInd={listCnt} />)
    })

    return s;
  }

  return (
    <article className="App">
      <DocTitle />
      {docTitle ? renderElements(elementsList) : null}
    </article>
  );
}

export default App;
