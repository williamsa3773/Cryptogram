import type { Component } from 'solid-js';
import { createSignal } from 'solid-js'
import allChars from '../helpers/crypto.js';
import { Encode, Decode} from '../helpers/crypto.js';
import { Router } from '@solidjs/router';

const Game: Component = () => {
    return (
        <div>
            <p>Game data is supposed to go here!!!!</p>
        </div>
    )
}

export default Game;