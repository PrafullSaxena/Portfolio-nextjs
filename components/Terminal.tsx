"use client"

import React, {useState} from 'react';
import {getResponse} from "@data/TerminalFile";

interface CommandResponse {
    id: number;
    command: string;
    response: string;
}

const Terminal: React.FC = () => {
    const [input, setInput] = useState<string>('');
    const [output, setOutput] = useState<CommandResponse[]>([]);
    const [commandId, setCommandId] = useState<number>(1);

    const handleCommand = (command: string) => {
        if (command.toLowerCase() ==="clear") {
            setOutput([]);
            return;
        }

        const response = getResponse(command);

        // Add to output
        setOutput((prev) => [
            ...prev,
            { id: commandId, command, response },
        ]);
        setCommandId((prev) => prev + 1);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (input.trim() !== '') {
            handleCommand(input);
            setInput('');
        }
    };

    return (
            <div className="bg-gray-900 dark:text-white text-white font-mono w-[90%] lg:w-[80%] mx-auto h-[30rem] lg:h-[50rem] mt-10 lg:mt-20 rounded-2xl overflow-hidden
            border-4 border-[#6C6C6C] bg-[#222222] rounded-[30px] shadow-2xl shadow-gray-950 dark:shadow-gray-400
            ">
                <div className="bg-gray-700 py-1 px-4  flex items-center justify-between">
                    <div className="space-x-2 flex">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <div><span className="text-white font-mono">Terminal</span>
                        <span className="text-gray-400 font-mono">_</span></div>
                    <div></div>
                </div>
                <div
                    className="bg-gray-900 px-4 py-2 h-64 overflow-y-auto rounded-b-lg flex-1 min-h-[82%] lg:min-h-[90%] text-sm antialiased font-extralight
">                  {output.length === 0 && (
                        <div>
                            <p className="text-green-500 pt-3 pb-1"> {`> Start`}</p>
                            <p className='ps-3.5'>
                                {`Welcome to the terminal!`}
                                {`Type 'help' to get started`}
                            </p>

                        </div>
                )}
                    {output.map(({id, command, response}) => (
                        <div key={id}>
                            <p className="text-green-500 pt-3 pb-1"> {`> ${command}`}</p>
                            <p className='ps-3.5'>
                                {response.split('\n').map((line, index) => (
                                    <p key={index}>{line}</p>
                                ))}
                            </p>

                        </div>
                    ))}
                </div>
                <hr className="h-px  bg-gray-900 border-1 border-gray-500  "/>
                <form onSubmit={handleSubmit}
                      className="mt-2 px-3 py-1 flex items-center space-x-2 text-sm antialiased font-extralight bg-gray-900">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        className="flex-1 bg-gray-900 border-none focus:outline-none text-white"
                        placeholder="Type a command..."
                    />
                    <button type="submit" className="hidden"></button>
                </form>
            </div>
            );
            };

            export default Terminal;