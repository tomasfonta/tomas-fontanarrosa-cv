import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface ProjectShowcaseProps {
	isDarkMode?: boolean;
	translations: {
		projectsTitle: string;
	};
}

export const ProjectShowcase = ({ isDarkMode = true, translations }: ProjectShowcaseProps) => {
	const cardClasses = isDarkMode
		? 'bg-gray-800 border-gray-700'
		: 'bg-gray-50 border-gray-200';

	const projects = [
		{
			title: 'E-Commerce Platform',
			description: 'Full-stack e-commerce solution with microservices architecture, built with Java Spring Boot and React. Features include real-time inventory management, payment processing, and advanced search capabilities.',
			technologies: ['Java', 'Spring Boot', 'React', 'PostgreSQL', 'Redis', 'Docker'],
			image: '🛒'
		},
		{
			title: 'Travel Booking System',
			description: 'Scalable travel booking platform handling millions of requests daily. Implemented caching strategies and optimized database queries to improve performance by 60%.',
			technologies: ['Java', 'Microservices', 'Kubernetes', 'AWS', 'MongoDB'],
			image: '✈️'
		},
		{
			title: 'Real-Time Analytics Dashboard',
			description: 'Interactive dashboard for visualizing real-time business metrics and KPIs. Built with modern frontend technologies and integrated with multiple data sources.',
			technologies: ['React', 'TypeScript', 'Node.js', 'WebSockets', 'D3.js'],
			image: '📊'
		}
	];

	return (
		<Card className={cardClasses}>
			<CardContent className="p-6 sm:p-8">
				<h3 className={`text-xl sm:text-2xl font-bold mb-6 ${isDarkMode ? 'text-indigo-400' : 'text-indigo-600'} flex items-center gap-2`}>
					<span className={`${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`}>const</span>
					{translations.projectsTitle}
					<span className={`${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`}>= [</span>
				</h3>

				<div className="pl-6 space-y-6">
					{projects.map((project, index) => (
						<div
							key={index}
							className={`${isDarkMode ? 'bg-gray-900/50' : 'bg-white'} border ${isDarkMode ? 'border-gray-700' : 'border-gray-200'} rounded-lg p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1`}
						>
							<div className="flex items-start gap-4">
								<div className="text-4xl">{project.image}</div>
								<div className="flex-1">
									<h4 className={`text-lg sm:text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-2`}>
										{project.title}
									</h4>
									<p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} mb-4 text-sm sm:text-base`}>
										{project.description}
									</p>
									<div className="flex flex-wrap gap-2">
										{project.technologies.map((tech) => (
											<Badge key={tech} className="bg-indigo-600/20 text-indigo-400 text-xs">
												{tech}
											</Badge>
										))}
									</div>
								</div>
							</div>
						</div>
					))}
				</div>

				<div className={`${isDarkMode ? 'text-gray-500' : 'text-gray-400'} mt-6`}>];</div>
			</CardContent>
		</Card>
	);
};
