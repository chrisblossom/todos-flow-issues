// @flow
import React from 'react'
import RunSyncThunk from '../containers/thunks/RunSyncThunk'
import RunAsyncThunk from '../containers/thunks/RunAsyncThunk'

import SomeClass from '../containers/classes/SomeClass'
import SomeClassWithContext from '../containers/classes/SomeClassWithContext'
import SomeWrappedClass from '../containers/classes/SomeWrappedClass'
import SomeWrappedClassWithContext from '../containers/classes/SomeWrappedClassWithContext'

import ChildrenContext from '../containers/context/ChildrenContext';
import UseContext from '../containers/context/UseContext';
import UseWrappedContext from '../containers/context/UseWrappedContext';

const Footer = () => (
  <div>
    <ChildrenContext>
      <UseContext message="UseContext" />
      <UseWrappedContext /> {/* prop check doesn't work */}
      <UseWrappedContext message="UseWrappedContext" />

      <SomeClassWithContext /> {/* prop check doesn't work */}
      <SomeClassWithContext message="SomeClassWithContext" />

      <SomeWrappedClassWithContext /> {/* prop check doesn't work */}
      <SomeWrappedClassWithContext message="SomeWrappedClassWithContext" />
    </ChildrenContext>

    <SomeClass /> {/* prop check doesn't work */}
    <SomeClass message="some todo task" />

    <SomeWrappedClass /> {/* prop check doesn't work */}
    <SomeWrappedClass message="some wrapped todo task" />

    <RunSyncThunk>
      Run Sync Thunk
    </RunSyncThunk>

    {", "}
    <RunAsyncThunk>
      Run Async Thunk
    </RunAsyncThunk>
  </div>
)

export default Footer
