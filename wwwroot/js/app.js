'use strict';

/* ===== Enable Bootstrap Popover (on element  ====== */
const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))

/* ==== Enable Bootstrap Alert ====== */
//var alertList = document.querySelectorAll('.alert')
//alertList.forEach(function (alert) {
//  new bootstrap.Alert(alert)
//});

const alertList = document.querySelectorAll('.alert')
const alerts = [...alertList].map(element => new bootstrap.Alert(element))


/* ===== Responsive Sidepanel ====== */
const mainContent = document.querySelector("main"); // Selecciona el contenido principal
const headerInner = document.getElementById("app-header-inner"); // Selecciona el header interno

const sidePanelToggler = document.getElementById('sidepanel-toggler'); 
const sidePanel = document.getElementById('app-sidepanel');  
const sidePanelDrop = document.getElementById('sidepanel-drop'); 
const sidePanelClose = document.getElementById('sidepanel-close'); 

window.addEventListener('load', function(){
	responsiveSidePanel(); 
});

window.addEventListener('resize', function(){
	responsiveSidePanel(); 
});


function responsiveSidePanel() {
    let w = window.innerWidth;
	if(w >= 1200) {
	    // if larger 
	    //console.log('larger');
		sidePanel.classList.remove('sidepanel-hidden');
		sidePanel.classList.add('sidepanel-visible');
		// mainContent.style.paddingLeft = "250px"; // Ajusta el padding del contenido principal
		// headerInner.style.marginLeft = "250px"; // Ajusta el padding del header
	} else {
	    // if smaller
	    //console.log('smaller');
	    sidePanel.classList.remove('sidepanel-visible');
		sidePanel.classList.add('sidepanel-hidden');
		// mainContent.style.paddingLeft = "0"; // Ajusta el padding del contenido principal
		// headerInner.style.marginLeft = "0"; // Ajusta el padding del header
	}
};

sidePanelToggler.addEventListener('click', () => {
	if (sidePanel.classList.contains('sidepanel-visible')) {
		console.log('visible');
		sidePanel.classList.remove('sidepanel-visible');
		sidePanel.classList.add('sidepanel-hidden');
		// mainContent.style.paddingLeft = "0"; // Ajustar el padding del contenido
		// headerInner.style.marginLeft  = "0"; // Ajustar el padding del header
		
	} else {
		console.log('hidden');
		sidePanel.classList.remove('sidepanel-hidden');
		sidePanel.classList.add('sidepanel-visible');
		// mainContent.style.paddingLeft = "250px"; // Ajustar el padding del contenido
		// headerInner.style.marginLeft = "250px"; // Ajustar el padding del header
	}
});



sidePanelClose.addEventListener('click', (e) => {
	e.preventDefault();
	sidePanelToggler.click();
});

sidePanelDrop.addEventListener('click', (e) => {
	sidePanelToggler.click();
});



/* ====== Mobile search ======= */
const searchMobileTrigger = document.querySelector('.search-mobile-trigger');
const searchBox = document.querySelector('.app-search-box');

searchMobileTrigger.addEventListener('click', () => {

	searchBox.classList.toggle('is-visible');
	
	let searchMobileTriggerIcon = document.querySelector('.search-mobile-trigger-icon');
	
	if(searchMobileTriggerIcon.classList.contains('fa-magnifying-glass')) {
		searchMobileTriggerIcon.classList.remove('fa-magnifying-glass');
		searchMobileTriggerIcon.classList.add('fa-xmark');
	} else {
		searchMobileTriggerIcon.classList.remove('fa-xmark');
		searchMobileTriggerIcon.classList.add('fa-magnifying-glass');
	}
	
		
	
});


