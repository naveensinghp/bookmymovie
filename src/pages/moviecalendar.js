import React, { useState } from "react";
import styled from "styled-components";

// === CONFIG ===
const ROWS = 6;
const COLS = 8;
const PRICE = { platinum: 250, gold: 150 };

// Generate seats
const generateSeats = () => {
  const seats = [];
  for (let r = 0; r < ROWS; r++) {
    const row = [];
    for (let c = 0; c < COLS; c++) {
      const type = r < 2 ? "platinum" : "gold";
      row.push({
        id: `${String.fromCharCode(65 + r)}${c + 1}`,
        booked: Math.random() < 0.15,
        type,
      });
    }
    seats.push(row);
  }
  return seats;
};

// Generate next 7 dates dynamically
const getNextDates = () => {
  const dates = [];
  const options = { day: "numeric", month: "short", weekday: "short" };
  for (let i = 0; i < 7; i++) {
    const d = new Date();
    d.setDate(d.getDate() + i);
    dates.push(d.toLocaleDateString("en-US", options));
  }
  return dates;
};

// Movie Info
const movie = {
  title: "Avatar: The Way of Water",
  theatre: "PVR Cinemas",
  poster: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba",
  genre: "Action, Adventure, Sci-Fi",
  director: "James Cameron",
  stars: "Sam Worthington, Zoe Saldaña, Sigourney Weaver",
  rating: "8.5/10",
  plot: "A visually stunning sequel where Jake Sully and Neytiri venture into new regions of Pandora to protect their family and home from human threats."
};

const defaultTimes = ["10:00 AM", "1:30 PM", "4:45 PM", "8:00 PM"];

export default function BookingScreen() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [seats] = useState(generateSeats());
  const [selectedSeats, setSelectedSeats] = useState([]);

  const dates = getNextDates();
  const times = defaultTimes;

  const toggleSeat = (seat) => {
    if (seat.booked) return;
    setSelectedSeats((prev) =>
      prev.includes(seat.id)
        ? prev.filter((s) => s !== seat.id)
        : [...prev, seat.id]
    );
  };

  const total = selectedSeats.reduce((sum, id) => {
    const seat = seats.flat().find((s) => s.id === id);
    return sum + PRICE[seat.type];
  }, 0);

  return (
    <Page>
      {/* Left Pane */}
      <LeftPane>
        <Poster src={movie.poster} />
        <InfoCard>
          <h1>{movie.title}</h1>
          <InfoRow><strong>Theatre:</strong> {movie.theatre}</InfoRow>
          <InfoRow><strong>Genre:</strong> {movie.genre}</InfoRow>
          <InfoRow><strong>Director:</strong> {movie.director}</InfoRow>
          <InfoRow><strong>Stars:</strong> {movie.stars}</InfoRow>
          <InfoRow><strong>Rating:</strong> {movie.rating}</InfoRow>
          <Plot>{movie.plot}</Plot>
        </InfoCard>
      </LeftPane>

      {/* Center Pane */}
      <CenterPane>
        <Step>
          <StepTitle>Select Date</StepTitle>
          <Selector>
            {dates.map((d) => (
              <Option
                key={d}
                active={selectedDate === d}
                onClick={() => {
                  setSelectedDate(d);
                  setSelectedTime(null);
                  setSelectedSeats([]);
                }}
              >
                {d}
              </Option>
            ))}
          </Selector>
        </Step>

        {selectedDate && (
          <Step>
            <StepTitle>Select Time</StepTitle>
            <Selector>
              {times.map((t) => (
                <Option
                  key={t}
                  active={selectedTime === t}
                  onClick={() => {
                    setSelectedTime(t);
                    setSelectedSeats([]);
                  }}
                >
                  {t}
                </Option>
              ))}
            </Selector>
          </Step>
        )}

        {selectedDate && selectedTime && (
          <Step>
            <StepTitle>Select Seats</StepTitle>
            <ScreenWrapper>
              <Screen />
              <ScreenText>SCREEN</ScreenText>
            </ScreenWrapper>

            <SeatWrapper>
              {seats.map((row, rIdx) => (
                <Row key={rIdx}>
                  <RowLabel>{String.fromCharCode(65 + rIdx)}</RowLabel>
                  {row.map((seat) => {
                    const selected = selectedSeats.includes(seat.id);
                    return (
                      <Seat
                        key={seat.id}
                        booked={seat.booked}
                        selected={selected}
                        type={seat.type}
                        onClick={() => toggleSeat(seat)}
                      />
                    );
                  })}
                </Row>
              ))}
            </SeatWrapper>

            <Legend>
              <LegendItem><Box color="#1e293b" /> Available</LegendItem>
              <LegendItem><Box color="#22c55e" /> Selected</LegendItem>
              <LegendItem><Box color="#444" /> Booked</LegendItem>
              <LegendItem><Box color="#334155" /> Platinum</LegendItem>
              <LegendItem><Box color="#1e293b" /> Gold</LegendItem>
            </Legend>
          </Step>
        )}
      </CenterPane>

      {/* Right Pane */}
      {selectedSeats.length > 0 && (
        <RightPane>
          <SummaryCard>
            <h2>Booking Summary</h2>
            <InfoRow><strong>Movie:</strong> {movie.title}</InfoRow>
            <InfoRow><strong>Theatre:</strong> {movie.theatre}</InfoRow>
            <InfoRow><strong>Date:</strong> {selectedDate}</InfoRow>
            <InfoRow><strong>Time:</strong> {selectedTime}</InfoRow>
            <InfoRow><strong>Seats:</strong> {selectedSeats.join(", ")}</InfoRow>
            <Total>₹ {total}</Total>
            <BookButton>Proceed to Pay</BookButton>
          </SummaryCard>
        </RightPane>
      )}
    </Page>
  );
}

// ================= STYLES =================
const Page = styled.div`
  display: grid;
  grid-template-columns: 320px 2fr 350px;
  gap: 20px;
  padding: 20px;
  background: #0f172a;
  min-height: 100vh;
  color: white;
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

const LeftPane = styled.div``;

const Poster = styled.img`
  width: 100%;
  border-radius: 12px;
  object-fit: cover;
  margin-bottom: 15px;
`;

const InfoCard = styled.div`
  background: #1e293b;
  padding: 15px;
  border-radius: 12px;
  line-height: 1.5;
`;

const InfoRow = styled.p`
  margin: 4px 0;
`;

const Plot = styled.p`
  margin-top: 10px;
  color: #ccc;
`;

const CenterPane = styled.div``;
const RightPane = styled.div``;

const Step = styled.div`
  margin-bottom: 30px;
`;

const StepTitle = styled.h3`
  margin-bottom: 10px;
`;

const Selector = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`;

const Option = styled.div`
  padding: 10px 20px;
  border-radius: 8px;
  cursor: pointer;
  background: ${(p) => (p.active ? "#f97316" : "#1e293b")};
  font-weight: ${(p) => (p.active ? "bold" : "normal")};
  transition: 0.2s;
  &:hover {
    background: #f97316;
  }
`;

const ScreenWrapper = styled.div`
  text-align: center;
  margin: 20px 0;
`;

const Screen = styled.div`
  width: 80%;
  height: 20px;
  margin: auto;
  border-radius: 50%;
  background: linear-gradient(to right, #ccc, #fff, #ccc);
`;

const ScreenText = styled.div`
  font-size: 14px;
  color: #aaa;
  margin-top: 4px;
`;

const SeatWrapper = styled.div``;

const Row = styled.div`
  display: flex;
  justify-content: center;
  gap: 12px;
  margin: 8px 0;
`;

const RowLabel = styled.div`
  width: 25px;
  color: #888;
`;

const Seat = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 6px;
  background: ${({ booked, selected, type }) =>
    booked ? "#444" : selected ? "#22c55e" : type === "platinum" ? "#334155" : "#1e293b"};
  cursor: ${({ booked }) => (booked ? "not-allowed" : "pointer")};
  transition: 0.2s;
  &:hover {
    transform: ${({ booked }) => (booked ? "none" : "scale(1.1)")};
  }
`;

const Legend = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 12px;
  margin-top: 10px;
`;

const LegendItem = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
`;

const Box = styled.span`
  width: 14px;
  height: 14px;
  display: inline-block;
  border-radius: 3px;
  background: ${(p) => p.color};
`;

const SummaryCard = styled.div`
  background: #111827;
  padding: 20px;
  border-radius: 12px;
`;

const Total = styled.h2`
  margin-top: 10px;
`;

const BookButton = styled.button`
  margin-top: 15px;
  width: 100%;
  padding: 14px;
  border-radius: 8px;
  border: none;
  background: #f97316;
  font-weight: bold;
  cursor: pointer;
`;