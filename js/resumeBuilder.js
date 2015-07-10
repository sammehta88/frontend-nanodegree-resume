var work = {
	'jobs': [{
		'employer': 'General Mills',
		'title': 'Manufacturing and Engineering Associate',
		'location': 'Reed City, MI',
		'dates': 'January 2013 - July 2014',
		'description': 'Rotational program with experience as a Team Leader, Systems Engineer, and Project Engineer',
		'skills': ['excel']
	},{
		'employer': 'General Dynamics Land Systems',
		'title': 'Systems Integration and Verification Engineer',
		'location': 'Sterling Heights, MI',
		'dates': '2012',
		'description': 'Created models for prototyping and assemblies using SolidWorks',
		'skills': ['solidworks']
	}],
	'display': function displayWork() {
	var jobsLength = work.jobs.length;
	for (var job = 0; job < jobsLength; job++) {
		$('#workExperience').append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace('%data%',work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace('%data%',work.jobs[job].title);
		var formattedDates = HTMLworkDates.replace('%data%',work.jobs[job].dates);
		var formattedLocation = HTMLworkLocation.replace('%data%',work.jobs[job].location);
		var formattedDescription = HTMLworkDescription.replace('%data%',work.jobs[job].description);
		$('.work-entry:last').append(formattedEmployer + formattedTitle);
		$('.work-entry:last').append(formattedDates);
		$('.work-entry:last').append(formattedLocation);
		$('.work-entry:last').append(formattedDescription);
		var skillsLength = work.jobs[job].skills.length;
		for (var i = 0; i < skillsLength; i++) {
			$('.work-entry:last').toggleClass(work.jobs[job].skills[i]);
		};
	};
}
};

var projects = {
	'projects': [{
		'title': 'Portfolio',
		'dates': '2015',
		'description': 'Online porfolio using HTML and CSS',
		'images': 'http://placehold.it/125/125',
		'skills': ['html','css']
	},{
		'title': 'Online Resume',
		'dates': '2015',
		'description': 'Online resume using JavaScript',
		'images': 'http://placehold.it/125/125',
		'skills': ['javascript']
	}],
	'display': function displayProjects() {
	var projectsLength = projects.projects.length;
	for (var project = 0; project < projectsLength; project++) {
		$('#projects').append(HTMLprojectStart);
		var formattedTitle = HTMLprojectTitle.replace('%data%', projects.projects[project].title);
		var formattedDates = HTMLprojectDates.replace('%data%', projects.projects[project].dates);
		var formattedDescription = HTMLprojectDescription.replace('%data%', projects.projects[project].description);
		var formattedImage = HTMLprojectImage.replace('%data%', projects.projects[project].images);
		$('.project-entry:last').append(formattedTitle);
		$('.project-entry:last').append(formattedDates);
		$('.project-entry:last').append(formattedDescription);
		$('.project-entry:last').append(formattedImage);
		var skillsLength = projects.projects[project].skills.length;
		for (var i = 0; i < skillsLength; i++) {
			$('.project-entry:last').toggleClass(projects.projects[project].skills[i]);
		};
	};
}
};

var bio = {
	'name': 'Samir Mehta',
	'role': 'Web Developer',
	'welcomeMessage': 'Howdy',
	'contacts': {
		'email': 'sammehta88@gmail.com',
		'mobile': '(248) 739-9185',
		'github': 'www.github.com',
		'twitter': '@faketwitter',
		'location': 'Washington, D.C.'
	},
	'skills': [
		'solidworks','matlab', 'html', 'css', 'javascript', 'excel', 'chinese'],
	'biopic': 'http://placehold.it/175/175',
	'display': function displayBio() {
	var formattedName = HTMLheaderName.replace('%data%',bio.name);
	var formattedRole = HTMLheaderRole.replace('%data%',bio.role);
	var formattedMessage = HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage);
	$('#header').prepend(formattedRole);
	$('#header').prepend(formattedName);
	var formattedPic = HTMLbioPic.replace('%data%',bio.biopic);
	$('#header').append(formattedPic);
	$('#header').append(formattedMessage);
	$('#header').append(internationalizeButton);
	if (bio.skills != 0) {
		$('#header').append(HTMLskillsStart);
		var skillsLength = bio.skills.length;
		for (var i = 0; i < skillsLength; i++) {
			var formattedSkill = HTMLskills.replace(/%data%/gi,bio.skills[i]);
			$('#skills').append(formattedSkill);
		};
	};
	for (var key in bio.contacts) {
		if (bio.contacts.hasOwnProperty(key)) {
			var formattedContact = HTMLcontactGeneric.replace('%contact%', key);
			formattedContact = formattedContact.replace('%data%', bio.contacts[key]);
			$('#topContacts').append(formattedContact);
			$('#footerContacts').append(formattedContact);
		};
	};
	}
};

var education = {
	'schools': [
	{
		'name': 'Dartmouth College',
		'location': 'Hanover, NH',
		'degree': 'B.A.',
		'majors': {
			'major': 'Engineering Sciences modified with Economics',
			'minor': 'Chinese'
		},
		'dates': 2010,
		'url':'http://dartmouth.edu/',
		'skills': ['solidworks','excel','chinese']
	},{
		'name': 'Thayer School of Engineering',
		'location': 'Hanover, NH',
		'degree': 'BE',
		'majors': {
			'major': 'Mechanical Engineering'
		},
		'dates': 2012,
		'url':'http://engineering.dartmouth.edu/',
		'skills': ['solidworks','matlab']
	},{
		'name': 'Jiao Tong',
		'location': 'Shanghai, China',
		'degree': 'Chinese Language Certificate',
		'majors': {
			'major': 'Chinese'
		},
		'dates': 2011,
		'url':'http://en.sjtu.edu.cn/',
		'skills': ['chinese']
	}],
	'onlineCourses': [
	{
		'title': 'Front-End Web Developer Nanodegree',
		'school': 'Udacity',
		'dates':  2015,
		'url': 'https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001',
		'skills': ['html', 'css', 'javascript']
	}],
	'display': function displayEducation() {
		var schoolsLength = education.schools.length
		for (var school = 0; school < schoolsLength; school++) {
			$('#education').append(HTMLschoolStart);
			var formattedName = HTMLschoolName.replace('%data%',education.schools[school].name);
			formattedName = formattedName.replace('%url%',education.schools[school].url);
			var formattedDegree = HTMLschoolDegree.replace('%data%',education.schools[school].degree);
			var formattedDates = HTMLschoolDates.replace('%data%',education.schools[school].dates);
			var formattedLocation = HTMLschoolLocation.replace('%data%',education.schools[school].location);
			formattedName = formattedName + formattedDegree;
			$('.education-entry:last').append(formattedName);
			$('.education-entry:last').append(formattedLocation);
			$('.education-entry:last').append(formattedDates);

			for (var key in education.schools[school].majors) {
				if (education.schools[school].majors.hasOwnProperty(key)) {
					var formattedMajor = HTMLschoolMajor.replace('%major%', key);
					formattedMajor = formattedMajor.replace('%data%', education.schools[school].majors[key]);
				};
				$('.education-entry:last').append(formattedMajor);
			};

			var skillsLength = education.schools[school].skills.length;
			for (var k = 0; k < skillsLength; k++) {
				$('.education-entry:last').toggleClass(education.schools[school].skills[k]);
			};
		};

		$('#education').append(HTMLonlineClasses);
		onlineLength = education.onlineCourses.length;
		for (var i = 0; i < onlineLength; i++) {
			var formattedTitle = HTMLonlineTitle.replace('%data%',education.onlineCourses[i].title);
			formattedTitle = formattedTitle.replace('%url%',education.onlineCourses[i].url);
			var formattedSchool = HTMLonlineSchool.replace('%data%',education.onlineCourses[i].school);
			formattedTitle = formattedTitle + formattedSchool;
			$('#education').append(formattedTitle);

			var formattedDates = HTMLonlineDates.replace('%data%',education.onlineCourses[i].dates);
			$('.online-entry:last').append(formattedDates);

			for (var j = 0; j < skillsLength; j++) {
				$('.online-entry:last').toggleClass(education.onlineCourses[i].skills[j]);
			};
		};
	}
};

bio.display();
work.display();
projects.display();
education.display();

function inName() {
	var name = bio.name;
	var splitNames = name.split(' ');
	console.log(splitNames);
	var lastName = splitNames[1].toUpperCase();
	var firstName = splitNames[0].charAt(0).toUpperCase() + splitNames[0].slice(1).toLowerCase();
	var intName = firstName + ' ' + lastName;
	return intName;
};

$('#map-div').append(googleMap);

//TODO: add feature so can click on multiple skills with different
//colors hightlighted

var lastClickedSkill = 'none';
$('.skills-li').on('click', function() {
	var skill = $(this).attr('id');
	var skillClass = "." + skill;

	if (lastClickedSkill === skill) {
		$(skillClass).toggleClass("skill-clicked");
		lastClickedSkill = skill;
	}

	else {
		var oldSkill = "." + lastClickedSkill;
		$(oldSkill).toggleClass("skill-clicked", false);
		$(skillClass).toggleClass("skill-clicked");
	}

	lastClickedSkill = skill;
})