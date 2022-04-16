import React from 'react';

export default function DropDownList(props) {
    const { selectedValue, source, onDataChange, placeHolder, isSizeSelected } = props;

    const handleChange = (e) => {
        onDataChange(e.target.value);
    };

    let isDisabled = false;

    if (placeHolder === 'Print Material' && !isSizeSelected) {
        isDisabled = true;
    }

    return (
        <select className="dropDownList" value={selectedValue} onChange={handleChange} disabled={isDisabled}>
            <option value="">Select a {placeHolder}</option>
            {source.map((data) => (
                <option key={data} value={data}>
                    {data}
                </option>
            ))}
        </select>
    );
}
