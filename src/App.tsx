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
  // Removed CSI Tech Quiz event here
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
  // New CSI events (7 cards)
  {
    id: 11,
    title: "Garba Workshop",
    date: "2025-09-16",
    desc: "Learn traditional Garba dance steps and rhythms.",
    badge: "CSI",
    img: "/garba.jpg",
  },
  {
    id: 12,
    title: "Rink Football",
    date: "2025-09-17",
    desc: "Competitive rink football matches and training.",
    badge: "CSI",
    img: "/foot.jpg",
  },
  {
    id: 13,
    title: "Tech Hunt",
    date: "2025-09-18",
    desc: "A tech-themed scavenger hunt with puzzles and prizes.",
    badge: "CSI",
    img: "/tech.jpg",
  },
  {
    id: 14,
    title: "Neon Cricket",
    date: "2025-09-19",
    desc: "Night cricket matches with neon lights and music.",
    badge: "CSI",
    img: "/neon.jpg",
  },
  {
    id: 15,
    title: "Cricket Auction",
    date: "2025-09-20",
    desc: "Auction event for cricket teams and players.",
    badge: "CSI",
    img: "/cric.jpg",
  },
  {
    id: 16,
    title: "Bullseye",
    date: "2025-09-21",
    desc: "Precision aiming and target shooting competition.",
    badge: "CSI",
    img: "/bull.jpg",
  },
  {
    id: 17,
    title: "CODM",
    date: "2025-09-22",
    desc: "Call of Duty Mobile tournament with exciting prizes.",
    badge: "CSI",
    img: "/cod.jpg",
  },
];

function App() {
  const [filterBy, setFilterBy] = useState<string>("all");
  const [sortBy, setSortBy] = useState<"alphabetical" | "committee">("alphabetical");

  // Filter events by committee or show all
  const filteredEvents = filterBy === "all"
    ? eventsData
    : eventsData.filter((e) => e.badge.toLowerCase() === filterBy.toLowerCase());

  // Sort filtered events
  const sortedEvents = [...filteredEvents].sort((a, b) => {
    if (sortBy === "alphabetical") {
      return a.title.localeCompare(b.title);
    } else if (sortBy === "committee") {
      return a.badge.localeCompare(b.badge);
    }
    return 0;
  });

  // Get unique committees for filter dropdown
  const committees = Array.from(new Set(eventsData.map((e) => e.badge))).sort();

  return (
    <>
      {/* Star background layers */}
      <div className="stars"></div>
      <div className="stars2"></div>
      <div className="stars3"></div>

      {/* Orbit rings */}
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

        {/* Filter and Sort controls */}
        <section className="section" style={{ marginBottom: "1.5rem", display: "flex", gap: "1rem", flexWrap: "wrap", alignItems: "center" }}>
          <label htmlFor="filter-select" style={{ color: "#a078ff", fontWeight: "600" }}>
            Filter by Committee:
          </label>
          <select
            id="filter-select"
            value={filterBy}
            onChange={(e) => setFilterBy(e.target.value)}
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
            <option value="all">All</option>
            {committees.map((committee) => (
              <option key={committee} value={committee}>
                {committee}
              </option>
            ))}
          </select>

          <label htmlFor="sort-select" style={{ color: "#a078ff", fontWeight: "600" }}>
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
          <h2 className="section-title">
            {filterBy === "all" ? "All Events" : `${filterBy.toUpperCase()} Events`}
          </h2>
          <div className="cards-grid">
            {sortedEvents.length === 0 ? (
              <p style={{ color: "#a078ff" }}>No events found for this committee.</p>
            ) : (
              sortedEvents.map((event) => (
                <div key={event.id} className="card">
                  <img src={event.img} alt={event.title} />
                  <div className="card-title">{event.title}</div>
                  <div className="card-meta">
                    📅{" "}
                    {new Date(event.date).toLocaleDateString(undefined, {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}
                  </div>
                  <div className="card-desc">{event.desc}</div>
                  <div className="badge">{event.badge}</div>
                </div>
              ))
            )}
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
