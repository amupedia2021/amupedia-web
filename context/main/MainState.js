import MainContext from "./MainContext";

export default (props) => {

	return (
		<MainContext.Provider value={{ footerPresent, setFooterPresent }}>
			{props.children}
		</MainContext.Provider>
	);
};
