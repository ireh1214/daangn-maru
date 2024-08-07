import React, { useState, useEffect } from "react";
import MoHeader from "../components/MoHeader";
import PcHeader from "../components/PcHeader";

export default function Header() {
	const [isMobile, setIsMobile] = useState(window.innerWidth < 860);

	useEffect(() => {
		const handleResize = () => setIsMobile(window.innerWidth < 860);
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return isMobile ? <MoHeader /> : <PcHeader />;
}
