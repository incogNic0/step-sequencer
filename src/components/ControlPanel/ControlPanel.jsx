import React from 'react';
import './ControlPanel.css'
import PlayBtn from './components/PlayBtn/PlayBtn';
import ResetBtn from './components/ResetBtn/ResetBtn';
import PresestsMenu from './components/PresetsMenu/PresetsMenu';
import TempoCtrl from './components/TempCtrl/TempoCtrl';


function ControlPanel( props ) {
    const {
        isPlaying,
        onPlayPause,
        kits,
        onKitSelection,
        currentTempo,
        onTempoChange,
        onResetClick
    } = props
    return (
        <div className='control-panel'>
            < PlayBtn isPlaying={isPlaying} onPlayPause={onPlayPause} />
            < ResetBtn onResetClick={onResetClick}/>
            < PresestsMenu kits={kits} onKitSelection={onKitSelection} />
            < TempoCtrl currentTempo={currentTempo} onTempoChange={onTempoChange} />
        </div>
    )
}

export default ControlPanel;
