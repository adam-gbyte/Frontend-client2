import { useState } from "react";

const styles = {
  sidebar: {
    width: "220px",
    minHeight: "100vh",
    backgroundColor: "#343a40",
    color: "#fff",
    padding: "20px",
    boxSizing: "border-box",
  },
  title: {
    fontSize: "20px",
    marginBottom: "24px",
    textAlign: "center",
  },
  tab: {
    padding: "10px 16px",
    borderRadius: "8px",
    cursor: "pointer",
    marginBottom: "10px",
    backgroundColor: "#495057",
    transition: "background 0.3s",
  },
  activeTab: {
    backgroundColor: "#007bff",
  },
};

export default function Sidebar({ currentTab, setCurrentTab }) {
  return (
    <div style={styles.sidebar}>
      <div style={styles.title}>Admin Panel</div>
      <div
        style={{
          ...styles.tab,
          ...(currentTab === "city" ? styles.activeTab : {}),
        }}
        onClick={() => setCurrentTab("city")}
      >
        Tambah Kota
      </div>
      <div
        style={{
          ...styles.tab,
          ...(currentTab === "tour" ? styles.activeTab : {}),
        }}
        onClick={() => setCurrentTab("tour")}
      >
        Tambah Tour
      </div>
    </div>
  );
}
