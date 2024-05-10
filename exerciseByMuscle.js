import React, { useState, useEffect } from 'react';
import axios from 'axios';

export function SearchDropdown({onSelect}) {

    let muscleGroups = ["abdominals", "abductors", "adductors", "biceps", "calves", "chest", "forearms", "glutes", "hamstrings", "lats", "lower_back", "middle_back", "neck", "quadriceps", "traps", "triceps"];

    // State to store the fetched data
    const [selectedValue, setSelectedValue] = useState('');

    // Handle the change event of the select element
    const handleSelectChange = (event) => {
        const selectedValue = event.target.value;
        setSelectedValue(selectedValue);
        onSelect(selectedValue);
    }

    return (
        <div className="search-dropdown">
            <select name="id" value={selectedValue} onChange={handleSelectChange}>
                <option value="" selected disabled hidden>Search by Muscle</option>
                {muscleGroups.map((item, index) => (
                    <option key={index} value={item}>{item}</option>
                ))}
            </select>
        </div>
    );
}

export default SearchDropdown;