// src/App.tsx
import React, { useState } from "react";
import "./index.css";

type Event = {
  id: number;
  title: string;
  date: string;
  desc: string;
  badge: string;
  img: string;
};

const eventsData: Event[] = [
  {
    id: 1,
    title: "Hackathon",
    date: "2025-09-12",
    desc: "24-hour coding sprint with prizes.",
    badge: "ACM",
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 2,
    title: "Tech Quiz",
    date: "2025-09-14",
    desc: "Rapid-fire rounds on technology and coding.",
    badge: "CSI",
    img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 3,
    title: "Circuit Lab",
    date: "2025-09-13",
    desc: "Hands-on electronics and circuit building workshop.",
    badge: "IEEE",
    img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 4,
    title: "Bridge Building",
    date: "2025-09-12",
    desc: "Model bridge design and testing competition.",
    badge: "ASCE",
    img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 5,
    title: "Robotics Workshop",
    date: "2025-09-15",
    desc: "Build and control a simple robot with sensors.",
    badge: "IETE",
    img: "https://images.unsplash.com/photo-1518773553398-650c184e0bb3?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 6,
    title: "Mechanical Design Challenge",
    date: "2025-09-13",
    desc: "Create and present an engineering design prototype.",
    badge: "IEI",
    img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 7,
    title: "CTF (Capture The Flag)",
    date: "2025-09-15",
    desc: "Web security challenge to find and exploit vulnerabilities.",
    badge: "OWASP",
    img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 8,
    title: "Business Case Study",
    date: "2025-09-12",
    desc: "Solve real-world business problems in teams.",
    badge: "TRS",
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 9,
    title: "Data Science Sprint",
    date: "2025-09-14",
    desc: "Analyze data and present insights within 3 hours.",
    badge: "S4DS",
    img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 10,
    title: "AI Talk",
    date: "2025-09-14",
    desc: "Guest lecture on AI ethics and applications.",
    badge: "ACM SIGAI",
    img: "https://images.unsplash.com/photo-1518773553398-650c184e0bb3?auto=format&fit=crop&w=400&q=80",
  },
];

function App() {
  const [sortBy, setSortBy] = useState<"alphabetical" | "committee">("alphabetical");

  // Sort events based on selection
  const sortedEvents = [...eventsData].sort((a, b) => {
    if (sortBy === "alphabetical") {
      return a.title.localeCompare(b.title);
    } else if (sortBy === "committee") {
      return a.badge.localeCompare(b.badge);
    }
    return 0;
  });

  return (
    <>
      {/* Star background layers */}
      <div className="stars"></div>
      <div className="stars2"></div>
      <div className="stars3"></div>

      {/* Orbit ringss */}
      <div className="orbits" aria-hidden="true">
        <div className="orbit orbit1" style={{ "--rotateX": "60deg" } as React.CSSProperties}></div>
        <div className="orbit orbit2" style={{ "--rotateX": "30deg" } as React.CSSProperties}></div>
        <div className="orbit orbit3" style={{ "--rotateX": "75deg" } as React.CSSProperties}></div>
      </div>

      <div className="app-container">
        <header className="header">
          <h1 className="title">🌌 Zephyr — Events</h1>
          <p className="subtitle">All events grouped by professional bodies</p>
        </header>

        {/* Sorting controls */}
        <section className="section" style={{ marginBottom: "1.5rem" }}>
          <label htmlFor="sort-select" style={{ color: "#a078ff", fontWeight: "600", marginRight: "0.5rem" }}>
            Sort by:
          </label>
          <select
            id="sort-select"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as "alphabetical" | "committee")}
            style={{
              padding: "0.3rem 0.6rem",
              borderRadius: "6px",
              border: "1px solid #7f5fff",
              background: "rgba(30,10,50,0.85)",
              color: "#d1c4e9",
              fontWeight: "600",
              cursor: "pointer",
              boxShadow: "0 0 10px #7f5fff88",
            }}
          >
            <option value="alphabetical">Alphabetical</option>
            <option value="committee">Committee</option>
          </select>
        </section>

        {/* Cards grid */}
        <section className="section">
          <h2 className="section-title">All Events</h2>
          <div className="cards-grid">
            {sortedEvents.map((event) => (
              <div key={event.id} className="card">
                <img src={event.img} alt={event.title} />
                <div className="card-title">{event.title}</div>
                <div className="card-meta">📅 {new Date(event.date).toLocaleDateString(undefined, { day: "numeric", month: "short", year: "numeric" })}</div>
                <div className="card-desc">{event.desc}</div>
                <div className="badge">{event.badge}</div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
