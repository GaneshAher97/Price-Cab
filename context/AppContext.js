import React from "react";

export default React.createContext({
	isLoggedin: false,
	setIsLoggedIn: () => { },
	userData: null,
	setUserData: (data) => { },
	unsetUserData: () => { },
	setBusiness: (data) => { },
	unsetBusiness: () => { },
	businessData: [],
	selectedBusiness: [],
	setSelectedBusiness: (data) => { },
	unsetSelectedBusiness: () => { },
});