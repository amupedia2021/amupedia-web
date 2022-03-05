export default function disableNavbar() {
	const navbar = document.getElementById('navbar');
	const ham = document.getElementById('ham');
	const menu = document.getElementById('menu');
	navbar.style.display = 'none';
	ham.style.display = 'none';
	menu.style.display = 'none';
}
