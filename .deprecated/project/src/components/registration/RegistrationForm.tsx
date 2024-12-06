import React, {useState} from 'react';

interface FormData {
    name: string;
    email: string;
    institution: string;
    committee: string;
    experience: string;
    delegation: string;
}

const RegistrationForm = () => {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        institution: '',
        committee: '',
        experience: '',
        delegation: '',
    });

    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would typically send the data to your backend
        setSubmitted(true);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    if (submitted) {
        return (
            <div className="text-center p-8 bg-green-50 rounded-lg">
                <h3 className="text-2xl font-bold text-green-700 mb-4">Registration Successful!</h3>
                <p className="text-green-600">Thank you for registering for WESMUN 2024.</p>
                <p className="text-green-600">Please check your email for further instructions.</p>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
            <div className="space-y-6">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-[#55537b]">
                        Full Name
                    </label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        required
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#57465c] focus:ring-[#57465c]"
                        value={formData.name}
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-[#55537b]">
                        Email Address
                    </label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        required
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#57465c] focus:ring-[#57465c]"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <label htmlFor="institution" className="block text-sm font-medium text-[#55537b]">
                        Institution
                    </label>
                    <input
                        type="text"
                        name="institution"
                        id="institution"
                        required
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#57465c] focus:ring-[#57465c]"
                        value={formData.institution}
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <label htmlFor="committee" className="block text-sm font-medium text-[#55537b]">
                        Preferred Committee
                    </label>
                    <select
                        name="committee"
                        id="committee"
                        required
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#57465c] focus:ring-[#57465c]"
                        value={formData.committee}
                        onChange={handleChange}
                    >
                        <option value="">Select a committee</option>
                        <optgroup label="Beginner">
                            <option value="UNICEF">UNICEF</option>
                            <option value="WHO">WHO</option>
                            <option value="UNHCR">UNHCR</option>
                        </optgroup>
                        <optgroup label="Intermediate">
                            <option value="UNODC">UNODC</option>
                            <option value="GA1">GA1</option>
                            <option value="ECOSOC">ECOSOC</option>
                        </optgroup>
                        <optgroup label="Advanced">
                            <option value="NATO">NATO</option>
                            <option value="UNSC">UNSC</option>
                            <option value="HSC">HSC</option>
                        </optgroup>
                    </select>
                </div>

                <button
                    type="submit"
                    className="w-full bg-[#57465c] text-white py-2 px-4 rounded-md hover:bg-opacity-90 transition-colors duration-200"
                >
                    Submit Registration
                </button>
            </div>
        </form>
    );
};

export default RegistrationForm;