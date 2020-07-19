import React, { useRef }from 'react';
import './index.scss';

const FindInput = ({onChange, debounceTime}) => {

    const timeout = useRef(null)

    const trackChanges = (e) => {
        clearTimeout(timeout.current)
        const {value} = e.target
        timeout.current = setTimeout(() => {
        console.log(value)
        onChange(value)
        }, debounceTime);
    }

    return (
        <div>
        <form className="find__hotel">
        <i className=" icon fas fa-search" />
        <input placeholder="Find hotel" onInput={trackChanges} />
        </form>
    </div>
    );
};

export default FindInput;