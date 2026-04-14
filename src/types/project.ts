export interface ProjectLink {
	label: string;
	href: string;
}

export interface Project {
	name: string;
	description: string;
	icon?: string;
	links: ProjectLink[];
}
