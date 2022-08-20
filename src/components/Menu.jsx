import React from 'react'

const Menu = ({ setInput, input }) => {
    return (
        <div className="flex justify-between align-center w-sm">
            <div>
                {/* <div className="pointer btn-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#f5f5f5" viewBox="0 0 16 16">
                        <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
                        <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/>
                    </svg>
                </div> */}
            </div>
            <div>
                <div 
                    className="pointer btn-icon"
                    onClick={() => {
                        // const i = document.querySelector('.input');
                        // const selectionStart = i.selectionStart;
                        // setInput(input.slice(0, selectionStart - 1) + input.slice(selectionStart));
                        // i.selectionStart = selectionStart - 1;
                        setInput(input.slice(0, -1));
                    }}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#f5f5f5" viewBox="0 0 16 16">
                        <path d="M5.83 5.146a.5.5 0 0 0 0 .708L7.975 8l-2.147 2.146a.5.5 0 0 0 .707.708l2.147-2.147 2.146 2.147a.5.5 0 0 0 .707-.708L9.39 8l2.146-2.146a.5.5 0 0 0-.707-.708L8.683 7.293 6.536 5.146a.5.5 0 0 0-.707 0z"/>
                        <path d="M13.683 1a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-7.08a2 2 0 0 1-1.519-.698L.241 8.65a1 1 0 0 1 0-1.302L5.084 1.7A2 2 0 0 1 6.603 1h7.08zm-7.08 1a1 1 0 0 0-.76.35L1 8l4.844 5.65a1 1 0 0 0 .759.35h7.08a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1h-7.08z"/>
                    </svg>
                </div>
            </div>
        </div>
    )
}

export default Menu