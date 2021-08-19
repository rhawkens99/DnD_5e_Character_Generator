import React from 'react'
import { FormGroup, FormControlLabel, Checkbox, } from '@material-ui/core'

import './App.css';
import { generateCharacter } from "./Generator.js"

function App() {

  const [state, setState] = React.useState({
    checked1: false,
    checked2: false,
    checked3: false,
    checked4: false,
    checked5: false,
    checked6: false,
    checked7: false,
    checked8: false,
    checked9: false,
    checked10: false,
    checked11: false,
    checked12: false,
    checked13: false,
    checked14: false,
    checked15: false,
    checked16: false,
  })

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked })
  }

  return (
    <div className="App">
      <button onClick={() => generateCharacter()}>Press Me!</button>

      <FormGroup column>
        <FormControlLabel
          control={<Checkbox checked={state.checked1} onChange={handleChange} name="checked1" />}
          label="Player's Handbook"
        />
        <FormControlLabel
          control={<Checkbox checked={state.checked2} onChange={handleChange} name="checked2" />}
          label="Xanathar's Guide to Everything"
        />
        <FormControlLabel
          control={<Checkbox checked={state.checked3} onChange={handleChange} name="checked3" />}
          label="Volo's Guide to Monsters"
        />
        <FormControlLabel
          control={<Checkbox checked={state.checked4} onChange={handleChange} name="checked4" />}
          label="Tasha's Cauldron of Everything"
        />
        <FormControlLabel
          control={<Checkbox checked={state.checked5} onChange={handleChange} name="checked5" />}
          label="Sword Coast Adventurer's Guide"
        />
        <FormControlLabel
          control={<Checkbox checked={state.checked6} onChange={handleChange} name="checked6" />}
          label="Explorer's Guide to Wildemount"
        />
        <FormControlLabel
          control={<Checkbox checked={state.checked7} onChange={handleChange} name="checked7" />}
          label="Eberron: Rising from the Last War"
        />
        <FormControlLabel
          control={<Checkbox checked={state.checked8} onChange={handleChange} name="checked8" />}
          label="Princes of the Apocalypse: Elemental Evil Player's Companion"
        />
        <FormControlLabel
          control={<Checkbox checked={state.checked9} onChange={handleChange} name="checked9" />}
          label="Acquisitions Incorporated"
        />
        <FormControlLabel
          control={<Checkbox checked={state.checked10} onChange={handleChange} name="checked10" />}
          label="Guildmaster's Guide to Ravnica"
        />
        <FormControlLabel
          control={<Checkbox checked={state.checked11} onChange={handleChange} name="checked11" />}
          label="Mythic Odysseys of Theros"
        />
        <FormControlLabel
          control={<Checkbox checked={state.checked12} onChange={handleChange} name="checked12" />}
          label="Van Ritchen's Guide to Ravenloft"
        />
        <FormControlLabel
          control={<Checkbox checked={state.checked13} onChange={handleChange} name="checked13" />}
          label="Baldur's Gate: Descent Into Avernus"
        />
        <FormControlLabel
          control={<Checkbox checked={state.checked14} onChange={handleChange} name="checked14" />}
          label="Curse of Strahd"
        />
        <FormControlLabel
          control={<Checkbox checked={state.checked15} onChange={handleChange} name="checked15" />}
          label="Ghosts of Saltmarsh"
        />
        <FormControlLabel
          control={<Checkbox checked={state.checked16} onChange={handleChange} name="checked16" />}
          label="Tomb of Annihilation"
        />
      </FormGroup>
    </div>
  );
}

export default App;
