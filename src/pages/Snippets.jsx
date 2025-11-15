import React, { useState } from "react";

const categories = {
  HTML: `<h1>Hello World</h1>`,
  CSS: `body { background: #111; color: white; }`,
  JavaScript: `console.log("Hello JS");`,
  Java: `
public class Main {
  public static void main(String[] args) {
    System.out.println("Hello Java");
  }
}`,
  SQL: `SELECT * FROM users WHERE active = 1;`,
};

const Snippets = () => {
  const [selected, setSelected] = useState("HTML");

  return (
    <section className="min-h-screen bg-gray-100 dark:bg-gray-900 px-6 py-16">
      <h1 className="text-4xl font-extrabold text-center text-purple-600 dark:text-purple-500 mb-8">
        Code Snippets
      </h1>

      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {Object.keys(categories).map((cat) => (
          <button
            key={cat}
            onClick={() => setSelected(cat)}
            className={`px-4 py-2 rounded-md ${selected === cat
                ? "bg-purple-600 text-white"
                : "bg-gray-300 dark:bg-gray-700 text-gray-900 dark:text-gray-200"
              }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Code Box */}
      <div className="max-w-4xl mx-auto bg-gray-800 text-green-300 p-6 rounded-lg shadow-lg overflow-auto">
        <pre>
          <code>{categories[selected]}</code>
        </pre>
      </div>
    </section>
  );
};

export default Snippets;
