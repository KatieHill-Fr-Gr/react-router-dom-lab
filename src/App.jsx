import './App.css';

import { useState } from 'react'
import { Routes, Route } from 'react-router'

import NavBar from './components/NavBar/NavBar.jsx'
import MailboxList from './components/MailboxList/MailboxList.jsx'
import MailboxForm from './components/MailboxForm/MailboxForm.jsx'
import MailboxDetails from './components/MailboxDetails/MailboxDetails.jsx'



const App = () => {

  const [mailboxes, setMailboxes] = useState([])

  const addBox = (newBox) => {
    setMailboxes([...mailboxes, newBox])
    console.log(newBox)
  }

  return (
    <>
      <NavBar />
      <Routes>
        <Route index element={<main><h1>Post Office</h1></main>} />
        <Route path="mailboxes" element={<MailboxList mailboxes={mailboxes} />} />
        <Route path="new-mailbox" element={<MailboxForm onAddBox={addBox} />} />
        <Route path="mailboxes/:mailboxId" element={<MailboxDetails />} />
      </Routes>
    </>
  )

};

export default App;

