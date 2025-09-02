import React, { useState } from "react";
import "./index.css";

type Event = {
  id: number;
  title: string;
  dates: string[]; // multiple dates
  desc: string;
  badge: string;
  img: string; // main image
  extraImgs?: string[]; // additional images for modal thumbnails
  price?: number; // ticket price
};

const eventsData: Event[] = [
  {
    id: 1,
    title: "Hackathon",
    dates: ["2025-09-25", "2025-09-26", "2025-09-27"],
    desc: "24-hour coding sprint with prizes.",
    badge: "ACM",
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
    extraImgs: [
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=400&q=80",
    ],
    price: 499,
  },
  {
    id: 3,
    title: "Circuit Lab",
    dates: ["2025-09-25", "2025-09-26", "2025-09-27"],
    desc: "Hands-on electronics and circuit building workshop.",
    badge: "IEEE",
    img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=400&q=80",
    extraImgs: [
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1518773553398-650c184e0bb3?auto=format&fit=crop&w=400&q=80",
    ],
    price: 599,
  },
  {
    id: 4,
    title: "Bridge Building",
    dates: ["2025-09-25", "2025-09-26", "2025-09-27"],
    desc: "Model bridge design and testing competition.",
    badge: "ASCE",
    img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=400&q=80",
    extraImgs: [
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80",
    ],
    price: 450,
  },
  {
    id: 5,
    title: "Robotics Workshop",
    dates: ["2025-09-25", "2025-09-26", "2025-09-27"],
    desc: "Build and control a simple robot with sensors.",
    badge: "IETE",
    img: "https://images.unsplash.com/photo-1518773553398-650c184e0bb3?auto=format&fit=crop&w=400&q=80",
    extraImgs: [
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=400&q=80",
    ],
    price: 550,
  },
  {
    id: 6,
    title: "Mechanical Design Challenge",
    dates: ["2025-09-25", "2025-09-26", "2025-09-27"],
    desc: "Create and present an engineering design prototype.",
    badge: "IEI",
    img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=400&q=80",
    extraImgs: [
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1518773553398-650c184e0bb3?auto=format&fit=crop&w=400&q=80",
    ],
    price: 480,
  },
  {
    id: 7,
    title: "CTF (Capture The Flag)",
    dates: ["2025-09-25", "2025-09-26", "2025-09-27"],
    desc: "Web security challenge to find and exploit vulnerabilities.",
    badge: "OWASP",
    img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80",
    extraImgs: [
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=400&q=80",
    ],
    price: 520,
  },
  {
    id: 8,
    title: "Business Case Study",
    dates: ["2025-09-25", "2025-09-26", "2025-09-27"],
    desc: "Solve real-world business problems in teams.",
    badge: "TRS",
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
    extraImgs: [
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=400&q=80",
    ],
    price: 400,
  },
  {
    id: 9,
    title: "Data Science Sprint",
    dates: ["2025-09-25", "2025-09-26", "2025-09-27"],
    desc: "Analyze data and present insights within 3 hours.",
    badge: "S4DS",
    img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=400&q=80",
    extraImgs: [
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1518773553398-650c184e0bb3?auto=format&fit=crop&w=400&q=80",
    ],
    price: 530,
  },
  {
    id: 10,
    title: "AI Talk",
    dates: ["2025-09-25", "2025-09-26", "2025-09-27"],
    desc: "Guest lecture on AI ethics and applications.",
    badge: "ACM SIGAI",
    img: "https://images.unsplash.com/photo-1518773553398-650c184e0bb3?auto=format&fit=crop&w=400&q=80",
    extraImgs: [
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=400&q=80",
    ],
    price: 600,
  },
  // CSI events (7 cards)
  {
    id: 11,
    title: "Garba Workshop",
    dates: ["2025-09-25", "2025-09-26", "2025-09-27"],
    desc: "Learn traditional Garba dance steps and rhythms.",
    badge: "CSI",
    img: "/garba.jpg",
    extraImgs: ["/foot.jpg", "/tech.jpg"],
    price: 200,
  },
  {
    id: 12,
    title: "Rink Football",
    dates: ["2025-09-25", "2025-09-26", "2025-09-27"],
    desc: "Competitive rink football matches and training.",
    badge: "CSI",
    img: "/foot.jpg",
    extraImgs: ["/garba.jpg", "/tech.jpg"],
    price: 400,
  },
  {
    id: 13,
    title: "Tech Hunt",
    dates: ["2025-09-25", "2025-09-26", "2025-09-27"],
    desc: "A tech-themed scavenger hunt with puzzles and prizes.",
    badge: "CSI",
    img: "/tech.jpg",
    extraImgs: ["/garba.jpg", "/foot.jpg"],
    price: 100,
  },
  {
    id: 14,
    title: "Neon Cricket",
    dates: ["2025-09-25", "2025-09-26", "2025-09-27"],
    desc: "Night cricket matches with neon lights and music.",
    badge: "CSI",
    img: "/neon.jpg",
    extraImgs: ["/cric.jpg", "/bull.jpg"],
    price: 250,
  },
  {
    id: 15,
    title: "Cricket Auction",
    dates: ["2025-09-25", "2025-09-26", "2025-09-27"],
    desc: "Auction event for cricket teams and players.",
    badge: "CSI",
    img: "/cric.jpg",
    extraImgs: ["/neon.jpg", "/bull.jpg"],
    price: 300,
  },
  {
    id: 16,
    title: "Bullseye",
    dates: ["2025-09-25", "2025-09-26", "2025-09-27"],
    desc: "Precision aiming and target shooting competition.",
    badge: "CSI",
    img: "/bull.jpg",
    extraImgs: ["/neon.jpg", "/cric.jpg"],
    price: 30,
  },
  {
    id: 17,
    title: "CODM",
    dates: ["2025-09-25", "2025-09-26", "2025-09-27"],
    desc: "Call of Duty Mobile tournament with exciting prizes.",
    badge: "CSI",
    img: "/cod.jpg",
    extraImgs: ["/neon.jpg", "/cric.jpg"],
    price: 150,
  },
];

function App() {
  const [filterBy, setFilterBy] = useState<string>("all");
  const [sortBy, setSortBy] = useState<"alphabetical" | "committee">("alphabetical");
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [modalMainImg, setModalMainImg] = useState<string | null>(null);
  const [ticketQty, setTicketQty] = useState<number>(1);
  const [ticketDate, setTicketDate] = useState<string>("2025-09-25");

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

  // Helper to format date nicely
  const formatDate = (isoDate: string) => {
    const d = new Date(isoDate);
    return d.toLocaleDateString(undefined, { day: "numeric", month: "short" });
  };

  // Open modal for event
  const openModal = (event: Event) => {
    setSelectedEvent(event);
    setModalMainImg(event.img);
    setTicketQty(1);
    setTicketDate(event.dates[0]);
  };

  // Close modal
  const closeModal = () => {
    setSelectedEvent(null);
    setModalMainImg(null);
  };

  // Handle ticket quantity change
  const handleQtyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = Math.max(1, Math.min(10, Number(e.target.value))); // limit 1-10
    setTicketQty(val);
  };

  // Handle ticket date change
  const handleDateChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTicketDate(e.target.value);
  };

  // Handle Buy Tickets click (placeholder)
  const handleBuyTickets = () => {
    alert(`Buying ${ticketQty} ticket(s) for ${selectedEvent?.title} on ${formatDate(ticketDate)} at ₹${(selectedEvent?.price || 0) * ticketQty}`);
    // Later integrate Razorpay here
  };

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
                <div
                  key={event.id}
                  className="card"
                  style={{ cursor: "pointer" }}
                  onClick={() => openModal(event)}
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") openModal(event);
                  }}
                  aria-label={`Open details for ${event.title}`}
                >
                  <img src={event.img} alt={event.title} />
                  <div className="card-title">{event.title}</div>
                  <div className="card-meta">
                    📅{" "}
                    {event.dates
                      .map((d) =>
                        new Date(d).toLocaleDateString(undefined, {
                          day: "numeric",
                          month: "short",
                        })
                      )
                      .join(", ")}
                  </div>
                  <div className="card-desc">{event.desc}</div>
                  <div className="badge">{event.badge}</div>
                </div>
              ))
            )}
          </div>
        </section>
      </div>

      {/* Modal */}
      {selectedEvent && (
        <div
          className="modal-overlay"
          onClick={closeModal}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          tabIndex={-1}
          style={{
            position: "fixed",
            inset: 0,
            backgroundColor: "rgba(0,0,0,0.75)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}
        >
                    <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
            style={{
              background: "rgba(20,10,40,0.95)",
              borderRadius: "12px",
              maxWidth: "600px",
              width: "90%",
              maxHeight: "90vh",
              overflowY: "auto",
              padding: "1.5rem",
              color: "#d1c4e9",
              boxShadow: "0 0 20px #7f5fff",
              position: "relative",
            }}
          >
            <button
              onClick={closeModal}
              aria-label="Close modal"
              style={{
                position: "absolute",
                top: "1rem",
                right: "1rem",
                background: "transparent",
                border: "none",
                color: "#a078ff",
                fontSize: "1.5rem",
                cursor: "pointer",
              }}
            >
              &times;
            </button>

            <h2 id="modal-title" style={{ marginBottom: "1rem" }}>
              {selectedEvent.title}
            </h2>

            {/* Images */}
<div style={{ marginBottom: "1rem" }}>
  {/* Main image container */}
  <div
    style={{
      position: "relative",
      width: "100%",
      maxWidth: "1049px",
      paddingBottom: "63.7%", // height = width / 1.57
      borderRadius: "8px",
      overflow: "hidden",
      marginBottom: "0.5rem",
    }}
  >
    <img
      src={modalMainImg || selectedEvent.img}
      alt={`${selectedEvent.title} main`}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
  </div>

  {/* Thumbnails */}
  <div style={{ display: "flex", gap: "0.5rem" }}>
    {[selectedEvent.img, ...(selectedEvent.extraImgs || [])].map((img, i) => (
      <div
        key={i}
        style={{
          position: "relative",
          width: "80px",
          paddingBottom: `${80 / 1.57}px`, // height = width / 1.57
          borderRadius: "6px",
          overflow: "hidden",
          cursor: "pointer",
          border: modalMainImg === img ? "2px solid #a078ff" : "2px solid transparent",
          boxShadow: modalMainImg === img ? "0 0 8px #a078ff" : "none",
          flexShrink: 0,
        }}
        onClick={() => setModalMainImg(img)}
      >
        <img
          src={img}
          alt={`${selectedEvent.title} thumbnail ${i + 1}`}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </div>
    ))}
  </div>
</div>


            {/* Dates */}
            <div style={{ marginBottom: "1rem", fontWeight: "600" }}>
              Dates:{" "}
              {selectedEvent.dates
                .map((d) =>
                  new Date(d).toLocaleDateString(undefined, { day: "numeric", month: "short", year: "numeric" })
                )
                .join(", ")}
            </div>

            {/* Description */}
            <p style={{ marginBottom: "1.5rem" }}>{selectedEvent.desc}</p>

            {/* Ticket purchase */}
            <div
              style={{
                background: "rgba(127, 87, 255, 0.15)",
                padding: "1rem",
                borderRadius: "8px",
                boxShadow: "0 0 10px #7f5fff88",
              }}
            >
              <h3 style={{ marginBottom: "1rem" }}>Buy Tickets</h3>

              <div style={{ marginBottom: "1rem" }}>
                <label htmlFor="ticket-date" style={{ display: "block", marginBottom: "0.3rem" }}>
                  Select Date:
                </label>
                <select
                  id="ticket-date"
                  value={ticketDate}
                  onChange={handleDateChange}
                  style={{
                    width: "100%",
                    padding: "0.4rem 0.6rem",
                    borderRadius: "6px",
                    border: "1px solid #7f5fff",
                    background: "rgba(30,10,50,0.85)",
                    color: "#d1c4e9",
                    fontWeight: "600",
                    cursor: "pointer",
                    boxShadow: "0 0 10px #7f5fff88",
                  }}
                >
                  {selectedEvent.dates.map((d) => (
                    <option key={d} value={d}>
                      {formatDate(d)}
                    </option>
                  ))}
                </select>
              </div>

              <div style={{ marginBottom: "1rem" }}>
                <label htmlFor="ticket-qty" style={{ display: "block", marginBottom: "0.3rem" }}>
                  Quantity:
                </label>
                <input
                  id="ticket-qty"
                  type="number"
                  min={1}
                  max={10}
                  value={ticketQty}
                  onChange={handleQtyChange}
                  style={{
                    width: "100%",
                    padding: "0.4rem 0.6rem",
                    borderRadius: "6px",
                    border: "1px solid #7f5fff",
                    background: "rgba(30,10,50,0.85)",
                    color: "#d1c4e9",
                    fontWeight: "600",
                    boxShadow: "0 0 10px #7f5fff88",
                  }}
                />
              </div>

              <button
                onClick={handleBuyTickets}
                style={{
                  width: "100%",
                  padding: "0.75rem",
                  backgroundColor: "#7f5fff",
                  color: "#fff",
                  fontWeight: "700",
                  fontSize: "1.1rem",
                  borderRadius: "8px",
                  border: "none",
                  cursor: "pointer",
                  boxShadow: "0 0 15px #7f5fff",
                  transition: "background-color 0.3s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#a078ff")}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#7f5fff")}
              >
                Buy Tickets ₹{(selectedEvent.price || 0) * ticketQty}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default App;

           