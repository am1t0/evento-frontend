import React, { useState } from 'react'
import '../../styles/particular-event/FilterOptions.css'

export default function FilterOptions({ onFilterChange }) {
    const [category, setCategory] = useState('All');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [location, setLocation] = useState('');
    const [tags, setTags] = useState('');
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');
    const [rating, setRating] = useState('');

    // options to select the prices

    const priceRanges = [
        { label: '150-300', min: 150, max: 300 },
        { label: '300-500', min: 300, max: 500 },
        { label: '500-900', min: 500, max: 900 },
        { label: '>900', min: 900, max: Infinity }
    ];
    const handleFilter = () => {
        onFilterChange({
            category,
            date: { start: startDate, end: endDate },
            location,
            tags: tags.split(',').map(tag => tag.trim()),
            priceRange: { min: minPrice, max: maxPrice },
            rating
        });
    };
    return (
        <div className="filter-bar">
            <h2>Filter</h2>
            <select className="filter-select" onChange={e => setCategory(e.target.value)}>
                <option value="All">All Categories</option>
                <option value="Festival">Festival Celebrations</option>
                <option value="Cultural">Cultural Events</option>
                <option value="Tour">Tour and Travels</option>
                <option value="Adventure">Adventures</option>
            </select>

            <div className="date-range">
                <div className="date">
                <label>Start Date</label>
                <input
                    type="date"
                    className="filter-input"
                    placeholder="Start Date"
                    onChange={e => setStartDate(e.target.value)}
                />
                </div>

                <div className="date">
                <label>End Date</label>
                <input
                    type="date"
                    className="filter-input"
                    placeholder="End Date"
                    onChange={e => setEndDate(e.target.value)}
                />
                </div>
            </div>

            <select className="filter-select">
                <option value="">Select Price Range</option>
                {priceRanges.map((range, index) => (
                    <option key={index} value={range.label}>{range.label}</option>
                ))}
            </select>
            <input
                type="text"
                className="filter-input"
                placeholder="Location"
                onChange={e => setLocation(e.target.value)}
            />
            <input
                type="text"
                className="filter-input"
                placeholder="Tags (comma separated)"
                onChange={e => setTags(e.target.value)}
            />

            <input
                type="number"
                className="filter-input"
                placeholder="Min Rating"
                onChange={e => setRating(e.target.value)}
            />
            <button className="filter-button" onClick={handleFilter}>Apply Filters</button>
        </div>
    )
}
