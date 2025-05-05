import React, { useState } from 'react';
import './TopicSearch.css';

const topics = [
    { id: 1, name: "Thermodynamics", category: "Physics" },
    { id: 2, name: "Photosynthesis", category: "Biology" },
    { id: 3, name: "Algebra", category: "Mathematics" },
    { id: 4, name: "World War II", category: "History" },
    { id: 5, name: "Quantum Mechanics", category: "Physics" },
    { id: 6, name: "Cell Structure", category: "Biology" },
    { id: 7, name: "Calculus", category: "Mathematics" },
    { id: 8, name: "Electromagnetism", category: "Physics" },
    { id: 9, name: "The Cold War", category: "History" },
    { id: 10, name: "Genetics", category: "Biology" },
    { id: 11, name: "Geometry", category: "Mathematics" },
    { id: 12, name: "Newton's Laws", category: "Physics" },
    { id: 13, name: "Evolution", category: "Biology" },
    { id: 14, name: "Trigonometry", category: "Mathematics" },
    { id: 15, name: "Industrial Revolution", category: "History" },
    { id: 16, name: "Relativity", category: "Physics" },
    { id: 17, name: "Organic Chemistry", category: "Chemistry" },
    { id: 18, name: "Inorganic Chemistry", category: "Chemistry" },
    { id: 19, name: "Chemical Reactions", category: "Chemistry" },
    { id: 20, name: "Reproduction in Plants", category: "Biology" },
    { id: 21, name: "Linear Equations", category: "Mathematics" },
    { id: 22, name: "World War I", category: "History" },
    { id: 23, name: "Periodic Table", category: "Chemistry" },
    { id: 24, name: "Magnetism", category: "Physics" },
    { id: 25, name: "Acids and Bases", category: "Chemistry" },
    { id: 26, name: "Atomic Structure", category: "Chemistry" },
    { id: 27, name: "Microorganisms", category: "Biology" },
    { id: 28, name: "Statistics", category: "Mathematics" },
    { id: 29, name: "Vectors", category: "Mathematics" },
    { id: 30, name: "Heat Transfer", category: "Physics" },
    { id: 31, name: "Indian Independence", category: "History" },
    { id: 32, name: "Pythagorean Theorem", category: "Mathematics" },
    { id: 33, name: "Biodiversity", category: "Biology" },
    { id: 34, name: "Force and Motion", category: "Physics" },
    { id: 35, name: "Probability", category: "Mathematics" },
    { id: 36, name: "Environmental Chemistry", category: "Chemistry" },
    { id: 37, name: "Plant Nutrition", category: "Biology" },
    { id: 38, name: "Civil Rights Movement", category: "History" },
    { id: 39, name: "Electric Circuits", category: "Physics" },
    { id: 40, name: "Matrices", category: "Mathematics" },
    { id: 41, name: "DNA and RNA", category: "Biology" },
    { id: 42, name: "Waves and Sound", category: "Physics" },
    { id: 43, name: "Oxidation and Reduction", category: "Chemistry" },
    { id: 44, name: "Social Reformers", category: "History" },
    { id: 45, name: "Functions", category: "Mathematics" },
    { id: 46, name: "Chemical Bonding", category: "Chemistry" },
    { id: 47, name: "World Geography", category: "Geography" },
    { id: 48, name: "Climate Change", category: "Environmental Science" },
    { id: 49, name: "Photosynthesis in Detail", category: "Biology" },
    { id: 50, name: "Nuclear Physics", category: "Physics" },
    { id: 51, name: "Electricity and Magnetism", category: "Physics" },
    { id: 52, name: "Constitution of India", category: "Civics" },
    { id: 53, name: "Cybersecurity", category: "Computer Science" },
    { id: 54, name: "Artificial Intelligence", category: "Computer Science" },
    { id: 55, name: "Machine Learning", category: "Computer Science" }
];

//const TopicSearch = () => {}
function TopicSearch() {
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredTopics = topics.filter((topic) =>
        topic.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="container">
            <input
                type="text"
                value={searchTerm}
                onChange={handleSearch}
                placeholder="Search topics..."
                className="search-input"
            />
            {filteredTopics.length > 0 ? (
                filteredTopics.map((topic) => (
                    <div key={topic.id} className="card">
                        <h3>{topic.name}</h3>
                        <p>{topic.category}</p>
                    </div>
                ))
            ) : (
                <p className="no-results">No topics found</p>
            )}
        </div>
    );
}

export default TopicSearch;
