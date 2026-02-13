import React, { useState } from 'react';

// ------------------------------------------------------------
// 1. Class Definitions (OOP Logic)
// ------------------------------------------------------------

// Base Class
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.type = "Person"; // Helping property for UI display
  }

  // Base method
  greet() {
    return `Hello, my name is ${this.name}.`;
  }
}

// Subclass: Student
// Extends Person and overrides greet()
class Student extends Person {
  constructor(name, age, major) {
    super(name, age); // Call parent constructor
    this.major = major;
    this.type = "Student";
  }

  // Method Overriding (Polymorphism)
  greet() {
    return `Hi! I'm ${this.name}, and I'm studying ${this.major}.`;
  }
}

// Subclass: Teacher
// Extends Person and overrides greet()
class Teacher extends Person {
  constructor(name, age, subject) {
    super(name, age);
    this.subject = subject;
    this.type = "Teacher";
  }

  // Method Overriding (Polymorphism)
  greet() {
    return `Good morning. I am Prof. ${this.name}, and I teach ${this.subject}.`;
  }
}

// ------------------------------------------------------------
// 2. React Components (UI Layer)
// ------------------------------------------------------------

const PersonCard = ({ person }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 mb-4 hover:shadow-md transition-shadow duration-200">
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-xl font-bold text-gray-800">
          {person.name} <span className="text-gray-500 font-normal">({person.type})</span>
        </h2>
      </div>
      
      <p className="text-gray-700 mb-4">
        <span className="font-semibold">Age:</span> {person.age}
      </p>

      {/* Demonstrating Polymorphism:
        We call .greet() on the object, and the specific implementation 
        runs depending on whether it's a Person, Student, or Teacher.
      */}
      <div className="bg-gray-50 p-3 rounded border-l-4 border-blue-500 text-gray-600 italic">
        "{person.greet()}"
      </div>
    </div>
  );
};

export default function App() {
  // Creating instances of our classes
  // We use useState to keep them stable across re-renders, though simple variables would work for static data too.
  const [people] = useState([
    new Person("Alex Johnson", 30),
    new Student("Emma Watson", 20, "Computer Science"),
    new Teacher("Dr. Alan Grant", 45, "Paleontology"),
    new Student("John Doe", 22, "Physics"),
  ]);

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-2xl mx-auto">
        <header className="mb-8 text-center">
          <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">
            Person Class Hierarchy
          </h1>
          <p className="mt-2 text-sm text-gray-500">
            Demonstrating OOP Inheritance & Polymorphism in React
          </p>
        </header>

        <div className="space-y-4">
          {people.map((person, index) => (
            <PersonCard key={index} person={person} />
          ))}
        </div>

        {/* Technical Implementation Details Section */}
        <div className="mt-12 border-t pt-8">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Implementation Details</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-600 text-sm bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
            <li><strong>Base Class:</strong> <code>Person</code> (Properties: name, age)</li>
            <li><strong>Subclasses:</strong> <code>Student</code>, <code>Teacher</code></li>
            <li><strong>Polymorphism:</strong> Each class has a unique <code>greet()</code> method.</li>
            <li><strong>Rendering:</strong> React maps over an array of objects, calling the overridden method for each.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}