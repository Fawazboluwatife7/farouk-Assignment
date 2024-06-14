
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/home/Home'
import Nav from './components/nav/Nav'
import Kyc from './pages/kyc/Kyc'
import BiometricCapture from './pages/biometric-capture/BiometricCapture'
import GenerateDID from './pages/generate-DID/GenerateDID'
import MintVote from './pages/mint-vote/MintVote'
import AccessVotingPortal from './pages/access-vote-portal/AccessVotingPortal'
import ViewCandidates from './pages/view-candidates/ViewCandidates'

function App() {
  return (
    <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/kyc" element={<Kyc />} />
        <Route path="/biometric-capture" element={<BiometricCapture />} />
        <Route path="/generate-DID" element={<GenerateDID />} />
        <Route path="/mint-vote" element={<MintVote />} />
        <Route path="/access-vote-portal" element={<AccessVotingPortal />} />
        <Route path="/view-candidates" element={<ViewCandidates />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
