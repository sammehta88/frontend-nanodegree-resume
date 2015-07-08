var work = {
	"jobs": [{
		"employer": "General Mills",
		"title": "Manufacturing and Engineering Associate",
		"location": "Reed City, MI",
		"dates": "January 2013 - July 2014",
		"description": "Rotational program with experience as a Team Leader, Systems Engineer, and Project Engineer"
	},{
		"employer": "General Dynamics Land Systems",
		"title": "Systems Integration and Verification Engineer",
		"location": "Sterling Heights, MI",
		"dates": "2012",
		"description": "Created models for prototyping and assemblies using SolidWorks"
	}],
	"display": "function"
};

var projects = {
	"projects": [{
		"title": "Portfolio",
		"dates": "2015",
		"description": "Online porfolio using HTML and CSS",
		"images": "f"
	},{
		"title": "s",
		"dates": "d",
		"description": "f",
		"images": "f"
	}],
	"display": "function"
};

var bio = {
	"name": "Samir Mehta",
	"role": "Web Developer",
	"welcomeMessage": "Howdy",
	"contacts": {
		"email": "sammehta88@gmail.com",
		"mobile": "(248) 739-9185",
		"github": "d",
		"twitter": "d",
		"location": "Washington, D.C."
	},
	"skills": [
		"SolidWorks","Matlab", "HTML", "CSS", "JavaScript"],
	"biopic": "url",
	"display": function displayBio() {

	var formattedName = HTMLheaderName.replace("%data%",bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%",bio.role);

	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);

	var formattedPic = HTMLbioPic.replace("%data%",bio.biopic);

	$("#header").prepend(formattedPic);

	if (bio.skills != 0) {
		$("#header").append(HTMLskillsStart);

		for (skill in bio.skills) {
			var formattedSkill = HTMLskills.replace("%data%",bio.skills[skill]);
			$("#skills").append(formattedSkill);
		};
	};

	for (var key in bio.contacts) {
		if (bio.contacts.hasOwnProperty(key)) {
			var formattedContact = HTMLcontactGeneric.replace("%contact%", key);
			formattedContact = formattedContact.replace("%data%", bio.contacts[key]);
			$("#topContacts").append(formattedContact);
			$("#footerContacts").append(formattedContact);
		};
	};
	}
};

var education = {
	"schools": [
	{
		"name": "Dartmouth College",
		"location": "Hanover, NH",
		"degree": "B.A.",
		"majors": "Engineering Sciences modified with Economics",
		"dates": 2010,
		"url":"http://dartmouth.edu/"
	},{
		"name": "Thayer",
		"location": "Hanover, NH",
		"degree": "BE",
		"majors": "Mechanical Engineering",
		"dates": 2012,
		"url":"http://engineering.dartmouth.edu/"
	},{
		"name": "Jiao Tong",
		"location": "Shanghai, China",
		"degree": "Certificate",
		"majors": "Chinese",
		"dates": 2011,
		"url":"http://en.sjtu.edu.cn/"
	}],
	"onlineCourses": [
	{
		"title": "Front-End Web Developer Nanodegree",
		"school": "Udacity",
		"dates":  2015,
		"url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
	}],
	"display": "function"
};

bio.display();

function displayWork() {
	for (job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
		var formattedDates = HTMLworkDates.replace("%data%",work.jobs[job].dates);
		var formattedLocation = HTMLworkLocation.replace("%data%",work.jobs[job].location);
		var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);
		$(".work-entry:last").append(formattedEmployer + formattedTitle);
		$(".work-entry:last").append(formattedDates);
		$(".work-entry:last").append(formattedLocation);
		$(".work-entry:last").append(formattedDescription);
	};
};

displayWork();

$(document).click(function(loc) {
	var x = event.pageX;
	var y = event.pageY;
    logClicks(x,y);
});

var locationizer = function (work_obj) {
	var locations = []

	for (var i=0; i<work.length; i++) {
		locations.push(work[i].location);
	}

	return locations;
}

$("#main").append(internationalizeButton);

function inName(name) {
	var splitNames = name.split(" ");
	console.log(splitNames);
	var lastName = splitNames[1].toUpperCase();
	var firstName = splitNames[0].charAt(0).toUpperCase() + splitNames[0].slice(1).toLowerCase();
	var intName = firstName + " " + lastName;
	return intName;
};

projects.display = function () {
	for (var project in projects.projects) {
		$("#projects").append(HTMLprojectStart);
		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images);
		$(".project-entry:last").append(formattedTitle);
		$(".project-entry:last").append(formattedDates);
		$(".project-entry:last").append(formattedDescription);
		$(".project-entry:last").append(formattedImage);
	};
};

projects.display();

$("#map-div").append(googleMap);