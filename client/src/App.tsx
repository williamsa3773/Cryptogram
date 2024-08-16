import type { Component } from 'solid-js';
import { createSignal } from 'solid-js'
import allChars from './helpers/crypto.js';
import { Encode, Decode} from './helpers/crypto.js';
import { A } from '@solidjs/router';

import Game from './routes/Game.jsx';

export default function App() {
  const [inputEncode, setInputEncode] = createSignal('');
  const [inputDecode, setInputDecode] = createSignal('');
  const [inputEncodeShift, setInputEncodeShift] = createSignal(3);
  const [inputDecodeShift, setInputDecodeShift] = createSignal(3);

  const handleEncodeInput = (event: Event) => {
    const target = event.target as HTMLInputElement;
    setInputEncode(target.value);
  };

  const handleDecodeInput = (event: Event) => {
    const target = event.target as HTMLInputElement;
    setInputDecode(target.value);
  };

  const handleEncodeShiftChange = (event: Event) => {
    const target = event.target as HTMLSelectElement;
    setInputEncodeShift(Number(target.value));
  };

  const handleDecodeShiftChange = (event: Event) => {
    const target = event.target as HTMLSelectElement;
    setInputDecodeShift(Number(target.value));
  }

  return (
    <div class="h-screen bg-primary-bg text-primary-tx">
      {/* Header */}
      <header class='text-center py-6'> 
        <h1 class='text-3xl font-bold'>Welcome to Cryptogram</h1>
      </header>

      {/* Rules Section*/}
      <section class='flex flex-col items-center mb-8 px-4'>
        <h2 class='text-2x1 font-semibold mb-4'>Rules:</h2>
        <p class='text-lg leading-relaxed mb-2'>All forms of text will be encrypted and decrypted using Caesar Cipher, which shifts each character in the text by a specified number of positions in the character set.</p>
        <p class='text-lg leading-relaxed mb-2'>Supported charcters include:</p>
        <ul class='list-disc list-inside text-lg'>
          <li>All lowercase and uppercase English letters (a-z, A-Z)</li>
          <li>All digits (0-9)</li>
          <li>Common punctuation marks and symbols: !@#$%^&*() `-=[]\;',./~_+{}|:"&lt;&gt;?</li>
        </ul>
        <p class='text-lg leading-relaxed'>Note: Characters not listed above will remain unchanged in the encoded/decoded output.</p>
      </section>

      {/* Example Section */}
      <section class='flex flex-col items-center mb-8 px-4'>
        <h2 class='text-2xl font-semibold mb-4'>Example with Numbers and Special Characters</h2>
        <p class='text-lg mb-2'>Original Text: "Hello, World! 123"</p>
        <p class='text-lg mb-2'>Encoded with shift 3: {Encode(3, "\"Hello, World! 123\"")}</p> 
        <p class='text-lg'>Decoded back with shift 3: {Decode(3, Encode(3,"\"Hello, World! 123\""))}</p>
      </section>

      {/* Input Section*/}
      <section class='flex flex-col items-center mb-8 px-4'>
        <h2 class='text-xl font-semibold mb-4'>Give it a try</h2>
        <p class='flex justify-center'>Enters text containing letters, numbers and symbols to see how it gets encoded and decoded.</p>
        
        <div class='flex flex-col sm:flex-row justify-center space-y-8 sm:space-y-0 sm:space-x-20'>
          <div class='flex flex-col items-center'>
            <h2 class='text-lg font-semibold mb-2'>Encode:</h2>
            <input type="text" value={inputEncode()} onInput={handleEncodeInput} class='p-2 mb-4 border border-secondary-bg rounded-lg focus:outline-none focus:ring-2 focus:ring-accent text-secondary-tx bg-secondary-bg'/> 
            <select value={inputEncodeShift()} onChange={(handleEncodeShiftChange)} class='p-2 mb-4 border border-secondary-bg rounded-lg focus:outline-none focus:ring-2 focus:ring-accent text-secondary-tx bg-secondary-bg'>
              {[0,1,2,3,4,5,6,7,8,9].map((num => <option value={num}>{num}</option>))}</select>
            <p class='text-lg'>Output Encoding: {Encode(inputEncodeShift(), inputEncode())}</p>
          </div>
          
          <div class='flex flex-col items-center'>
            <h2 class="text-lg font-semibold mb-2">Decode: </h2>
            <input type="text" value={inputDecode()} onInput={handleDecodeInput} class='p-2 mb-4 border border-secondary-bg rounded-lg focus:outline-none focus:ring-2 focus:ring-accent text-secondary-tx bg-secondary-bg'/> 
            <select value={inputDecodeShift()} onChange={(handleDecodeShiftChange)} class='p-2 mb-4 border border-secondary-bg rounded-lg focus:outline-none focus:ring-2 focus:ring-accent text-secondary-tx bg-secondary-bg'>
              {[0,1,2,3,4,5,6,7,8,9].map((num => <option value={num}>{num}</option>))}</select>
            <p class='text-lg'>Output Decoding: {Decode(inputDecodeShift(), inputDecode())}</p>
          </div>
        </div>
      </section>

      {/* Navigation Links */}
      <div class='text-center py-4'>
        <A href='/cryptogame'>To The Game</A>
      </div>

      {/* Icon Links*/}
      <footer>

      </footer>
    </div>
  );
};
