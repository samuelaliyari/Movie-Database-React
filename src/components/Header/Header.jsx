import "./Header.scss";
import { useEffect, useState } from "react";
const Header = ({movieDataHome, setter}) => {

	const aToZ = [...movieDataHome].sort((a, b) => {
			if (a.title.charAt(0) > b.title.charAt(0)) {
				return 1;
			}
			if (a.title.charAt(0) < b.title.charAt(0)) {
				return -1;
			}
			return 0;
		})
    ;

	const zToA = 
		[...movieDataHome].sort((a, b) => {
			if (a.title.charAt(0) < b.title.charAt(0)) {
				return 1;
			}
			if (a.title.charAt(0) > b.title.charAt(0)) {
				return -1;
			}
			return 0;
		})
	
        const yearAscending = [...movieDataHome].sort((film1, film2) => film1.year - film2.year)
        const yearDescending = [...movieDataHome].sort((film1, film2) => film2.year - film1.year)
        const bestrate = [...movieDataHome].sort((film1, film2) => film2.rate - film1.rate)





	

	return (
		<nav>
			<button onClick={(() => setter(aToZ))}>A-Z</button>
			<button onClick={(() => setter(zToA))}>Z-A</button>
			<button onClick={(() => setter(yearAscending))}> Year Ascending</button>
			<button onClick={(() => setter(yearDescending))}> Year Descending</button>
			<button onClick={(() => setter(bestrate))}> Best Rate</button>
		</nav>
	);
};

export default Header;
