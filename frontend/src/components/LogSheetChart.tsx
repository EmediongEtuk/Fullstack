<<<<<<< HEAD
﻿import type { DailyLog } from "../types";
=======
﻿import type { DailyLog, DutySegment } from "../types";
>>>>>>> 3277a35080038e30fb1eb27bcc6ccab6c8fc062e

interface Props {
    log: DailyLog;
}

<<<<<<< HEAD
// Map duty status to Y-axis row
const statusToY: Record<string, number> = {
=======
const statusToY: Record<DutySegment["status"], number> = {
>>>>>>> 3277a35080038e30fb1eb27bcc6ccab6c8fc062e
    OFF: 0,
    SB: 1,
    D: 2,
    ON: 3,
};

export default function LogSheetChart({ log }: Props) {
    const hours = Array.from({ length: 25 }, (_, i) => i);

    // Convert "HH:MM" -> float hours
    const parseTime = (time: string) => {
<<<<<<< HEAD
        const [h, m] = time.split(":").map(Number);
        return h + m / 60;
=======
        if (!time) return 0;
        const [h, m] = time.split(":").map((n) => parseInt(n, 10));
        return h + (m || 0) / 60;
>>>>>>> 3277a35080038e30fb1eb27bcc6ccab6c8fc062e
    };

    return (
        <div className="card my-3">
            <div className="card-body">
<<<<<<< HEAD
                <h5 className="card-title">Day {log.day} Daily Log</h5>

                <svg width="99%" height="220" viewBox="-0.1 0 25 5" preserveAspectRatio="none">
                    {/* Hour Grid (vertical lines) */}
=======
                <h5 className="card-title">Day {log.day}</h5>
                <svg
                    width="100%"
                    height="250"
                    viewBox="0 0 24 4"
                    preserveAspectRatio="none"
                >
                    {/* Grid lines */}
>>>>>>> 3277a35080038e30fb1eb27bcc6ccab6c8fc062e
                    {hours.map((h) => (
                        <line
                            key={h}
                            x1={h}
                            y1={0}
                            x2={h}
                            y2={4}
                            stroke="#ccc"
<<<<<<< HEAD
                            strokeWidth="0.02"
                        />
                    ))}

                    {/* Status Rows (horizontal lines) */}
=======
                            strokeWidth="0.002"
                        />
                    ))}
>>>>>>> 3277a35080038e30fb1eb27bcc6ccab6c8fc062e
                    {[0, 1, 2, 3, 4].map((y) => (
                        <line
                            key={y}
                            x1={0}
                            y1={y}
                            x2={24}
                            y2={y}
                            stroke="#000"
                            strokeWidth="0.03"
                        />
                    ))}

<<<<<<< HEAD
                    {/* Hour Labels */}
                    {hours.map((h) => (
                        <text
                            key={h}
                            x={h}
                            y={4.4}
                            fontSize="0.3"
                            textAnchor="middle"
                        >
                            {h}
                        </text>
                    ))}

=======
>>>>>>> 3277a35080038e30fb1eb27bcc6ccab6c8fc062e
                    {/* Duty Segments */}
                    {log.duty_segments.map((seg, idx) => {
                        const y = statusToY[seg.status];
                        const x1 = parseTime(seg.start);
                        const x2 = parseTime(seg.end);
<<<<<<< HEAD
                        return (
                            <g key={idx}>
=======

                        return (
                            <g key={idx}>
                                {/* Horizontal line for segment */}
>>>>>>> 3277a35080038e30fb1eb27bcc6ccab6c8fc062e
                                <line
                                    x1={x1}
                                    y1={y + 0.5}
                                    x2={x2}
                                    y2={y + 0.5}
                                    stroke="red"
<<<<<<< HEAD
                                    strokeWidth="0.1"
                                />
                                {/* Note above the segment */}
                                <text
                                    x={(x1 + x2) / 2}
                                    y={y + 0.2}
                                    fontSize="0.25"
                                    textAnchor="middle"
                                    fill="blue"
=======
                                    strokeWidth="0.15"
                                    strokeLinecap="round"
                                />

                                {/* Vertical connector if status changed */}
                                {idx > 0 && (() => {
                                    const prev = log.duty_segments[idx - 1];
                                    const prevY = statusToY[prev.status];
                                    const prevX2 = parseTime(prev.end);
                                    if (prevX2 === x1 && prevY !== y) {
                                        return (
                                            <line
                                                x1={x1}
                                                y1={prevY + 0.5}
                                                x2={x1}
                                                y2={y + 0.5}
                                                stroke="red"
                                                strokeWidth="0.15"
                                            />
                                        );
                                    }
                                    return null;
                                })()}

                                {/*  segment with note */}
                                <text
                                    x={(x1 + x2) / 2}
                                    y={y + 0.2}
                                    fontSize="0.2"
                                    textAnchor="middle"
                                    fill="black"
>>>>>>> 3277a35080038e30fb1eb27bcc6ccab6c8fc062e
                                >
                                    {seg.note}
                                </text>
                            </g>
                        );
                    })}
                </svg>

                {/* Legend */}
                <div className="mt-2">
<<<<<<< HEAD
                    <span className="badge bg-secondary me-2">OFF = Off Duty</span>
                    <span className="badge bg-secondary me-2">SB = Sleeper Berth</span>
                    <span className="badge bg-secondary me-2">D = Driving</span>
                    <span className="badge bg-secondary me-2">ON = On Duty (not driving)</span>
=======
                    <span className="badge bg-secondary me-2">OFF</span>
                    <span className="badge bg-secondary me-2">SB</span>
                    <span className="badge bg-secondary me-2">D</span>
                    <span className="badge bg-secondary me-2">ON</span>
>>>>>>> 3277a35080038e30fb1eb27bcc6ccab6c8fc062e
                </div>
            </div>
        </div>
    );
}
