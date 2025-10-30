import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Send } from 'lucide-react';
import { toast } from 'sonner';

interface ContactFormProps {
	isDarkMode?: boolean;
	translations: {
		contactTitle: string;
		contactDescription: string;
		namePlaceholder: string;
		emailPlaceholder: string;
		messagePlaceholder: string;
		sendButton: string;
		successMessage: string;
	};
}

export const ContactForm = ({ isDarkMode = true, translations }: ContactFormProps) => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		message: ''
	});

	const cardClasses = isDarkMode
		? 'bg-gray-800 border-gray-700'
		: 'bg-gray-50 border-gray-200';

	const inputClasses = isDarkMode
		? 'bg-gray-900 border-gray-600 text-gray-100 focus:border-green-400'
		: 'bg-white border-gray-300 text-gray-900 focus:border-green-600';

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		// Note: This is a demo form. In production, implement actual backend integration
		// or use a service like Formspree, EmailJS, or Netlify Forms
		const mailtoLink = `mailto:fontanarrosatomas@gmail.com?subject=Contact from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(formData.message)}%0D%0A%0D%0AFrom: ${encodeURIComponent(formData.email)}`;
		window.location.href = mailtoLink;
		toast.success(translations.successMessage);
		setFormData({ name: '', email: '', message: '' });
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		setFormData(prev => ({
			...prev,
			[e.target.name]: e.target.value
		}));
	};

	return (
		<Card className={cardClasses}>
			<CardContent className="p-6 sm:p-8">
				<h3 className={`text-xl sm:text-2xl font-bold mb-4 ${isDarkMode ? 'text-cyan-400' : 'text-cyan-600'} flex items-center gap-2`}>
					<span className={`${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`}>const</span>
					{translations.contactTitle}
					<span className={`${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`}>= {'{'}</span>
				</h3>

				<p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} mb-6 text-sm sm:text-base pl-6`}>
					{translations.contactDescription}
				</p>

				<form onSubmit={handleSubmit} className="pl-6 space-y-4">
					<div>
						<input
							type="text"
							name="name"
							value={formData.name}
							onChange={handleChange}
							placeholder={translations.namePlaceholder}
							required
							className={`w-full px-4 py-3 rounded-lg border ${inputClasses} focus:outline-none focus:ring-2 focus:ring-green-400/50 transition-all`}
						/>
					</div>
					<div>
						<input
							type="email"
							name="email"
							value={formData.email}
							onChange={handleChange}
							placeholder={translations.emailPlaceholder}
							required
							className={`w-full px-4 py-3 rounded-lg border ${inputClasses} focus:outline-none focus:ring-2 focus:ring-green-400/50 transition-all`}
						/>
					</div>
					<div>
						<textarea
							name="message"
							value={formData.message}
							onChange={handleChange}
							placeholder={translations.messagePlaceholder}
							required
							rows={5}
							className={`w-full px-4 py-3 rounded-lg border ${inputClasses} focus:outline-none focus:ring-2 focus:ring-green-400/50 transition-all resize-none`}
						/>
					</div>
					<Button
						type="submit"
						className={`${isDarkMode ? 'bg-cyan-600 hover:bg-cyan-500' : 'bg-cyan-700 hover:bg-cyan-600'} text-white font-semibold w-full sm:w-auto`}
					>
						<Send className="w-4 h-4 mr-2" />
						{translations.sendButton}
					</Button>
				</form>

				<div className={`${isDarkMode ? 'text-gray-500' : 'text-gray-400'} mt-6`}>{'}'};</div>
			</CardContent>
		</Card>
	);
};
